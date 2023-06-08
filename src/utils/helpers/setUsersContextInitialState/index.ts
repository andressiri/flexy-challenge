import React from "react";
import { AuthUser, IUsersContext } from "../../../typings/contexts";

interface ReturnObj {
  usersContext: IUsersContext;
  userRemembered: boolean;
}

const setUsersContextInitialState = (): ReturnObj => {
  const localStorageUser = localStorage.getItem("authUser");
  const localStorageRemember = localStorage.getItem("rememberUser");

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
