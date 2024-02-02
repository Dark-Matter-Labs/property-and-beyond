'use client';
import Image from 'next/image';

export default function RiskCard({ risk }) {
  return (
    <>
      <div className='group [perspective:1000px] w-full h-full flex flex-col items-center relative'>
        <div className='relative bg-white h-full w-full shadow-lg rounded-lg inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div className='absolute inset-0 p-4'>
            <div className='relative w-full bg-black h-28 rounded-lg'>
              <Image fill src='/icon.png' alt='icon' className='absolute object-fit p-4' />
            </div>
            <div className='my-2 bg-orange-400 rounded-lg w-full text-left pl-4'>
              {risk.riskSubType}
            </div>
            <div className='text-left mt-4'>
              <div>{risk.title}</div>
            </div>
          </div>
          <div className='absolute border inset-0 h-full w-full rounded-lg bg-black text-white px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='p-4'>{risk.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
