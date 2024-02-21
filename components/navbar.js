'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CiMenuBurger } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';

import {
  useFloating,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
  useTransitionStyles,
  FloatingOverlay,
} from '@floating-ui/react';

export default function NavBar() {
  const pathname = usePathname();

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const {
    refs: mobileRef,
    floatingStyles: mobileFloatingStyles,
    context: mobileContext,
  } = useFloating({
    placement: 'bottom-start',
    open: mobileMenuIsOpen,
    onOpenChange: setMobileMenuIsOpen,
    middleware: [offset(10), flip(), shift()],
  });

  const mobileMenuClick = useClick(mobileContext);
  const mobileMenuDismiss = useDismiss(mobileContext, { outsidePressEvent: 'mousedown' });
  const mobileMenuRole = useRole(mobileContext);

  const { getReferenceProps: mobileRefProps, getFloatingProps: mobileFloatingProps } =
    useInteractions([mobileMenuClick, mobileMenuDismiss, mobileMenuRole]);

  const { isMounted: mobileMenuIsMounted, styles: mobileMenuTransitionStyles } =
    useTransitionStyles(mobileContext, {
      duration: 150,
      initial: {
        opacity: 0,
      },
      open: {
        opacity: 100,
      },
      close: {
        opacity: 0,
      },
    });
  if (pathname !== '/studio/structure') {
    return (
      <div
        className={`${pathname === '/map' ? '' : 'sticky top-0'} text-white bg-black h-20 md:h-32 flex items-center justify-center z-50`}
      >
        <div className='global-margin flex flex-row justify-between items-center h-full w-full'>
          <Link href='/' className=''>
            <Image
              src='/logo.png'
              alt='logo for the property and beyond website'
              width={218}
              height={107}
              className='hidden sm:block'
            />
            <Image
              src='/logo.png'
              alt='logo for the property and beyond website'
              width={163}
              height={80}
              className='block sm:hidden'
            />
          </Link>
          <div className='block md:hidden'>
            <div className='inset-y-0 float-right flex items-center pt-2 lgNav:hidden'>
              {pathname === '/' && (
                <button ref={mobileRef.setReference} {...mobileRefProps()}>
                  <span className='sr-only'>Open main menu</span>
                  {mobileMenuIsOpen ? (
                    <IoMdClose className='block h-10 w-10' aria-hidden='true' />
                  ) : (
                    <CiMenuBurger className='block h-10 w-10' aria-hidden='true' />
                  )}
                </button>
              )}
              {mobileMenuIsMounted && (
                <FloatingOverlay
                  id='overlay'
                  lockScroll
                  style={{ background: 'rgba(0, 0, 0, 0)' }}
                  className='-z-10'
                >
                  <FloatingFocusManager context={mobileContext} modal={false} disabled>
                    <div
                      className='h-auto w-full'
                      ref={mobileRef.setFloating}
                      style={mobileFloatingStyles}
                      {...mobileFloatingProps()}
                    >
                      <div
                        className='w-full h-full bg-black'
                        style={{ ...mobileMenuTransitionStyles }}
                      >
                        <div className='flex flex-col items-start justify-end global-margin '>
                          <ul className=''>
                            `{' '}
                            <li className='menu mb-6 hover:cursor-pointer'>
                              <ScrollLink
                                to='section-1'
                                smooth={true}
                                duration={500}
                                offset={-250}
                                spy={true}
                                activeClass=''
                                onClick={() => setMobileMenuIsOpen(false)}
                              >
                                PROPERTY & BEYOND LAB
                              </ScrollLink>
                            </li>
                            <li className='menu mb-6 hover:cursor-pointer'>
                              <ScrollLink
                                to='section-2'
                                smooth={true}
                                duration={500}
                                offset={-200}
                                spy={true}
                                activeClass=''
                                onClick={() => setMobileMenuIsOpen(false)}
                              >
                                POLITICS OF CHANGE
                              </ScrollLink>
                            </li>
                            <li className='menu mb-6 hover:cursor-pointer'>
                              <ScrollLink
                                to='section-3'
                                smooth={true}
                                duration={500}
                                offset={-200}
                                spy={true}
                                activeClass=''
                                onClick={() => setMobileMenuIsOpen(false)}
                              >
                                CAPABILITIES
                              </ScrollLink>
                            </li>
                            <li className='menu mb-6 hover:cursor-pointer'>
                              <ScrollLink
                                to='section-4'
                                smooth={true}
                                duration={500}
                                offset={-200}
                                spy={true}
                                activeClass=''
                                onClick={() => setMobileMenuIsOpen(false)}
                              >
                                PROOFS OF POSSIBILIY
                              </ScrollLink>
                            </li>
                            <li className='menu mb-6 hover:cursor-pointer'>
                              <ScrollLink
                                to='section-5'
                                smooth={true}
                                duration={500}
                                offset={-200}
                                spy={true}
                                activeClass=''
                                onClick={() => setMobileMenuIsOpen(false)}
                              >
                                JOIN US
                              </ScrollLink>
                            </li>
                            <li className='menu mb-6 hover:cursor-pointer'>
                              <ScrollLink
                                to='section-6'
                                smooth={true}
                                duration={500}
                                offset={-200}
                                spy={true}
                                activeClass=''
                                onClick={() => setMobileMenuIsOpen(false)}
                              >
                                CONFERENCE
                              </ScrollLink>
                            </li>
                            <li className='menu mb-6 hover:cursor-pointer'>
                              <ScrollLink
                                to='section-7'
                                smooth={true}
                                duration={500}
                                offset={-200}
                                spy={true}
                                activeClass=''
                                onClick={() => setMobileMenuIsOpen(false)}
                              >
                                PARTNERS
                              </ScrollLink>
                            </li>
                            `
                          </ul>
                        </div>
                      </div>
                    </div>
                  </FloatingFocusManager>
                </FloatingOverlay>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
