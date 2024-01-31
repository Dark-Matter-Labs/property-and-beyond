'use client';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  if (pathname !== '/studio/structure') {
    return <div className='text-white bg-black h-20'>NAVBAR</div>;
  }
}
