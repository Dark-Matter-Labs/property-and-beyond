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
  const res = await client.fetch(riskQuery, {
    next: { revalidate: 30, tags: ['risk', 'caseStudy', 'propertyIssue'] },
  });
  return res;
}

export default async function Map() {
  const data = await getData();
  return (
    <>
      <div className='flex flex-col items-center justify-center overflow-hidden h-full relative'>
        <Container data={data} />
        <div className='flex md:hidden relative w-full z-20 bg-black h-screen text-white flex-col items-center justify-center'>
          <div className='global-margin flex flex-col items-center justify-center'>
            The current version of the tool is only available on desktop view
            <Link
              href='/'
              className='mt-4 bg-white text-black px-4 py-2 rounded-[9px] w-22 flex items-center justify-center'
            >
              Go Back
            </Link>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          className='absolute w-auto min-w-full min-h-full max-w-none overflow-hidden'
        >
          <source src='/crisisVideo.mp4' type='video/mp4' />
        </video>
      </div>
    </>
  );
}
