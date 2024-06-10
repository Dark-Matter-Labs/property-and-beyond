import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({ data }) {
  if (data.file) {
    return (
      <Link href={data.file} target='_blank group '>
        <div className='bg-[#D9D9D9] border border-black h-auto md:h-[540px] max-w-80 basis-1 lg:basis-1/3 flex flex-col items-end justify-between relative'>
          <div className='w-full object-cover h-1/2'>
            {data.image && (
              <Image
                src={urlForImage(data.image)}
                className='object-cover w-full h-[180px]'
                width={400}
                height={200}
                alt='an abstract image'
              />
            )}
          </div>
          <div className='h-2/3 flex flex-col pl-8 pr-3 pb-6 pt-6 md:pt-0 justify-between'>
            <div className='text-[22px] uppercase'>{data.title}</div>
            <div className='text-[14px]'>{data.description}</div>
            <button className='bg-black text-white w-4/5 mt-4 flex items-center justify-center px-4 py-2'>
              Read More
            </button>
          </div>
          <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed md:bg-white/80 md:opacity-30 transition duration-300 ease-in-out md:hover:opacity-0'></div>
        </div>
      </Link>
    );
  } else if (data.link) {
    return (
      <Link href={data.link} target='_blank group '>
        <div className='bg-[#D9D9D9] border border-black h-auto md:h-[540px] max-w-80 basis-1 lg:basis-1/3 flex flex-col items-end justify-between relative'>
          <div className='w-full object-cover h-1/2'>
            {data.image && (
              <Image
                src={urlForImage(data.image)}
                className='object-cover w-full h-[180px]'
                width={400}
                height={200}
                alt='an abstract image'
              />
            )}
          </div>
          <div className='h-2/3 flex flex-col pl-8 pr-3 pb-6 pt-6 md:pt-0 justify-between'>
            <div className='text-[22px] uppercase'>{data.title}</div>
            <div className='text-[14px]'>{data.description}</div>
            <button className='bg-black text-white w-4/5 mt-4 flex items-center justify-center px-4 py-2'>
              Read More
            </button>
          </div>
          <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed md:bg-white/80 md:opacity-30 transition duration-300 ease-in-out md:hover:opacity-0'></div>
        </div>
      </Link>
    );
  } else {
    return (
      <div>
        <div className='bg-[#D9D9D9] border border-black h-auto md:h-[540px] max-w-80 basis-1 lg:basis-1/3 flex flex-col items-end justify-between relative'>
          <div className='w-full object-cover h-1/2'>
            {data.image && (
              <Image
                src={urlForImage(data.image)}
                className='object-cover w-full h-[180px]'
                width={400}
                height={200}
                alt='an abstract image'
              />
            )}
          </div>
          <div className='h-2/3 flex flex-col pl-12 pr-3 py-6'>
            <div className='text-[22px] uppercase'>{data.title}</div>
            <div className='text-[14px]'>{data.description}</div>
          </div>
          <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed md:bg-white/80 md:opacity-30 transition duration-300 ease-in-out md:hover:opacity-0'></div>
        </div>
      </div>
    );
  }
}
