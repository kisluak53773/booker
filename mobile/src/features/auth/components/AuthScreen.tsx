import React, { FC } from 'react';
import { usePathname } from 'expo-router';
import { RegisterForm, LoginForm } from './Forms';
import { CustomKeyboardView } from '@/components';

export const AuthScreen: FC = () => {
  const path = usePathname();

  return (
    <CustomKeyboardView>
      {path === '/auth/register' ? <RegisterForm /> : <LoginForm />}
    </CustomKeyboardView>
  );
};
