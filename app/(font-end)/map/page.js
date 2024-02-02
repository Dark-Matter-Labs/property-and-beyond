import { client } from '@/sanity/lib/client';
import RiskCard from '@/components/risk';
import Container from '@/components/container';

const riskQuery = `
*[_type == 'risk']{
  ...,
  "caseStudies": caseStudies[]->,
  "solutions": solutions[]->,
}
`;

async function getData() {
  const res = await client.fetch(riskQuery);
  
  return res;
}

export default async function Map() {
  const data = await getData();

  return (
    <>
      <div className='flex items-center justify-center overflow-hidden h-[calc(100vh-120px)] relative'>
        <Container data={data} />
        <video
          autoPlay
          loop
          muted
          className='absolute  w-auto min-w-full min-h-full max-w-none overflow-hidden'
        >
          <source src='/video.mp4' type='video/mp4' />
        </video>
      </div>
    </>
  );
}
