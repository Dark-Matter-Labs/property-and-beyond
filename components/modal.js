'use client';
import { Dialog, Transition } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Fragment } from 'react';

export default function Modal({ children, slug }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [risk, setRisk] = useState(slug);

  useEffect(() => {
    if (`/tool/${risk}` === pathname) {
      setOpen(true);
    }
  }, [risk, pathname]);

  const closeRiskDetail = () => {
    router.push('/tool');
    setOpen(false);
    // setRisk(undefined)
  };

  useEffect(() => {
    if (pathname === '/tool') {
      setOpen(false);
      // setRisk(undefined)
    }
  }, [pathname]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={() => closeRiskDetail()}>
        <Transition.Child
          as={Fragment}
          enter='ease-in-out duration-500'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in-out duration-500'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black/20 transition-opacity flex items-center' />
        </Transition.Child>
        {/* controll width here first then re-do responsive design */}
        <div className='fixed inset-0 overflow-hidden w-[95vw]'>
          <div className='absolute inset-0 overflow-hidden w-full'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex w-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto overflow-y-scroll relative ml-5 lg:ml-10 w-full'>
                  <Transition.Child
                    as='div'
                    enter='ease-in-out duration-500'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in-out duration-500'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  ></Transition.Child>
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
