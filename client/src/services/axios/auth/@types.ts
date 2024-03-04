import type { IUser } from '@/store/slices/user';

export interface IAuthResponse {
  access: string;
  refresh: string;
  user: IUser;
}

export interface IRefreshResponse {
  access: string;
  refresh: string;
}
