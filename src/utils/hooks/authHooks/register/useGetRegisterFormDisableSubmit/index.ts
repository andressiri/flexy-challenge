import { useMemo } from "react";
import { validateEmail } from "../../../../helpers";
import { IRegisterFormData } from "../../../../../typings/users";

const useGetRegisterFormDisableSubmit = (
  imageWasUploaded: boolean,
  formData: IRegisterFormData,
  isLoading: boolean
) => {
  const disableSubmit = useMemo(() => {
    return Boolean(
      isLoading ||
        !formData.fullName ||
        !formData.phone ||
        !formData.email ||
        !validateEmail(formData.email) ||
        !formData.password ||
        (formData.password?.length && formData.password?.length < 8) ||
        !imageWasUploaded
    );
  }, [imageWasUploaded, formData, isLoading]);

  return disableSubmit;
};

export default useGetRegisterFormDisableSubmit;
