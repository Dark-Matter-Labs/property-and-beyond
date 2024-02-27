'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function RiskCard({ risk }) {
  const [color, setColor] = useState();
  const [image, setImage] = useState('/');

  useEffect(() => {
    if (risk.riskType === 'Climate') {
      setColor('#F9F7D0');
      setImage('/climate.png');
    } else if (risk.riskType === 'AI and Innovation') {
      setColor('#E6D5F9');
      setImage('/ai.png');
    } else if (risk.riskType === 'Labor and Economic Security') {
      setColor('#4CAA49');
      setImage('/labor.png');
    } else if (risk.riskType === 'Housing and Commercial Real Estate / Civic Infrastructure') {
      setImage('/housing.png');
      setColor('#9DADD6');
    } else {
      setImage('/conflict.png');
      setColor('#F37A4B');
    }
  }, [color, risk.riskType]);

  return (
    <>
      <div className='group [perspective:1000px] w-full h-full flex flex-col items-center relative max-w-80'>
        <div
          className='relative bg-black/80 border-2 h-full w-full shadow-lg rounded-lg inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'
          style={{ borderColor: color }}
        >
          <div className='absolute inset-0 px-6 py-4 flex flex-col'>
            <div className='relative w-full h-28 rounded-lg'>
              <Image
                fill
                src={`${image}`}
                alt='icon'
                className='absolute object-cover h-28 w-full'
              />
            </div>
            {risk.riskSubType === 'Climate Change and Environmental Impact' ? (
              <div
                className='mt-4 text-[12px] leading-3	  text-center rounded-[10px] w-full py-1.5 px-2 flex items-center justify-center uppercase wrap-text'
                style={{ backgroundColor: color }}
              >
                Climate and Environmental Impact
              </div>
            ) : (
              <div
                className='mt-4 text-[12px] leading-3	  text-center rounded-[10px] w-full py-1.5 px-2 flex items-center justify-center uppercase wrap-text'
                style={{ backgroundColor: color }}
              >
                {risk.riskSubType}
              </div>
            )}

            <div className='text-left mt-4 flex grow items-center'>
              <div className='text-white text-[22px] leading-7 font-medium'>{risk.title}</div>
            </div>
          </div>
          <div
            className='absolute top-0 right-0 w-full h-full border-inherit text-black px-4 [transform:rotateY(180deg)] [backface-visibility:hidden] flex items-center justify-center'
            style={{ backgroundColor: color }}
          >
            <div className='p-4 text-[16px] line-clamp-[12]'>{risk.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
