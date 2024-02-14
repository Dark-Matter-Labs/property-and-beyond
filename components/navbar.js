'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';


export default function NavBar() {
  const pathname = usePathname();
  if (pathname !== '/studio/structure') {
    return (
      <div className='text-white bg-black h-20 sm:h-32 flex items-center justify-center'>
        <div className='global-margin flex flex-row justify-between items-center h-full w-full'>
          <Link href='/' className=''>
            <Image src='/logo.png' alt='logo for the property and beyond website' width={218} height={107} className='hidden sm:block'/>
            <Image src='/logo.png' alt='logo for the property and beyond website' width={163} height={80} className='block sm:hidden'/>
          </Link>
        </div>
      </div>
    );
  }
}
