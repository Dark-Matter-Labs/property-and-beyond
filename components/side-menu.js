import { Link } from "react-scroll"

export default function SideMenu() {
    return (
        <div className='w-96 absolute h-full top-0 right-0 my-10'>
        <ul className="sticky top-16">
          <li className='menu mb-6'>
          PROPERTY & BEYOND LAB
          </li>
          <li className='menu mb-6'>
          POLITICS OF CHANGE
          </li>
          <li className='menu mb-6'> 
          PROOFS OF POSSIBILIY
          </li>
          <li className='menu mb-6'>
          JOIN US
          </li>
          <li className='menu mb-6'>
          CONFERENCE
          </li>
          <li className='menu mb-6'>
          PARTNERS
          </li>
        </ul>
      </div>
    )
}