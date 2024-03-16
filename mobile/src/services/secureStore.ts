import * as SecureStore from 'expo-secure-store';
import { type IUser } from '@/store/slices/user';

export enum EnumStore {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken',
  'USER' = 'user',
}

export const getAccessToken = async () => {
  const accessToken = await SecureStore.getItemAsync(EnumStore.ACCESS_TOKEN);
  return accessToken || null;
};

export const getRefreshToken = async () => {
  const refreshToken = await SecureStore.getItemAsync(EnumStore.REFRESH_TOKEN);
  return refreshToken || null;
};

export const saveTokens = async (accessToken: string, refreshToken: string) => {
  await SecureStore.setItemAsync(EnumStore.ACCESS_TOKEN, accessToken);
  await SecureStore.setItemAsync(EnumStore.REFRESH_TOKEN, refreshToken);
};

export const saveUserToSecureStore = async (user: IUser) => {
  await SecureStore.setItemAsync(EnumStore.USER, JSON.stringify(user));
};

export const getUserFromSecureStore = async () => {
  const json = await SecureStore.getItemAsync(EnumStore.USER);
  return json ? JSON.parse(json) : null;
};

export const removeFromStorage = async () => {
  await SecureStore.deleteItemAsync(EnumStore.ACCESS_TOKEN);
  await SecureStore.deleteItemAsync(EnumStore.REFRESH_TOKEN);
  await SecureStore.deleteItemAsync(EnumStore.USER);
};
