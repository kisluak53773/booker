import React, { FC } from 'react';
import { usePathname } from 'expo-router';
import { RegisterForm, LoginForm } from './Forms';

export const AuthScreen: FC = () => {
  const path = usePathname();

  return path === '/auth/register' ? <RegisterForm /> : <LoginForm />;
};
