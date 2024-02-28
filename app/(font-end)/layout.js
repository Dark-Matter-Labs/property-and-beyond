import NavBar from '@/components/navbar';
import Footer from '@/components/footer';
import { Analytics } from '@vercel/analytics/react';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <div className=''>
        {children} <Analytics />
      </div>
      <Footer />
    </div>
  );
}
