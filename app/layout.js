import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar';
import Footer from '@/components/footer';


const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <div>
          <NavBar />
          <div> {children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
