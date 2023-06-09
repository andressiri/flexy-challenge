import { IAuthUser } from "./users";

export interface IContextProviderProps {
  children: React.ReactNode;
}

// Users
export type AuthUser = IAuthUser | object;
export type SetAuthUser = React.Dispatch<
  React.SetStateAction<IAuthUser | object>
>;

export type Remember = React.MutableRefObject<boolean | null>;

export type RegisteredUsers = IUser[] | [];
export type SetRegisteredUsers = React.Dispatch<
  React.SetStateAction<IUser[] | []>
>;

export interface IUsersContext {
  authUser: AuthUser;
  setAuthUser: SetAuthUser;
  remember: Remember;
  registeredUsers: RegisteredUsers;
  setRegisteredUsers: SetRegisteredUsers;
}
