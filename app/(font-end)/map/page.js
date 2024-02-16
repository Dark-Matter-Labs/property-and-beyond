import { client } from '@/sanity/lib/client';
import RiskCard from '@/components/risk-card';
import Container from '@/components/container';
import CrisisIntro from '@/components/crisis-intro';

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
        <video
          autoPlay
          loop
          muted
          className='absolute w-auto min-w-full min-h-full max-w-none overflow-hidden'
        >
          <source src='/video.mp4' type='video/mp4' />
        </video>
      </div>
    </>
  );
}
