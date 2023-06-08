import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthUser, SetAuthUser, Remember } from "../../../../typings/contexts";
import { IAuthUser } from "../../../../typings/users";
import { handleNumberOfTabs } from "../../../helpers";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "src/config/constants";
import { AUTH_USER, REMEMBER_USER, TOKEN } from "src/config/constants";

const useHandleAuthUserEffects = (
  authUser: AuthUser,
  setAuthUser: SetAuthUser,
  remember: Remember
) => {
  const isTheFirstLoad = useRef(true);
  const navigate = useNavigate();

  const clearUser = useCallback(() => {
    localStorage.removeItem(AUTH_USER);
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REMEMBER_USER);
  }, []);

  const handleMultipleTabs = useCallback(
    (e: StorageEvent) => {
      if (e.key !== AUTH_USER) return;

      if (!e.newValue) {
        clearUser();
        setAuthUser({});
        navigate(`/${LOGIN_ROUTE}`);
        return;
      }

      setAuthUser(JSON.parse(e.newValue));
      navigate(`/${DASHBOARD_ROUTE}`);
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
      localStorage.setItem(AUTH_USER, JSON.stringify(authUser));
      localStorage.setItem(TOKEN, token);

      if (remember?.current) localStorage.setItem(REMEMBER_USER, "true");

      return;
    }

    clearUser();
  }, [authUser, remember, clearUser]);
};

export default useHandleAuthUserEffects;
