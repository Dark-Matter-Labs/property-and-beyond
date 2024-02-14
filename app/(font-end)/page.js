import Link from 'next/link';
import Header from '@/components/header';
import SideMenu from '@/components/side-menu';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Header />
      <div className='relative bg-red-200 w-full h-screen'>
        <div className='global-margin h-96' id='section-1'>
          test content
        </div>
        <SideMenu />
      </div>
  
    </main>
  );
}
