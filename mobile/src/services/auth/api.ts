import { type IAuthResponse, type IRefreshResponse } from './@types';
import { saveTokens, saveUserToSecureStore } from '@/services';
import { axiosDefault, axiosRefresh } from '@/services';
import { type ILoginData, type IRegisterData } from '@/features/auth';

export const authService = {
  async login(data: ILoginData) {
    const response = await axiosDefault.post<IAuthResponse>(
      'auth/login/',
      data
    );
    if (response.data.access && response.data.refresh && response.data.user) {
      await saveTokens(response.data.access, response.data.refresh);
      await saveUserToSecureStore(response.data.user);
    }
    return response.data.user;
  },

  async register(data: IRegisterData) {
    const response = await axiosDefault.post<IAuthResponse>(
      'auth/register/',
      data
    );
    if (response.data.access && response.data.refresh && response.data.user) {
      await saveTokens(response.data.access, response.data.refresh);
      await saveUserToSecureStore(response.data.user);
    }
    return response.data.user;
  },

  async refresh() {
    const response = await axiosRefresh.post<IRefreshResponse>('auth/refresh/');
    if (response.data.access && response.data.refresh)
      await saveTokens(response.data.access, response.data.refresh);
    return response;
  },
};
