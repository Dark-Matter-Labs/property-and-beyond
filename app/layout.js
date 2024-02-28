// import { Inter } from 'next/font/google';
import './globals.css';

import { Source_Sans_3 } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

// const inter = Inter({ subsets: ['latin'] });
const source = Source_Sans_3({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Property and Beyond Lab',
  description: 'Part of the Dark Matter Labs ecosystem',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Property and Beyond Lab</title>
      </head>
      <body className={source.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
