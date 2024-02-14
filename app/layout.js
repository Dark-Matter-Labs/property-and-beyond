// import { Inter } from 'next/font/google';
import './globals.css';

import { Source_Sans_3 } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] });
const source = Source_Sans_3({ subsets: ['latin'],  display: 'swap',})

export const metadata = {
  title: 'Property and Beyond',
  description: 'A DML project',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>Property and Beyond</title>
      </head>
      <body className={source.className}>{children}</body>
    </html>
  );
}
