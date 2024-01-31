import { client } from '@/sanity/lib/client';
import RiskCard from '@/components/risk';
import Container from '@/components/container';

const riskQuery = `
*[_type == 'risk']{
  ...,
  caseStudies[]->,
}
`;

async function getData() {
  const res = await client.fetch(riskQuery, { next: { revalidate: 1 } });
  
  return res;
}

export default async function Map() {
  const data = await getData();

  return (
    <>
      <div className='relative flex items-center justify-center h-screen overflow-hidden'>
        <Container data={data} />
        <video
          autoPlay
          loop
          muted
          className='absolute z-10 bg-red-400 w-auto min-w-full min-h-full max-w-none'
        >
          <source src='/video.mp4' type='video/mp4' />
        </video>
      </div>
    </>
  );
}
