import { createContext, FC, useRef, useState } from "react";
import { setUsersContextInitialState } from "../../utils/helpers";
import { useHandleAuthUserEffects } from "../../utils/hooks";
import {
  IContextProviderProps,
  IUsersContext,
  AuthUser,
} from "../../typings/contexts";

export const UsersContext = createContext<IUsersContext>(
  setUsersContextInitialState().usersContext
);

export const UsersContextProvider: FC<IContextProviderProps> = ({
  children,
}) => {
  const { usersContext, userRemembered } = setUsersContextInitialState();
  const [authUser, setAuthUser] = useState<AuthUser>(usersContext.authUser);
  const remember = useRef(userRemembered);

  useHandleAuthUserEffects(authUser, setAuthUser, remember);

  return (
    <UsersContext.Provider
      value={{
        authUser,
        setAuthUser,
        remember,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
