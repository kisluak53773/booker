import React, { FC } from 'react';
import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Toast from 'react-native-toast-message';

const RootLayout: FC = () => {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
      </Stack>
      <Toast />
    </Provider>
  );
};

export default RootLayout;
