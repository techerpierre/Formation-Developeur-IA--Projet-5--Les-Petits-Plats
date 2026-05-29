import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
