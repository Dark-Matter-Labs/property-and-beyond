import { client } from '@/sanity/lib/client';
import RiskCard from '@/components/risk';

const riskQuery = `
*[_type == 'risk']{
  ...,
  caseStudies[]->,
}
`

async function getData() {
  const res = await client.fetch(riskQuery, { next: { revalidate: 1 } });

  return res;
}

export default async function Map() {
  const data = await getData();
  return (
    <>
      <div className='flex flex-col-3 gap-6'>
        {data.map((risk, id) => (
          <RiskCard key={id} risk={risk} />
        ))}
      </div>
    </>
  );
}
