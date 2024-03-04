import React, { FC } from 'react';
import Link from 'next/link';
import { UNAUTHORIZED_LINK_LIST } from '@/constants';

export const Header: FC = () => {
  return (
    <header className="w-full h-[10vh] bg-primary items-center flex p-[15px] justify-between">
      <h1 className="text-xl font-bold">Booker</h1>
      <nav>
        <ul className="flex gap-1 mr-auto">
          {UNAUTHORIZED_LINK_LIST.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <span>{link.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
