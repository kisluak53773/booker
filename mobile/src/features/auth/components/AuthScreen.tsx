import React, { FC } from 'react';
import { usePathname } from 'expo-router';
import { RegisterForm, LoginForm } from './Forms';
import { SafeAreaView } from 'react-native';

export const AuthScreen: FC = () => {
  const path = usePathname();

  return (
    <SafeAreaView>
      {path === '/auth/register' ? <RegisterForm /> : <LoginForm />}
    </SafeAreaView>
  );
};
