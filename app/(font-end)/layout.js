import NavBar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <div className=''>{children}</div>
      <Footer />
    </div>
  );
}
