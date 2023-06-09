import { useEffect, useRef, useState } from "react";
import {
  arrayBufferToBase64,
  clearSessionStorageImages,
} from "../../../utils/helpers";
import emptyImage from "../../../assets/empty-image.png";
import { ImageUploadProps } from "../../../typings/forms";

const useGetImageUploadControllers = ({
  image,
  notifyImageWasUploaded,
  notifyImageWasCanceled,
}: ImageUploadProps) => {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>(image || emptyImage);
  const inputFile = useRef<HTMLInputElement>(null);

  useEffect(() => {
    clearSessionStorageImages();

    return () => {
      clearSessionStorageImages();
    };
  }, []);

  const updateImage = (img: string) => {
    sessionStorage.setItem("imageForRequest", img);
    setImagePreview(img);
    setImageUploaded(true);

    if (notifyImageWasUploaded) notifyImageWasUploaded();
  };

  const handleUploadImage = () =>
    (inputFile as React.RefObject<HTMLInputElement>).current?.click();

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        if (fileReader.result === null) return;

        let result: string | ArrayBuffer = fileReader.result;

        if (typeof fileReader.result !== "string") {
          result = arrayBufferToBase64(result as ArrayBuffer);
        }

        updateImage(result as string);
      }
    };
    if (!e.target.files) return;

    fileReader.readAsDataURL(e.target.files[0]);
  };

  const handleCancelUpload = () => {
    setImagePreview(image || emptyImage);
    setImageUploaded(false);
    (inputFile.current as HTMLInputElement).value = "";
    clearSessionStorageImages();

    if (notifyImageWasCanceled) notifyImageWasCanceled();
  };

  return {
    imageUploaded,
    imagePreview,
    inputFile,
    handleUploadImage,
    handleFileUpload,
    handleCancelUpload,
  };
};

export default useGetImageUploadControllers;
