import axios, { type CreateAxiosDefaults } from 'axios';
import { getAccessToken, getRefreshToken, removeFromStorage } from '../cookies';
import { errorCatch } from '.';
import { authService } from './auth';

const options: CreateAxiosDefaults = {
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
};

export const axiosDefault = axios.create(options);
export const axiosWithAuth = axios.create(options);
export const axiosRefresh = axios.create(options);

axiosWithAuth.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (config?.headers && accessToken) {
    config.headers.Authorization = accessToken;
  }
  return config;
});

axiosRefresh.interceptors.request.use((config) => {
  const refreshToken = getRefreshToken();
  if (config.headers && refreshToken) {
    config.headers.Authorization = refreshToken;
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
          removeFromStorage();
      }
    }
  }
);
