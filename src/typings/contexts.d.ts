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

export interface IUsersContext {
  authUser: AuthUser;
  setAuthUser: SetAuthUser;
  remember: Remember;
}
