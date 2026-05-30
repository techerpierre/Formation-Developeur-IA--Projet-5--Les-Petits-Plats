import { Anton, Manrope } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import clsx from '@/libs/clsx';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
});

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Les petits plats',
  description: 'Les 50 recettes les plus populaires',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={clsx(anton.className, manrope.className)}>
      <body>{children}</body>
    </html>
  );
}
