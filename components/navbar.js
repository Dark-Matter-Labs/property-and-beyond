'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavBar() {
  const pathname = usePathname();
  if (pathname !== '/studio/structure') {
    return (
      <div className='text-white bg-black h-20 flex items-center justify-center'>
        <div className='global-margin flex flex-row justify-between items-center h-full w-full'>
          <Link href='/' className=''>
            NAVBAR
          </Link>
          <Link href='/map' className=''>
            MAP
          </Link>
        </div>
      </div>
    );
  }
}
