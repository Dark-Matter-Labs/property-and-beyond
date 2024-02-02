'use client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';

import { usePathname, useRouter } from 'next/navigation';

export default function RiskDetail({ risk, ...props }) {
  const router = useRouter();

  return (
    <div className='flex h-auto flex-col bg-green-400 min-h-screen p-6'>
      <div className='w-full h-full bg-red-300 flex flex-row relative'>
        <div className='top-0 sticky w-1/3 bg-orange-700 h-full flex flex-col p-6'>
          <div className='text-3xl my-4'>{risk.title}</div>
          <div>{risk.slug.current}</div>
          <div className='relative h-64 w-full mb-4 bg-black rounded-lg'>
            <Image fill src='/icon.png' alt='icon' className='absolute object-fit' />
          </div>
          <div className='w-full bg-blue-400 rounded-lg text-lg p-4'>{risk.riskSubType}</div>
          <div className='text-lg my-4'>{risk.description}</div>
          <div className='relative z-30 bottom-0 left-0 flex'>
            {/* this displays on the page view as well as in the modal. we only want it on the modal */}
            <button
              type='button'
              className=' text-green-600 h-10 w-10 rounded-full bg-white flex items-center justify-center'
              onClick={() => router.push('/map')}
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
                      <div className='text-xl font-semibold mb-2'>Direct Impacts</div>
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
                      <div className='text-xl font-semibold mb-2'>Indirect Impacts</div>
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
            <div key={id} className='flex flex-col border-b border-black bg-opacity-50 mb-6'>
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
                        <div className='my-2'>Location: {study.location}</div>
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
  );
}
