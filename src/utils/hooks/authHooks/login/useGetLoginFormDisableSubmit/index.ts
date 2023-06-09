import { useMemo } from "react";
import { validateEmail } from "../../../../helpers";
import { ILoginFormData } from "../../../../../typings/users";

const useGetLoginFormDisableSubmit = (
  formData: ILoginFormData,
  isLoading: boolean
) => {
  const disableSubmit = useMemo(() => {
    return Boolean(
      isLoading ||
        !formData.email ||
        !validateEmail(formData.email) ||
        !formData.password ||
        (formData.password?.length && formData.password?.length < 8)
    );
  }, [formData, isLoading]);

  return disableSubmit;
};

export default useGetLoginFormDisableSubmit;
