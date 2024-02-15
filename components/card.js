import Image from 'next/image';

export default function Card() {
  return (
    <div className='border border-black h-[420px] w-96 flex flex-col items-center justify-between'>
      <div className='w-full object-cover'>
        <Image
          src='/cardImage.png'
          className='object-cover w-full h-full'
          width={400}
          height={200}
          alt='an abstract image'
        />
      </div>
      <div className='h-2/3 flex flex-col'></div>
    </div>
  );
}
