import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ATLS Agency',
  description: 'A global creative agency delivering exceptional digital experiences',
  icons: {
    icon: '/favicon1.ico', // Path to the .ico file
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Primary Favicon */}
        <link rel="icon" href="/favicon1.ico" sizes="any" type="image/x-icon" />

        {/* Fallback to PNG */}
        <link rel="icon" href="/favicon1.png" sizes="any" type="image/png" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/favicon1.png" />

        {/* Optional Debugging */}
        {/* Uncomment if you rename the file for testing */}
        {/* <link rel="icon" href="/favicon_v3.ico" sizes="any" type="image/x-icon" /> */}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
