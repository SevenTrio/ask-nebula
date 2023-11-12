import { FC, ReactNode } from 'react';
import { Open_Sans } from 'next/font/google';
import { Header } from '@/components/header';

const openSans = Open_Sans({ subsets: ['latin'] });

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={openSans.className}>{children}</main>
    </>
  );
};
