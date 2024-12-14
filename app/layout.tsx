import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { TimeZoneDisplay } from '@/components/features/TimeZoneDisplay';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ATLS Agency',
  description: 'A global creative agency delivering exceptional digital experiences',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}