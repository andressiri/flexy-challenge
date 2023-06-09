import { toast } from "react-toastify";
import { useRegisterUser } from "../../../../../services";
import {
  useCheckImageWasUploaded,
  useGetFormBasicResponseHandlers,
  useGetRegisterFormDisableSubmit,
  useGetRegisterFormFieldsSpecifics,
  useGetRegisterFormState,
} from "../../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../../typings/forms";

const useGetRegisterComponentsProps = (): FormsComponentsProps => {
  const title = "¡Bienvenido!";
  const subtitle = "Convertite ahora en un agente Flexy.";
  const buttonText = "Registrate";
  const informationMissingError = "Please add the information as required";

  const { imageWasUploaded, notifyImageWasUploaded, notifyImageWasCanceled } =
    useCheckImageWasUploaded();

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetRegisterFormState();

  const formFieldsSpecificsArray = useGetRegisterFormFieldsSpecifics(
    formData,
    formVisited
  );

  const { errorAction, successAction, keepLoading, setKeepLoading } =
    useGetFormBasicResponseHandlers();

  const { registerUser, isLoading } = useRegisterUser({
    errorAction,
    successAction,
    errorToast: true,
    successToast: true,
  });

  const formIsLoading = isLoading || keepLoading;

  const disableSubmit = useGetRegisterFormDisableSubmit(
    imageWasUploaded,
    formData,
    formIsLoading
  );

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!disableSubmit) {
      setKeepLoading(true);

      registerUser(formData);
    } else {
      toast.error(informationMissingError);
    }
  };

  return {
    title,
    subtitle,
    imageProps: {
      notifyImageWasUploaded,
      notifyImageWasCanceled,
    },
    formProps: {
      formData,
      formVisited,
      formFieldsSpecificsArray,
      handleVisited,
      handleOnChange,
      handleSubmit,
      disableSubmit,
      formIsLoading,
      buttonText,
    },
  };
};

export default useGetRegisterComponentsProps;
