export interface IUser {
  id: string;
  picture: string;
  fullName: string;
  phone: string;
  email: string;
  password: string;
  verified?: boolean;
  roleId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IAuthUser extends IUser {
  token: string;
}

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface ILoginFormVisited {
  email: boolean;
  password: boolean;
}

export interface IRegisterFormData extends ILoginFormData {
  fullName: string;
  phone: string;
}

export interface IRegisterFormVisited extends ILoginFormVisited {
  fullName: boolean;
  phone: boolean;
}
