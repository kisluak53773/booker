'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { LoginForm, RegisterForm } from './Forms';

export const AuthPage = () => {
  const pathname = usePathname();

  return (
    <main className="felx items-center justify-center">
      <section>
        <h1>{pathname.includes('login') ? 'Log in' : 'Register'}</h1>
        {pathname.includes('login') ? <LoginForm /> : <RegisterForm />}
      </section>
    </main>
  );
};
