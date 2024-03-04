import { type IAuthResponse, type IRefreshResponse } from './@types';
import { axiosDefault, axiosRefresh } from '..';
import { saveTokens } from '@/services/cookies';
import { type ILoginData, type IRegisterData } from '@/features/auth';

export const authService = {
  async login(data: ILoginData) {
    const response = await axiosDefault.post<IAuthResponse>(
      'auth/login/',
      data
    );
    if (response.data.access && response.data.refresh)
      saveTokens(response.data.access, response.data.refresh);
    return response.data.user;
  },

  async register(data: IRegisterData) {
    const response = await axiosDefault.post<IAuthResponse>(
      'auth/register/',
      data
    );
    if (response.data.access && response.data.refresh)
      saveTokens(response.data.access, response.data.refresh);
    return response.data.user;
  },

  async refresh() {
    const response = await axiosRefresh.post<IRefreshResponse>('auth/refresh/');
    if (response.data.access && response.data.refresh)
      saveTokens(response.data.access, response.data.refresh);
    return response;
  },
};
