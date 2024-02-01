'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, Disclosure, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { PortableText } from '@portabletext/react';
import { FaMinus, FaPlus, FaArrowRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function RiskCard({ risk }) {
  const [open, setOpen] = useState(false);
  const router = useRouter()

  const openRiskDetail = () => {
    setOpen(true);
    // router.push(`/map/${encodeURIComponent(risk.title)}`, undefined, {shallow:true})
  };
  return (
    <>
      <button
        className='group h-72 [perspective:1000px] flex flex-col items-center relative'
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
          <div className='absolute border inset-0 h-full w-full rounded-lg bg-black text-white px-4 [transform:rotateY(180deg)] [backface-visibility:hidden]'>
            <div className='p-4'>{risk.description}</div>
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
                      as='div'
                      enter='ease-in-out duration-500'
                      enterFrom='opacity-0'
                      enterTo='opacity-100'
                      leave='ease-in-out duration-500'
                      leaveFrom='opacity-100'
                      leaveTo='opacity-0'
                    >
                   
                    </Transition.Child>
                    {/* main div for slider */}
                    <div className='flex h-auto flex-col bg-green-400 min-h-screen p-6'>
                    
                      <div className='w-full h-full bg-red-300 flex flex-row relative'>
                        <div className='top-0 sticky w-1/3 bg-orange-700 h-full flex flex-col p-6'>
                          <div className='text-3xl my-4'>{risk.title}</div>
                          <div className='relative h-64 w-full mb-4 bg-black rounded-lg'>
                            <Image
                              fill
                              src='/icon.png'
                              alt='icon'
                              className='absolute object-fit'
                            />
                          </div>
                          <div className='w-full bg-blue-400 rounded-lg text-lg p-4'>
                            {risk.riskSubType}
                          </div>
                          <div className='text-lg my-4'>{risk.description}</div>
                          <div className='relative z-30 bottom-0 left-0 flex'>
                        <button
                          type='button'
                          className=' text-green-600 h-10 w-10 rounded-full bg-white flex items-center justify-center'
                          onClick={() => setOpen(false)}
                        >
                          <FaArrowRight />
                        </button>
                      </div>
                        </div>
                        <div className='flex flex-col w-2/3 p-6'>
                          {/* PROPERTY Issues */}
                          <div className='flex flex-col bg-black bg-opacity-40 mb-6 p-4'>
                            <div className='italic font-bold'>Property Issues</div>
                            <div>
                              {risk?.propertyIssues?.map((issue, id) => (
                                <div key={id} className='my-6'>
                                  <div className='font-semibold'>{issue.title}</div>
                                  <div>
                                    <PortableText value={issue.content} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          {/* Section two */}
                          <div className='flex flex-col bg-blue-900 bg-opacity-50 mb-6'>
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  {' '}
                                  <Disclosure.Button className='italic font-bold flex flex-row justify-between items-center p-4'>
                                    <div>Impacts</div>
                                    {open ? (
                                      <FaMinus className='w-4 h-4 mr-4' />
                                    ) : (
                                      <FaPlus className='w-4 h-4 mr-4' />
                                    )}
                                  </Disclosure.Button>
                                  <Disclosure.Panel className='flex flex-col px-4 pb-4'>
                                    <div className='flex flex-col'>
                                      <div className='text-xl font-semibold mb-2'>
                                        Direct Impacts
                                      </div>
                                      {risk?.directImpacts.map((impact, id) => (
                                        <div key={id}>
                                          <div className='font-bold'>{impact.title}</div>
                                          <div>
                                            <PortableText value={impact.content} />
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                    <div className='flex flex-col mt-4'>
                                      <div className='text-xl font-semibold mb-2'>
                                        Indirect Impacts
                                      </div>
                                      {risk?.indirectImpacts.map((impact, id) => (
                                        <div key={id}>
                                          <div className='font-bold'>{impact.title}</div>
                                          <div>
                                            <PortableText value={impact.content} />
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </div>
                          {/* Section 3 */}
                          <div className='flex flex-col bg-blue-900 bg-opacity-50 mb-6'>
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  {' '}
                                  <Disclosure.Button className='italic font-bold flex flex-row justify-between items-center p-4'>
                                    <div>PREPAREDNESS</div>
                                    {open ? (
                                      <FaMinus className='w-4 h-4 mr-4' />
                                    ) : (
                                      <FaPlus className='w-4 h-4 mr-4' />
                                    )}
                                  </Disclosure.Button>
                                  <Disclosure.Panel className='flex flex-col px-4 pb-4'>
                                    <div className='flex flex-col'>
                                      <div className=''>
                                        <PortableText value={risk?.preparedness} />
                                      </div>
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </div>
                          {/* Section 4 */}
                          <div className='text-2xl'>Case Studies</div>
                          {risk?.caseStudies.map((study, id) => (
                            <div
                              key={id}
                              className='flex flex-col border-b border-black bg-opacity-50 mb-6'
                            >
                              <Disclosure>
                                {({ open }) => (
                                  <>
                                    {' '}
                                    <Disclosure.Button className='italic font-bold flex flex-row justify-between items-center p-4'>
                                      <div>{study.title}</div>
                                      {open ? (
                                        <FaMinus className='w-4 h-4 mr-4' />
                                      ) : (
                                        <FaPlus className='w-4 h-4 mr-4' />
                                      )}
                                    </Disclosure.Button>
                                    <Disclosure.Panel className='flex flex-col px-4 pb-4'>
                                      <div className='flex flex-col'>
                                        <div className='my-2'>
                                          Location: {study.location}
                                     
                                        </div>
                                        <div className='my-2'>date: {study.date}</div>
                                        <div className='my-2'>Description: {study.desctiption}</div>
                                      </div>
                                    </Disclosure.Panel>
                                  </>
                                )}
                              </Disclosure>
                            </div>
                          ))}

                          {/* Section 4 */}
                          <div className='flex flex-col bg-blue-900 bg-opacity-50 mb-6'>
                            <Disclosure>
                              {({ open }) => (
                                <>
                                  {' '}
                                  <Disclosure.Button className='italic font-bold flex flex-row justify-between items-center p-4'>
                                    <div>Stakeholders</div>
                                    {open ? (
                                      <FaMinus className='w-4 h-4 mr-4' />
                                    ) : (
                                      <FaPlus className='w-4 h-4 mr-4' />
                                    )}
                                  </Disclosure.Button>
                                  <Disclosure.Panel className='flex flex-col px-4 pb-4'>
                                    <div className='flex flex-col'>
                                      <div className=''>
                                        {risk.stakeholders.map((holder, id) => (
                                          <div key={id} className='my-2w'>
                                            <div className='font-bold'>{holder.title}</div>
                                            <div>
                                              <PortableText value={holder.content} />
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </Disclosure.Panel>
                                </>
                              )}
                            </Disclosure>
                          </div>
                          {/* PROPERTY Issues */}
                          <div className='flex flex-col bg-black bg-opacity-40 p-4'>
                            <div className='italic font-bold'>Solutions</div>
                            <div>
                              {risk?.propertyIssues?.map((issue, id) => (
                                <div key={id} className='my-6'>
                                  <div className='font-semibold'>{issue.title}</div>
                                  <div>
                                    <PortableText value={issue.content} />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
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
