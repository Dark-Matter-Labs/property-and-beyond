'use client';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import { FaArrowRight, FaMinus, FaPlus } from 'react-icons/fa';
import { Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const componentsPropertyIssue = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <p className='text-[16px]'>{children}</p>,
  },
};

const componentsImpacts = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <span className='text-[20px] inline'>{children}</span>,
  },
};

const componentsPreparedness = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <p className='text-[20px]'>{children}</p>,
  },
};

const componentsCaseStudy = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <p className='text-[20px]'>{children}</p>,
  },
};

const componentsStakehoilder = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <span className='text-[20px] inline'>{children}</span>,
  },
};

export default function RiskDetailNonModal({ risk, ...props }) {
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
       

        <div className='w-full h-full flex flex-col lg:flex-row relative md:overflow-auto lg:overflow-visible'>
          {/* close button lg + */}

          <div className='w-full flex flex-col grow relative items-center min-w-80'>
            <div className='lg:sticky lg:top-0'>
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
              <div className='flex flex-row my-6 gap-6 overflow-x-scroll snap-x snap-mandatory no-scrollbar'>
                {risk?.propertyIssues?.map((issue, id) => (
                  <div
                    key={id}
                    className='border p-6 rounded-[9px] bg-[#E7E7E7] min-w-80 flex flex-col justify-between'
                    style={{ borderColor: color }}
                  >
                    <div className='text-black text-[40px] break-words w-full'>{issue.title}</div>
                    <div className='flex items-center w-full justify-center my-3'>
                      <Image
                        src='/propertyIssue.png'
                        alt='alt text'
                        width={150}
                        height={150}
                        className='object-fit h-32 w-32'
                      />
                    </div>
                    <div>
                      <PortableText value={issue.content} components={componentsPropertyIssue} />
                    </div>
                  </div>
                ))}
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
                        <div className='basis-2/3'>
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
                        {risk?.caseStudy.map((study, id) => (
                          <div
                            key={id}
                            className='flex flex-row basis-2/3 py-6 border-b'
                            style={{ borderColor: color }}
                          >
                            <div className='basis-1/3'>
                              <Image
                                src='/caseStudy.png'
                                alt=''
                                width={200}
                                height={200}
                                className='object-cover'
                              />
                            </div>
                            <div className='flex flex-col basis-2/3'>
                              <div className='text-[15px] font-bold'>{study.date}</div>
                              <div className='text-[20px] font-bold'>{study.title}</div>
                              <div className='text-[20px] font-bold mb-4'>{study.location}</div>
                              <div>
                                {study.description ? (
                                  <PortableText
                                    value={study?.description}
                                    components={componentsCaseStudy}
                                  />
                                ) : (
                                  <div>
                                    Tech industry leading here text here here text adding text only
                                    2 lines here. the text will be actually longere so more than 3
                                    lines actually even longer so we can consider approximalety this
                                    amount.
                                  </div>
                                )}
                              </div>
                            </div>
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
                      <div className='flex flex-col'>
                        <div className=''>
                          {risk.stakeholders.map((holder, id) => (
                            <div key={id} className='my-2w'>
                              <div className='mb-4'>
                                <div className='text-[20px] font-bold inline'>
                                  - {holder.title}:
                                </div>{' '}
                                <PortableText
                                  value={holder.content}
                                  components={componentsStakehoilder}
                                />
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
