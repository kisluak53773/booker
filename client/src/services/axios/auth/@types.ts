import type { IUser } from '@/store/slices/user';

export interface IAuthResponse {
  access: string;
  refresh: string;
  user: IUser;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
}

export interface IRefreshResponse {
  access: string;
}
