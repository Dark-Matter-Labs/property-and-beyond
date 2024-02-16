import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';

export default function Tooltip({ children, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type='button'
        className='rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white'
        onClick={() => setOpen(true)}
      >
        <span className='sr-only'>Open ToolTip</span>
        <div className=''>{children}</div>
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
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-hidden'>
            <div className='absolute inset-0 overflow-hidden'>
              <div className='pointer-events-none fixed inset-y-0 right-0 flex pl-10'>
                <Transition.Child
                  as={Fragment}
                  enter='transform transition ease-in-out duration-500 sm:duration-700'
                  enterFrom='translate-x-full'
                  enterTo='translate-x-0'
                  leave='transform transition ease-in-out duration-500 sm:duration-700'
                  leaveFrom='translate-x-0'
                  leaveTo='translate-x-full'
                >
                  <Dialog.Panel className='pointer-events-auto relative'>
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
                          className='rounded-md text-black'
                          onClick={() => setOpen(false)}
                        >
                          <span className='sr-only'>Close panel</span>
                          <IoMdClose className='h-6 w-6' aria-hidden='true' />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className='flex h-full md:w-[50vw] flex-col overflow-y-scroll bg-white py-6 shadow-xl'>
                      <div className='px-4 sm:px-6'>
                        <Dialog.Title className='text-gray-900'>
                          {' '}
                          <h2 className='mobile sm:desktop'>
                            Methodology
                          </h2>
                        </Dialog.Title>
                      </div>
                      <div className='relative mx-6 flex-1 px-4 sm:px-6'>
                        <div className='absolute inset-0 px-4 sm:px-6'>
                          <p className='text-[20px] mb-4'>
                          Unlike traditional risk assessments that focus on classifying severity of risks and their immediate and tangible impacts, this tool highlights the inadequacies of existing property and ownership frameworks in addressing and mitigating future risks and the potential for these systemic failures to open up windows of opportunity for alternative solutions. 
                          </p>
                          <p className='text-[20px] mb-4'>
                         <span className='font-bold'>Definition of Property:</span> The definition of &apos;property&apos; here extends beyond real assets (land, real estate and infrastructure) to encompass other classes of property, including, amongst others,  intellectual property, corporate shares, contractual obligations and leases, money and data. We also consider the worldviews underpinning dominant property institutions. 
                          </p>
                          <p className='text-[20px] mb-4'>
                            <span className='font-bold'>Risk Identification:</span> We identified strategic risks across five domains: AI and innovation, climate, conflict and displacement, labor and economic security, and housing and civic infrastructure. \
                          </p>
                          <p className='text-[20px] mb-4'>
                            <span className='font-bold'>Property Linkages:</span> Each risk was analyzed based on its connection to property and ownership as a means of governance. Rather than assessing connections to geographic and context-specific property institutions, our analysis focused on core modalities of the axiomatic concept of property, i.e. the abstract characteristics that define its operability. This abstract analysis allows us to identify where in the code of property we can best innovate to address systemic failures. 

                          </p>
                          <p className='text-[20px] mb-4'>
                            <span className='font-bold'>Case Studies:</span> Each strategic risk is supported by relevant case studies. This serves to i) provide concrete examples of how theoretical risks have manifested in real-world situations ii) reveal gaps in current risk analysis and preparedness and iii) showcase how risks and their impacts, as well as their response spaces, vary across geographies and contexts. 

                          </p>
                          <p className='text-[20px] mb-4'>
                            <span className='font-bold'>Stakeholders:</span> In relation to each risk, we identified individuals, groups, or entities most impacted by or influential in managing the risk. This allows us to identify key stakeholders to engage in solutions spaces and their potential role as lead actor, supporter, or barrier. 
                          </p>
                          <p className=''>
                            <span className='font-bold'>Preparedness:</span> We assessed the nature and scope of existing mitigation strategies and their potential and limitations to respond to a specific risk. Wherever existing solutions appear insufficient to address a risk, a window of opportunity could open to shift the Overton window and propose more transformative solutions. Our mapping aims to start building capacity to anticipate where and when such new opportunity spaces might open to help preemptively and strategically build solutions for when they do. 
                          </p>
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
