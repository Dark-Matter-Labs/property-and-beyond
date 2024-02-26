import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ data }) {
  return (
    <Link href={data.file} target='_blank group '>
      <div className='bg-[#D9D9D9] border border-black h-auto md:h-[465.79px] max-w-80 basis-1 lg:basis-1/3 flex flex-col items-center justify-between relative'>
        <div className='w-full object-cover h-1/2'>
          <Image
            src={urlForImage(data.image)}
            className='object-cover w-full h-[180px]'
            width={400}
            height={200}
            alt='an abstract image'
          />
        </div>
        <div className='h-2/3 flex flex-col pl-12 pr-3 py-6'>
          <div className='text-[22px] uppercase'>{data.title}</div>
          <div className='text-[14px]'>{data.description}</div>
          <button className='bg-black text-white w-4/5 mt-4 flex items-center justify-center px-4 py-2'>
            Read More
          </button>
        </div>
        <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed md:bg-white/80 md:opacity-100 transition duration-300 ease-in-out md:hover:opacity-0'></div>
      </div>
    </Link>
  );
}
