'use client';
import { useEffect, useState } from 'react';
import RiskCard from './risk-card';
import Link from 'next/link';
import Tooltip from './tooltip';

export default function Container({ data }) {
  const [category, setCategory] = useState('all');
  const [filteredRisks, setFilteredRisks] = useState(data);

  useEffect(() => {
    if (data) {
      let filteredRisks = data;
      if (category === 'Labor and Economic Security') {
        setFilteredRisks(
          filteredRisks?.filter((risk) => risk.riskType === 'Labor and Economic Security'),
        );
      } else if (category === 'Climate') {
        setFilteredRisks(filteredRisks?.filter((risk) => risk.riskType === 'Climate'));
      } else if (category === 'AI and Innovation') {
        setFilteredRisks(filteredRisks?.filter((risk) => risk.riskType === 'AI and Innovation'));
      } else if (category === 'Housing and Commercial Real Estate / Civic Infrastructure') {
        setFilteredRisks(
          filteredRisks?.filter(
            (risk) => risk.riskType === 'Housing and Commercial Real Estate / Civic Infrastructure',
          ),
        );
      } else if (category === 'Conflict and Displacement') {
        setFilteredRisks(
          filteredRisks?.filter((risk) => risk.riskType === 'Conflict and Displacement'),
        );
      } else {
        setFilteredRisks(filteredRisks);
      }
    }
  }, [category, data]);

  return (
    <>
      <div className='hidden md:flex flex-col relative z-20 sm:h-[calc(100vh-96px)] w-full bg-black bg-opacity-50 overflow-auto no-scrollbar'>
        <div className='bg-black'>
          <div className='global-margin max-w-4xl bg-black text-white'>
            <div className='max-w-[950px]'>
            <h1 className='my-6 max-w-[600px] text-[55px] uppercase leading-[55px]'>CRISIS-RESPONSIVE TRANSFORMATION</h1>
            <div className='pb-20 grid grid-cols-3 gap-6'>
              <div className='col-span-2'>
                <p className='text-xl mb-2'>
                  Property is one of the core deep codes of our everyday life: often invisible,
                  overlooked or seen as a near-natural law.{' '}
                </p>
                <p className='text-xl mb-2'>
                  But now, crises are bringing property to the fore. Faced with an unprecedented
                  complexity and entanglement of systemic risks, externalities, and value creation
                  in today’s world, property as a means of governance is increasingly falling short.
                </p>
                <p className='text-xl mb-2'>
                  To help us prepare for deepening and emerging crises, we need to delve deeper into
                  the multifaceted challenges of property and build shared understanding and
                  urgency.
                </p>

                <p className='text-xl mb-2'>
                  We need to rethink property and its role in system responsiveness and resilience,
                  and its potential to drive wider transformational change.
                </p>
              </div>
              <div className='col-span-1'>
                <p className='text-xl font-bold mb-2'>
                  This digital tool maps critical global risks and their interplay with property and
                  ownership.
                </p>
                <p className='text-xl font-bold mb-2'>
                  It serves as a sensemaking tool to anticipate and respond to crises at a system
                  level and identify potential solutions, lead environments, and coalitions to build
                  real-world demonstrations of property futures.
                </p>
                <p className='text-xl font-bold mb-2'>
                It is intended as a living document. We will be continually evolving our risk mapping and exploring potential spaces for property innovation.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='flex flex-col global-margin relative z-30 min-h-screen 2xl:min-w-[1280px]'>
          <div className='mt-6'>
            <div className='flex items-center justify-start mr-3 text-white font-semibold text-[22px]'>
              Types of Crisis:
            </div>
            <div className='flex flex-row flex-wrap gap-y-4 justify-between mt-4'>
              <div className='flex flex-row flex-wrap gap-y-4'>
                <button
                  onClick={() => setCategory('all')}
                  className={`${category === 'all' ? 'bg-black text-white' : 'bg-white'} text-[16px] border border-black flex items-center justify-center rounded-[9px] p-2 mr-4 min-w-20`}
                >
                  All
                </button>
                <button
                  onClick={() => setCategory('Labor and Economic Security')}
                  className={`${category === 'Labor and Economic Security' ? 'bg-labor' : 'bg-white'} text-[16px] border border-black flex items-center justify-center rounded-[9px] p-2 mr-4`}
                >
                  Labor and Economic Security
                </button>
                <button
                  onClick={() =>
                    setCategory('Housing and Commercial Real Estate / Civic Infrastructure')
                  }
                  className={`${category === 'Housing and Commercial Real Estate / Civic Infrastructure' ? 'bg-housing' : 'bg-white'} text-[16px] border border-black flex items-center justify-center rounded-[9px] p-2 mr-4`}
                >
                  Housing and commercial real estate
                </button>
                <button
                  onClick={() => setCategory('Climate')}
                  className={`${category === 'Climate' ? 'bg-climate' : 'bg-white'} text-[16px] border border-black flex items-center justify-center rounded-[9px] p-2 mr-4`}
                >
                  Climate
                </button>
                <button
                  onClick={() => setCategory('AI and Innovation')}
                  className={`${category === 'AI and Innovation' ? 'bg-ai' : 'bg-white'} text-[16px] border border-black flex items-center justify-center rounded-[9px] p-2 mr-4`}
                >
                  AI and innovation
                </button>
                <button
                  onClick={() => setCategory('Conflict and Displacement')}
                  className={`${category === 'Conflict and Displacement' ? 'bg-conflict ' : 'bg-white '} text-[16px] border border-black flex items-center justify-center rounded-[9px] p-2 mr-4`}
                >
                  Conflict and displacement
                </button>
              </div>

              <Tooltip>
                {' '}
                <div className='rounded-[9px] bg-[#AD76F4] text-[16px] text-black border border-[#AD76F4] p-2 flex items-center justify-center justify-self-end'>
                  Methodology
                </div>{' '}
              </Tooltip>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10'>
            {filteredRisks.map((risk, id) => (
              <Link
                key={id}
                href={`/tool/${risk.slug.current}`}
                className='min-h-80 flex flex-col items-center relative'
              >
                <RiskCard risk={risk} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
