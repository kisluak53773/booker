import * as SecureStore from 'expo-secure-store';

export enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken',
}

export const getAccessToken = async () => {
  const accessToken = await SecureStore.getItemAsync(EnumTokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const getRefreshToken = async () => {
  const refreshToken = await SecureStore.getItemAsync(EnumTokens.REFRESH_TOKEN);
  return refreshToken || null;
};

export const saveTokens = async (accessToken: string, refreshToken: string) => {
  await SecureStore.setItemAsync(EnumTokens.ACCESS_TOKEN, accessToken);
  await SecureStore.setItem(EnumTokens.REFRESH_TOKEN, refreshToken);
};

export const removeFromStorage = async () => {
  await SecureStore.deleteItemAsync(EnumTokens.ACCESS_TOKEN);
  await SecureStore.deleteItemAsync(EnumTokens.REFRESH_TOKEN);
};
