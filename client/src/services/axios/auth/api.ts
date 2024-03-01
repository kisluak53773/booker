import {
  IAuthResponse,
  IRegisterData,
  ILoginData,
  IRefreshResponse,
} from './@types';
import { axiosDefault, axiosRefresh } from '..';
import { saveAccessToCookies, saveRefreshToCookies } from '@/services/cookies';

export const authService = {
  async login(data: ILoginData) {
    const response = await axiosDefault.post<IAuthResponse>(
      'auth/login/',
      data
    );
    if (response.data.access && response.data.refresh) {
      saveAccessToCookies(response.data.access);
      saveRefreshToCookies(response.data.refresh);
    }
    return response.data.user;
  },

  async register(data: IRegisterData) {
    const response = await axiosDefault.post<IAuthResponse>(
      'auth/register/',
      data
    );
    if (response.data.access && response.data.refresh) {
      saveAccessToCookies(response.data.access);
      saveRefreshToCookies(response.data.refresh);
    }

    return response.data.user;
  },

  async refresh() {
    const response = await axiosRefresh.post<IRefreshResponse>('auth/refresh/');
    if (response.data.access) saveAccessToCookies(response.data.access);
    return response;
  },
};
