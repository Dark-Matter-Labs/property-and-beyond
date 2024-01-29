import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <NavBar />
      <div className='global-margins'>{children}</div>
      <Footer />
    </div>
  );
}
