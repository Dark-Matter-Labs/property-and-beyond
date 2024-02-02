'use client'
import { Dialog, Transition } from "@headlessui/react"
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Fragment } from "react";


export default function Modal2({children, risk}) {
    const [open, setOpen] = useState(false);
    const router = useRouter()
    const pathname = usePathname()
    // console.log(risk)
    console.log(pathname)
    useEffect(() => {
        if (risk !== undefined) {
            setOpen(true);
        } 
    },[risk])



    //console.log(open)
    
    const closeRiskDetail = () => {
      router.push('/map')
      setOpen(false);
    };

    useEffect(() => {
        if (pathname === '/map') {
            setOpen(false)
        }
    }, [pathname])

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
                
                   {children}
                  
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    )
}