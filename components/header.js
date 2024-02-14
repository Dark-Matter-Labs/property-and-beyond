import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className="bg-[url('/header-final.png')] bg-contain lg:bg-auto lg:bg-right lg:bg-no-repeat	bg-black h-[200px] md:h-[375px] w-full ">
        <div className='global-margin h-full flex items-end justify-start relative'>
          <h1 className='text-white mb-12 w-1/2 md:w-full'>
            <span className='font-bold'>Property</span> & Beyond Lab
          </h1>
        </div>
      </div>
    </>
  );
}
