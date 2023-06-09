import { createContext, FC, useRef, useState } from "react";
import { setUsersContextInitialState } from "../../utils/helpers";
import { useHandleAuthUserEffects } from "../../utils/hooks";
import {
  IContextProviderProps,
  IUsersContext,
  AuthUser,
  RegisteredUsers,
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
  const [registeredUsers, setRegisteredUsers] = useState<RegisteredUsers>([]); // used to mockup users in a simple way

  useHandleAuthUserEffects(authUser, setAuthUser, remember);

  return (
    <UsersContext.Provider
      value={{
        authUser,
        setAuthUser,
        remember,
        registeredUsers,
        setRegisteredUsers,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
