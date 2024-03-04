'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { LoginForm, RegisterForm } from './Forms';

export const AuthPage = () => {
  const pathname = usePathname();

  return (
    <main className="w-full h-[90vh] flex items-center justify-center">
      <section className="rounded-lg bg-white p-[20px]  shadow-lg backdrop-blur-3xl">
        <h1 className="font-bold text-2xl">
          {pathname.includes('login') ? 'Log in' : 'Register'}
        </h1>
        {pathname.includes('login') ? <LoginForm /> : <RegisterForm />}
      </section>
    </main>
  );
};
