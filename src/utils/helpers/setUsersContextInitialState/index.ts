import React from "react";
import { AuthUser, IUsersContext } from "../../../typings/contexts";
import { AUTH_USER, REMEMBER_USER } from "src/config/constants";

interface ReturnObj {
  usersContext: IUsersContext;
  userRemembered: boolean;
}

const setUsersContextInitialState = (): ReturnObj => {
  const localStorageUser = localStorage.getItem(AUTH_USER);
  const localStorageRemember = localStorage.getItem(REMEMBER_USER);

  const userRemembered = Boolean(localStorageRemember);

  let authUser: AuthUser = {};
  if (localStorageUser) authUser = JSON.parse(localStorageUser);

  return {
    usersContext: {
      authUser,
      setAuthUser: () => authUser,
      remember: React.createRef<boolean | null>(),
    },
    userRemembered,
  };
};

export default setUsersContextInitialState;
