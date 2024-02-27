'use client';
import { Link as ScrollLink } from 'react-scroll';

export default function SideMenu() {
  return (
    <div className='h-full hidden md:block absolute top-0 right-12 lg:right-16 xl:right-48 2xl:right-64 my-10'>
      <ul className='sticky top-48 min-w-[230px]'>
        <li className='menu mb-6 hover:cursor-pointer'>
          <ScrollLink
            to='section-1'
            smooth={true}
            duration={500}
            offset={-220}
            spy={true}
            activeClass='font-bold transition-all duration-300 ease-in-out'
          >
            PROPERTY & BEYOND LAB
          </ScrollLink>
        </li>
        <li className='menu mb-6 hover:cursor-pointer'>
          <ScrollLink
            to='section-2'
            smooth={true}
            duration={500}
            offset={-90}
            spy={true}
            activeClass='font-bold transition-all duration-300 ease-in-out'
          >
            POLITICS OF CHANGE
          </ScrollLink>
        </li>
        <li className='menu mb-6 hover:cursor-pointer'>
          <ScrollLink
            to='section-3'
            smooth={true}
            duration={500}
            offset={-90}
            spy={true}
            activeClass='font-bold transition-all duration-300 ease-in-out'
          >
            CAPABILITIES
          </ScrollLink>
        </li>
        <li className='menu mb-6 hover:cursor-pointer'>
          <ScrollLink
            to='section-4'
            smooth={true}
            duration={500}
            offset={-90}
            spy={true}
            activeClass='font-bold transition-all duration-300 ease-in-out'
          >
            PROOFS OF POSSIBILITY
          </ScrollLink>
        </li>
        <li className='menu mb-6 hover:cursor-pointer'>
          <ScrollLink
            to='section-5'
            smooth={true}
            duration={500}
            offset={-90}
            spy={true}
            activeClass='font-bold transition-all duration-300 ease-in-out'
          >
            JOIN US
          </ScrollLink>
        </li>
        <li className='menu mb-6 hover:cursor-pointer'>
          <ScrollLink
            to='section-6'
            smooth={true}
            duration={500}
            offset={-90}
            spy={true}
            activeClass='font-bold transition-all duration-300 ease-in-out'
          >
            CONFERENCE
          </ScrollLink>
        </li>
        <li className='menu mb-6 hover:cursor-pointer'>
          <ScrollLink
            to='section-7'
            smooth={true}
            duration={500}
            offset={-90}
            spy={true}
            activeClass='font-bold transition-all duration-300 ease-in-out'
          >
            PARTNERS
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}
