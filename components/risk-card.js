'use client';
import Image from 'next/image';



export default function RiskCard({ risk }) {

  if (risk.riskType === 'Conflict and displacement' ) {
    return (
      <>
      <div className='group [perspective:1000px] w-full h-full flex flex-col items-center relative'>
        <div className='relative bg-white/70 border-2 border-[#40A3FF] h-full w-full shadow-lg rounded-lg inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div className='absolute inset-0 p-4'>
            <div className='relative w-full bg-black h-28 rounded-lg'>
              <Image fill src='/icon.png' alt='icon' className='absolute object-fit p-4' />
            </div>
            <div className='my-2 bg-[#40A3FF] rounded-lg w-full text-left pl-4'>
              {risk.riskSubType}
            </div>
            <div className='text-left mt-4'>
              <div>{risk.title}</div>
            </div>
          </div>
          <div className='absolute top-0 right-0 w-full h-full border-inherit bg-[#40A3FF] text-black px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='p-4'>{risk.description}</div>
          </div>
        </div>
      </div>
    </>
    )
  } else if (risk.riskType === 'Labor') {
    return (
    <>
      <div className='group [perspective:1000px] w-full h-full flex flex-col items-center relative'>
        <div className='relative bg-white/70 border-2 border-[#40FF8C] h-full w-full shadow-lg rounded-lg inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div className='absolute inset-0 p-4'>
            <div className='relative w-full bg-black h-28 rounded-lg'>
              <Image fill src='/icon.png' alt='icon' className='absolute object-fit p-4' />
            </div>
            <div className='my-2 bg-[#40FF8C] rounded-lg w-full text-left pl-4'>
              {risk.riskSubType}
            </div>
            <div className='text-left mt-4'>
              <div>{risk.title}</div>
            </div>
          </div>
          <div className='absolute top-0 right-0 w-full h-full border-inherit bg-[#40FF8C] text-black px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='p-4'>{risk.description}</div>
          </div>
        </div>
      </div>
    </>
    )
  } else if (risk.riskType === 'Housing and commercial real estate / civic infrastructure') {
    return (
      <>
      <div className='group [perspective:1000px] w-full h-full flex flex-col items-center relative'>
        <div className='relative bg-white/70 border-2 border-[#FFBE40] h-full w-full shadow-lg rounded-lg inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div className='absolute inset-0 p-4'>
            <div className='relative w-full bg-black h-28 rounded-lg'>
              <Image fill src='/icon.png' alt='icon' className='absolute object-fit p-4' />
            </div>
            <div className='my-2 bg-[#FFBE40] rounded-lg w-full text-left pl-4'>
              {risk.riskSubType}
            </div>
            <div className='text-left mt-4'>
              <div>{risk.title}</div>
            </div>
          </div>
          <div className='absolute top-0 right-0 w-full h-full border-inherit  bg-[#FFBE40] text-black px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='p-4'>{risk.description}</div>
          </div>
        </div>
      </div>
    </>
    )
  } else if (risk.riskType === 'Climate') {
    return (
      <>
      <div className='group [perspective:1000px] w-full h-full flex flex-col items-center relative'>
        <div className='relative bg-white/70 border-2 border-[#C970FF] h-full w-full shadow-lg rounded-lg inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div className='absolute inset-0 p-4'>
            <div className='relative w-full bg-black h-28 rounded-lg'>
              <Image fill src='/icon.png' alt='icon' className='absolute object-fit p-4' />
            </div>
            <div className='my-2 bg-[#C970FF] rounded-lg w-full text-left pl-4'>
              {risk.riskSubType}
            </div>
            <div className='text-left mt-4'>
              <div>{risk.title}</div>
            </div>
          </div>
          <div className='absolute top-0 right-0 w-full h-full border-inherit  bg-[#C970FF] text-black px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='p-4'>{risk.description}</div>
          </div>
        </div>
      </div>
    </>
    )
  } else {
    return (
      <>
      <div className='group [perspective:1000px] w-full h-full flex flex-col items-center relative'>
        <div className='relative bg-white/70 border-2 border-[#FFA5A5] h-full w-full shadow-lg rounded-lg inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
          <div className='absolute inset-0 p-4'>
            <div className='relative w-full bg-black h-28 rounded-lg'>
              <Image fill src='/icon.png' alt='icon' className='absolute object-fit p-4' />
            </div>
            <div className='my-2 bg-[#FFA5A5] rounded-lg w-full text-left pl-4'>
              {risk.riskSubType}
            </div>
            <div className='text-left mt-4'>
              <div>{risk.title}</div>
            </div>
          </div>
          <div className='absolute top-0 right-0 w-full h-full border-inherit bg-[#FFA5A5] text-black px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='p-4'>{risk.description}</div>
          </div>
        </div>
      </div>
    </>
    )
    
  }
}
