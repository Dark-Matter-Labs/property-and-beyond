'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  const pathname = usePathname();
  if (pathname !== '/studio/structure' && pathname !== '/tool') {
    return (
      <div className='bg-black text-white h-28'>
        <div className='global-margin h-full flex flex-row justify-end items-center'>
          <div className='text-[16px]'>
           The Property & Beyond Lab is part of the Dark Matter Labs ecosystem. It is affiliated with both <Link href='https://radiclecivics.cc/' className='underline'>Radicle Civics</Link> and <Link href='https://www.7gencities.org/' className='underline'>7GenCities</Link> missions.
           <span className='ml-12 font-bold'>2024</span>
          </div>
          <div className='ml-12'>
            <Link href='https://darkmatterlabs.org/'>
            <Image src='/DMLogo.png' alt='Dark Matter Labs Logo' height={97} width={97} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
