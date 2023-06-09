import { FC } from "react";
import {
  Container,
  StyledFileInput,
  StyledImage,
  Text,
} from "./styledComponents";
import useGetImageUploadControllers from "./useGetImageUploadControllers";
import { ImageUploadProps } from "../../../typings/forms";

const ImageUpload: FC<ImageUploadProps> = ({
  image,
  notifyImageWasUploaded,
  notifyImageWasCanceled,
}) => {
  const uploadText = "Subí tu foto de perfil";
  const removeText = "Quitar imagen";

  const {
    imageUploaded,
    imagePreview,
    inputFile,
    handleUploadImage,
    handleFileUpload,
    handleCancelUpload,
  } = useGetImageUploadControllers({
    image,
    notifyImageWasUploaded,
    notifyImageWasCanceled,
  });

  return (
    <Container>
      <StyledFileInput
        type="file"
        accept="image/*"
        ref={inputFile}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleFileUpload(e)
        }
      />
      <StyledImage
        src={imagePreview}
        alt="User image"
        width={47}
        height={47}
        onClick={imageUploaded ? handleCancelUpload : handleUploadImage}
      />
      <Text>{imageUploaded ? removeText : uploadText}</Text>
    </Container>
  );
};

export default ImageUpload;
