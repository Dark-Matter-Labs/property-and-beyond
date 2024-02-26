import { client } from '@/sanity/lib/client';
import RiskCard from '@/components/risk-card';
import Container from '@/components/container';
import CrisisIntro from '@/components/crisis-intro';
import Link from 'next/link';

const riskQuery = `
*[_type == 'risk']{
  ...,
  "caseStudy": caseStudies[]->,
  "solution": solutions[]->,
}
`;

async function getData() {
  const res = await client.fetch(riskQuery, { next: { tags: ['risks'] } }, { cache: 'no-store' });
  return res;
}

export default async function Map() {
  const data = await getData();
  return (
    <>
      <div className='flex flex-col items-center justify-center overflow-hidden h-full relative'>
        <Container data={data} />
        <div className='flex md:hidden relative w-full z-20 bg-black h-screen text-white flex-col items-center justify-center global-margin'>
          CONTENT HERE TO EXPLAIN THAT THE VIS IS BETTER ON A DESKTOP
          <Link href='/' className='mt-4 bg-white text-black p-4 rounded-[9px]'>
            Go Back
          </Link>
        </div>
        <video
          autoPlay
          loop
          muted
          className='absolute w-auto min-w-full min-h-full max-w-none overflow-hidden'
        >
          <source src='/compressed11.mp4' type='video/mp4' />
        </video>
      </div>
    </>
  );
}
