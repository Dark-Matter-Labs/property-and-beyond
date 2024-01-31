'use client';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  if (pathname !== '/studio/structure') {
    return <div className='bg-black text-white'>Footer</div>;
  }
}
