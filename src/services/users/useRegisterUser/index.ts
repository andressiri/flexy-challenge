import { useCallback, useContext } from "react";
import { UsersContext } from "../../../contexts";
import { useServiceInstance } from "../../../utils/hooks";
import { IHandleResponseOptions } from "../../../typings/services";
import { IRegisterFormData } from "../../../typings/users";
import { REGISTER_ROUTE } from "../../../config/constants";

const useRegisterUser = (responseOptions: IHandleResponseOptions) => {
  const { setAuthUser } = useContext(UsersContext);
  const { executeRequest, isError, isSuccess, isLoading, message } =
    useServiceInstance(responseOptions);

  const registerUser = useCallback(
    (formData: IRegisterFormData) => {
      executeRequest({
        route: `/${REGISTER_ROUTE}`,
        data: formData,
        method: "POST",
        setState: setAuthUser,
        // type: "withImage", --- this should be used for calling requestWithImage handle before actually making the request,
        // ---------------------- in order to add the create a formData that includes the image stored in the localhost
      });
    },
    [executeRequest, setAuthUser]
  );

  return { registerUser, isError, isSuccess, isLoading, message };
};

export default useRegisterUser;
