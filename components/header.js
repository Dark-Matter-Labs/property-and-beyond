import Image from 'next/image';

export default function Header() {
    return (
        <>
        <div className="bg-black w-full flex relative">
            <div className="global-margin w-full flex items-end justify-start mb-12">
                <h1 className='text-white'><span className='font-bold'>Property</span> & Beyond Lab</h1>
            </div>
            <Image src='/header-deco.png' alt='abstract white vertical lines on a black background' width={607} height={375} className='abolute right-0 top-0'/>
        </div>
        </>
    )
}