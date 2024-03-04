import type { Metadata } from 'next';
import { Inter, Ubuntu } from 'next/font/google';
import './globals.scss';
import { ReduxProvider } from '@/providers';
import { SITE_NAME } from '@/constants';
import { Header } from '@/components/header';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const ubuntu = Ubuntu({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Website with books reviews',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ubuntu.variable} scroll-smooth`}>
      <body className={inter.className}>
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
