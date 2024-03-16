import axios, { type CreateAxiosDefaults } from 'axios';
import { authService } from './auth';
import { errorCatch } from './errors';
import { getAccessToken, getRefreshToken, removeFromStorage } from '@/services';

const options: CreateAxiosDefaults = {
  baseURL: 'http://10.0.2.2:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosDefault = axios.create(options);
export const axiosWithAuth = axios.create(options);
export const axiosRefresh = axios.create(options);

axiosWithAuth.interceptors.request.use(async (config) => {
  const accessToken = await getAccessToken();
  if (config?.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosRefresh.interceptors.request.use(async (config) => {
  const refreshToken = await getRefreshToken();
  if (config.headers && refreshToken) {
    config.headers.Authorization = `Bearer ${refreshToken}`;
  }
  return config;
});

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;
    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'Given token not valid for any token type' ||
        errorCatch(error) ===
          'Authentication credentials were not provided.') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await authService.refresh();
        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === 'Given token not valid for any token type')
          await removeFromStorage();
      }
    }
  }
);
