'use client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PropertyIssueCard from './property-issue-card';
import { urlForImage } from '@/sanity/lib/image';

const componentsImpacts = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <span className='text-[20px]'>{children}</span>,
  },
};

const componentsPreparedness = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <p className='text-[20px] mb-4'>{children}</p>,
  },
};

const componentsCaseStudy = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <p className='text-[16px]'>{children}</p>,
  },
};

const componentsStakehoilder = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <span className='text-[20px] inline'>{children}</span>,
  },
};

export default function RiskDetail({ risk, ...props }) {
  const router = useRouter();

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
      <div className='hidden md:flex h-auto flex-row lg:flex-col bg-[#181616F0] min-h-screen'>
        {/* close button md -> lg */}
        <div
          className='lg:hidden flex max-w-14 px-2 relative justify-center min-h-screen'
          style={{ backgroundColor: color }}
        >
          <button
            type='button'
            className='text-black border border-black h-10 w-10 rounded-full bg-white flex items-center justify-center sticky top-[50vh]'
            onClick={() => router.push('/map')}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className='w-full h-full flex flex-col lg:flex-row relative md:overflow-auto lg:overflow-visible'>
          {/* close button lg + */}
          <div
            className='hidden lg:flex max-w-14 relative justify-center min-h-screen px-2 '
            style={{ backgroundColor: color }}
          >
            <button
              type='button'
              className='text-black border border-black h-10 w-10 rounded-full bg-white flex items-center justify-center sticky top-[50vh]'
              onClick={() => router.push('/map')}
            >
              <FaArrowRight />
            </button>
          </div>

          <div className='w-full flex flex-col grow relative items-center lg:max-w-80'>
            <div className='lg:sticky lg:top-0 min-w-80'>
              <div
                className='bg-black mt-6 ml-6 p-6 border rounded-lg text-white max-w-80'
                style={{ borderColor: color }}
              >
                <div className='relative h-32 w-full mb-4 bg-black rounded-lg'>
                  <Image fill src={`${image}`} alt='icon' className='absolute object-fit' />
                </div>
                <div className='text-[18px] my-4 font-medium'>{risk.title}</div>
                <div
                  className='w-full rounded-lg text-[12px] uppercase py-2 px-4 text-black'
                  style={{ backgroundColor: color }}
                >
                  {risk.riskSubType}
                </div>
                <div className='my-4 text-[14px]'>{risk.description}</div>
              </div>
            </div>
          </div>

          <div className='flex flex-col p-6 overflow-hidden '>
            {/* PROPERTY Issues */}
            <div className='flex flex-col mb-6'>
              <div className='text-white text-[30px] font-bold'>Linked property issues</div>
              <div className='flex my-6'>
                <div className='flex gap-6 overflow-x-scroll snap-x snap-mandatory no-scrollbar h-auto'>
                  {risk?.propertyIssues?.map((issue, id) => (
                    <PropertyIssueCard issue={issue} key={id} color={color} />
                  ))}
                </div>
              </div>
            </div>
            {/* Section two */}
            <div className='flex flex-col bg-opacity-50 mb-6 '>
              <Disclosure>
                {({ open }) => (
                  <>
                    {' '}
                    <Disclosure.Button
                      className={`${open ? 'rounded-t-[9px]' : 'rounded-[9px]'} flex flex-row justify-between items-center p-4 `}
                      style={{ backgroundColor: color }}
                    >
                      <div className='uppercase text-[20px] font-bold'>Impacts</div>
                      {open ? (
                        <FaMinus className='w-4 h-4 mr-4' />
                      ) : (
                        <FaPlus className='w-4 h-4 mr-4' />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className='flex flex-col p-6 bg-[#E7E7E7] border rounded-b-[9px]'
                      style={{ borderColor: color }}
                    >
                      <div className='flex gap-6'>
                        <div className='basis-1/2'>
                          <div className='text-xl font-semibold mb-4 uppercase'>Direct Impacts</div>
                          {risk?.directImpacts.map((impact, id) => (
                            <div key={id} className=''>
                              <div className='mb-3'>
                                <span className='font-bold inline text-[20px]'>
                                  {impact.title}:{' '}
                                </span>
                                <PortableText
                                  value={impact.content}
                                  components={componentsImpacts}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className='basis-1/2'>
                          <div className='flex flex-col'>
                            <div className='text-xl font-semibold mb-4 uppercase'>
                              Indirect Impacts
                            </div>
                            {risk?.indirectImpacts.map((impact, id) => (
                              <div key={id}>
                                <div className='mb-3'>
                                  <span className='font-bold inline text-[20px]'>
                                    {impact.title}:{' '}
                                  </span>
                                  <PortableText
                                    value={impact.content}
                                    components={componentsImpacts}
                                  />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
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
                    <Disclosure.Button
                      className={`${open ? 'rounded-t-[9px]' : 'rounded-[9px]'} flex flex-row justify-between items-center p-4 `}
                      style={{ backgroundColor: color }}
                    >
                      <div className='uppercase text-[20px] font-bold'>PREPAREDNESS</div>
                      {open ? (
                        <FaMinus className='w-4 h-4 mr-4' />
                      ) : (
                        <FaPlus className='w-4 h-4 mr-4' />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className='flex flex-col p-6 bg-[#E7E7E7] border rounded-b-[9px]'
                      style={{ borderColor: color }}
                    >
                      <div className='flex'>
                        <div className='basis-3/4'>
                          <PortableText
                            value={risk?.preparedness}
                            components={componentsPreparedness}
                          />
                        </div>
                        <div></div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* Section 4 */}
            <div className='flex flex-col border-b border-black bg-opacity-50 mb-6'>
              <Disclosure>
                {({ open }) => (
                  <>
                    {' '}
                    <Disclosure.Button
                      className={`${open ? 'rounded-t-[9px]' : 'rounded-[9px]'} flex flex-row justify-between items-center p-4 `}
                      style={{ backgroundColor: color }}
                    >
                      <div className='uppercase text-[20px] font-bold'>case studies</div>
                      {open ? (
                        <FaMinus className='w-4 h-4 mr-4' />
                      ) : (
                        <FaPlus className='w-4 h-4 mr-4' />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className='flex flex-col p-6 bg-[#E7E7E7] border rounded-b-[9px]'
                      style={{ borderColor: color }}
                    >
                      <div className='flex flex-col'>
                        {risk?.caseStudies.map((study, id) => (
                          <div key={id} className='py-6 border-b' style={{ borderColor: color }}>

                            <div className='flex flex-row '>
                              <div className='basis-1/4 rounded-md mr-4 flex flex-col items-start justify-center object-fill'>
                                {study.image ? (   <Image
                                  src={urlForImage(study.image)}
                                  alt=''
                                  width={300}
                                  height={200}
                                  className='object-fill rounded-md w-full h-full'
                                />) : (   <Image
                                  src='/27.jpg'
                                  alt=''
                                  width={300}
                                  height={200}
                                  className='object-fill rounded-md w-full h-full'
                                />)}
                             
                              </div>
                              <div className='flex flex-col basis-2/4'>
                                {study.date ? (
                                  <div className='text-[15px] font-bold'>{study.date}</div>
                                ) : (
                                  <div className='text-[15px] font-bold'>January</div>
                                )}

                                <div className='text-[20px] font-bold'>{study.title}</div>
                                {study.location ? (
                                  <div className='text-[20px] mb-2'>{study.location}</div>
                                ) : (
                                  <div className='text-[20px] mb-4'>Location</div>
                                )}
                                <div>
                                  {study.desctiption ? (
                                    <PortableText
                                      value={study?.desctiption}
                                      components={componentsCaseStudy}
                                    />
                                  ) : (
                                    <div className='text-[16px]'>
                                      Tech industry leading here text here here text adding text
                                      only 2 lines here. the text will be actually longere so more
                                      than 3 lines actually even longer so we can consider
                                      approximalety this amount.
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            {study.source ? (
                              <span className='text-[8px] translate-y-2'>{study.source}</span>
                            ) : (
                              <span className='text-[8px] translate-y-2'>
                                I am a source of an image
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>

            {/* Section 4 */}
            <div className='flex flex-col bg-blue-900 bg-opacity-50 mb-6'>
              <Disclosure>
                {({ open }) => (
                  <>
                    {' '}
                    <Disclosure.Button
                      className={`${open ? 'rounded-t-[9px]' : 'rounded-[9px]'} flex flex-row justify-between items-center p-4 `}
                      style={{ backgroundColor: color }}
                    >
                      <div className='uppercase text-[20px] font-bold'>stakeholders</div>
                      {open ? (
                        <FaMinus className='w-4 h-4 mr-4' />
                      ) : (
                        <FaPlus className='w-4 h-4 mr-4' />
                      )}
                    </Disclosure.Button>
                    <Disclosure.Panel
                      className='flex flex-col p-6 bg-[#E7E7E7] border rounded-b-[9px]'
                      style={{ borderColor: color }}
                    >
                      <div className='flex flex-col w-full'>
                        {risk.stakeholders.map((holder, id) => (
                          <div key={id} className='my-2 w-3/4'>
                            <div className='text-[20px] font-bold inline'>- {holder.title}:</div>{' '}
                            <PortableText
                              value={holder.content}
                              components={componentsStakehoilder}
                            />
                          </div>
                        ))}
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
            {/* PROPERTY Issues */}
            {/*  
          <div className='flex flex-col bg-black bg-opacity-40 p-4'>
            <div className='italic font-bold'>Solutions</div>
            <div>
              {risk?.solution?.map((sol, id) => (
                <div key={id} className='my-6'>
                  <div className='font-semibold'>{sol.title}</div>
                  <div>
                    <PortableText value={sol.description} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          */}
          </div>
        </div>
      </div>
    </>
  );
}
