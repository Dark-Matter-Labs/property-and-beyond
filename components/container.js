'use client';
import { useEffect, useState } from 'react';
import RiskCard from './risk';

export default function Container({ data }) {
  const [selected, setSelected] = useState();

  //  const getSelectedRisk = (item) => {
  //     setSelected(item)
  //    }

  //    useEffect(() => {
  //          if (data.indexOf(selected) > 0) {
  //              data.splice(data.indexOf(selected), 1);
  //              data.unshift(selected);
  //          }
  //    })

  return (
    <div className='flex flex-col relative z-20 h-screen w-full bg-black bg-opacity-50'>
      <div className='flex flex-col global-margin relative z-30'>
        <div className='flex flex-row justify-between mt-10'>
          <div className='flex flex-row'>
            <div className='bg-white flex items-center justify-center rounded-md p-2 mr-4'>
              categorie
            </div>
            <div className='bg-white flex items-center justify-center rounded-md p-2 mr-4'>
              categorie
            </div>
            <div className='bg-white flex items-center justify-center rounded-md p-2 mr-4'>
              categorie
            </div>
            <div className='bg-white flex items-center justify-center rounded-md p-2 mr-4'>
              categorie
            </div>
            <div className='bg-white flex items-center justify-center rounded-md p-2 mr-4'>
              categorie
            </div>
          </div>
          <div className='bg-orange-300 rounded-md p-2 flex items-center justify-center'>
            downloard
          </div>
        </div>
        <div className='grid grid-cols-4 gap-6 my-10'>
          {data.map((risk, id) => (
            <RiskCard key={id} risk={risk} />
          ))}
        </div>
      </div>
    </div>
  );
}
