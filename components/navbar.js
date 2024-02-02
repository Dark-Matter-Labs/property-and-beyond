'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavBar() {
  const pathname = usePathname();
  if (pathname !== '/studio/structure') {
    return <div className='text-white bg-black h-20 flex flex-row justify-between'> <Link href = '/' className='h-full'>NAVBAR</Link><Link href ='/map' className='h-full'>MAP</Link> <Link href ='/map/3clim-cyberwarfare-and-digital-weapons-of-mass-destabilization' className='h-full'>riskpage</Link></div>;
  }
}
