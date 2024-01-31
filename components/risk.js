'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function RiskCard({ risk, func }) {
  const [open, setOpen] = useState(false);

  const openRiskDetail = () => {
    setOpen(true);
    // func(risk)
  };

  return (
    <>
      <button
        className='group h-72 [perspective:1000px] flex flex-col items-center  border-0 relative'
        onClick={() => openRiskDetail()}
      >
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

          <div className='absolute inset-0 h-full w-full rounded-lg bg-black text-white px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div>
              {risk.description}
            </div>
          </div>
        </div>
      </button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-in-out duration-500'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in-out duration-500'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black opacity-80 transition-opacity flex items-center' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto overflow-y-scroll relative ml-10 w-full'>
                    <Transition.Child
                      as={Fragment}
                      enter='ease-in-out duration-500'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in-out duration-500'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                      <div className='absolute float-right top-0 right-0 flex pt-4 pr-8 sm:-ml-10'>
                        <button
                          type='button'
                          className='rounded-md text-green-600'
                          onClick={() => setOpen(false)}
                        >
                          <span className=''>Close panel</span>
                        </button>
                      </div>
                    </Transition.Child>
                    <div className='flex h-auto flex-col bg-black p-6 shadow-xl'>
                      <div className=''>
                        <Dialog.Title className='text-gray-900'>
                          {' '}
                          <h1 className='mobile sm:desktop text-white'>{risk.title}</h1>
                        </Dialog.Title>
                      </div>
                      <div className='text-white'>{risk.description}</div>
                      <div className='w-full bg-red-300 h-[900px] flex flex-row relative'>
                        <div className='top-0 sticky h-12 w-1/3 hover:text-blue-600'>Hello</div>
                        <div>
                          {risk.caseStudies.map((caseStudy, id) => (
                            <div key={id}>{caseStudy.title}</div>
                          ))}
                        </div>
                      </div>
                      <div className='w-full bg-blue-400 h-[900px]'>hello</div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
