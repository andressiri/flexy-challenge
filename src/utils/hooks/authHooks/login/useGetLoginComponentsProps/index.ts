import { toast } from "react-toastify";
import { useLoginUser } from "../../../../../services";
import {
  useGetFormBasicResponseHandlers,
  useGetLoginFormDisableSubmit,
  useGetLoginFormFieldsSpecifics,
  useGetLoginFormState,
} from "../../../../../utils/hooks";
import { FormsComponentsProps } from "../../../../../typings/forms";

const useGetLoginComponentsProps = (): FormsComponentsProps => {
  const title = "Ingresa a Flexy";
  const subtitle = "y comienza a disfrutar.";
  const buttonText = "Ingresa";
  const informationMissingError = "Por favor ingresa la información requerida";

  const { formData, handleOnChange, formVisited, handleVisited } =
    useGetLoginFormState();

  const formFieldsSpecificsArray = useGetLoginFormFieldsSpecifics(
    formData,
    formVisited
  );

  const { errorAction, successAction, keepLoading, setKeepLoading } =
    useGetFormBasicResponseHandlers();

  const { loginUser, isLoading } = useLoginUser({
    errorAction,
    successAction,
    errorToast: true,
    successToast: true,
  });

  const formIsLoading = isLoading || keepLoading;

  const disableSubmit = useGetLoginFormDisableSubmit(formData, formIsLoading);

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (!disableSubmit) {
      setKeepLoading(true);

      loginUser(formData);
    } else {
      toast.error(informationMissingError);
    }
  };

  return {
    title,
    subtitle,
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

export default useGetLoginComponentsProps;
