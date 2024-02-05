'use client';
import { useEffect, useState } from 'react';
import RiskCard from './risk-card';
import Link from 'next/link';

export default function Container({ data }) {
  const [category, setCategory] = useState('all');
  const [filteredRisks, setFilteredRisks] = useState(data);

  useEffect(() => {
    if (data) {
      let filteredRisks = data;
      if (category === 'Labour') {
        setFilteredRisks(filteredRisks?.filter((risk) => risk.riskType === 'Labor'));
      } else if (category === 'Climate') {
        setFilteredRisks(filteredRisks?.filter((risk) => risk.riskType === 'Climate'));
      } else if (category === 'AI and Innovation') {
        setFilteredRisks(filteredRisks?.filter((risk) => risk.riskType === 'AI and Innovation'));
      } else if (category === 'Housing and commercial real estate / civic infrastructure') {
        setFilteredRisks(
          filteredRisks?.filter(
            (risk) => risk.riskType === 'Housing and commercial real estate / civic infrastructure',
          ),
        );
      } else if (category === 'Conflict and displacement') {
        setFilteredRisks(
          filteredRisks?.filter((risk) => risk.riskType === 'Conflict and displacement'),
        );
      } else {
        setFilteredRisks(filteredRisks);
      }
    }
  }, [category, data]);

  return (
    <div className='flex flex-col relative z-20 h-[calc(100vh-120px)] w-full bg-black bg-opacity-50 overflow-auto'>
      <div className='flex flex-col global-margin relative z-30 2xl:min-w-[1280px]'>
        <div className='flex flex-row justify-between mt-10'>
          <div className='flex flex-row'>
            <div className='flex items-center justify-center mr-3 text-white'>Types of Crisis:</div>
            <button
              onClick={() => setCategory('all')}
              className={`${category === 'all' ? 'bg-orange-400' : 'bg-white'}  flex items-center justify-center rounded-md p-2 mr-4`}
            >
              All
            </button>
            <button
              onClick={() => setCategory('Labour')}
              className={`${category === 'Labour' ? 'bg-[#40FF8C]' : 'bg-white'}  flex items-center justify-center rounded-md p-2 mr-4`}
            >
              Labour
            </button>
            <button
              onClick={() =>
                setCategory('Housing and commercial real estate / civic infrastructure')
              }
              className={`${category === 'Housing and commercial real estate / civic infrastructure' ? 'bg-[#FFBE40]' : 'bg-white'}  flex items-center justify-center rounded-md p-2 mr-4`}
            >
              Housing and commercial real estate
            </button>
            <button
              onClick={() => setCategory('Climate')}
              className={`${category === 'Climate' ? 'bg-[#C970FF]' : 'bg-white'}  flex items-center justify-center rounded-md p-2 mr-4`}
            >
              Climate
            </button>
            <button
              onClick={() => setCategory('AI and Innovation')}
              className={`${category === 'AI and Innovation' ? 'bg-[#FFA5A5]' : 'bg-white'}  flex items-center justify-center rounded-md p-2 mr-4`}
            >
              AI and innovation
            </button>
            <button
              onClick={() => setCategory('Conflict and displacement')}
              className={`${category === 'Conflict and displacement' ? 'bg-[#40A3FF]' : 'bg-white'}  flex items-center justify-center rounded-md p-2 mr-4`}
            >
              Conflict and displacement
            </button>
          </div>
          <div className='bg-orange-400 rounded-md p-2 flex items-center justify-center'>
            Download
          </div>
        </div>
        <div className='grid grid-cols-4 gap-6 my-10'>
          {filteredRisks.map((risk, id) => (
            <Link
              key={id}
              href={`/map/${risk.slug.current}`}
              className='h-72 flex flex-col items-center relative'
            >
              <RiskCard risk={risk} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
