import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUser, SetAuthUser, Remember } from "../../../../typings/contexts";
import { IAuthUser } from "../../../../typings/users";
import { handleNumberOfTabs } from "../../../helpers";

const useHandleAuthUserEffects = (
  authUser: AuthUser,
  setAuthUser: SetAuthUser,
  remember: Remember
) => {
  const isTheFirstLoad = useRef(true);
  const navigate = useNavigate();

  const clearUser = useCallback(() => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("token");
    localStorage.removeItem("rememberUser");
  }, []);

  const handleMultipleTabs = useCallback(
    (e: StorageEvent) => {
      if (e.key !== "authUser") return;

      if (!e.newValue) {
        clearUser();
        setAuthUser({});
        navigate("/login");
        return;
      }

      setAuthUser(JSON.parse(e.newValue));
      navigate("/dashboard");
    },
    [setAuthUser, clearUser, navigate]
  );

  const handleBeforeUnloadEvent = useCallback(
    (e: BeforeUnloadEvent) => {
      e.preventDefault();
      const { newNumberOfTabs } = handleNumberOfTabs("substract");

      if (!remember?.current && newNumberOfTabs < 1) {
        clearUser();
        localStorage.removeItem("numberOfTabs");
      }
    },
    [remember, clearUser]
  );

  useEffect(() => {
    if (isTheFirstLoad.current) {
      handleNumberOfTabs("add");
      isTheFirstLoad.current = false;
    }

    window.addEventListener("beforeunload", handleBeforeUnloadEvent);
    window.addEventListener("storage", handleMultipleTabs);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnloadEvent);
      window.removeEventListener("storage", handleMultipleTabs);
    };
  }, [handleBeforeUnloadEvent, handleMultipleTabs]);

  useEffect(() => {
    const token = (authUser as IAuthUser)?.token;

    if (token) {
      localStorage.setItem("authUser", JSON.stringify(authUser));
      localStorage.setItem("token", token);

      if (remember?.current) localStorage.setItem("rememberUser", "true");

      return;
    }

    clearUser();
  }, [authUser, remember, clearUser]);
};

export default useHandleAuthUserEffects;
