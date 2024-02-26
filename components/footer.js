'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
export default function Footer() {
  const pathname = usePathname();
  if (pathname !== '/studio/structure' && pathname !== '/tool') {
    return (
      <div className='bg-black text-white h-28'>
        <div className='global-margin h-full flex flex-row justify-end items-center'>
          <div className='text-[30px] uppercase'>
            AN INITIATIVE OF DARK MATTER LABS <span className='ml-12 font-bold'>2024</span>
          </div>
          <div className='ml-12'>
            <Image src='/DMLogo.png' alt='Dark Matter Labs Logo' height={97} width={97} />
          </div>
        </div>
      </div>
    );
  }
}
