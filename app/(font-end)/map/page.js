import { client } from '@/sanity/lib/client';
import RiskCard from '@/components/risk-card';
import Container from '@/components/container';

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
   <div className='bg-black w-[calc(w-screen - 17px)]' name='section-3'>
          <div className='global-margin max-w-3xl  bg-black text-white'>
            <h2 className='mb-8 pt-24'>INTRO TO MAP</h2>
            <div className='pb-24'>
              <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2'>
                  <p className='intro mb-8'>
                    We are developing the interconnected building blocks for the futures of property
                    and ownership, seeding new ideas by:
                  </p>
                  <ol className='list-decimal	list-inside normal'>
                    <li className='my-2'>
                      Demonstrating a diverse portfolio of alternative property configurations like
                      self-ownership, collective ownership, and partial common ownership
                    </li>
                    <li className='my-2'>
                      Designing enabling infrastructures that allow for alternative property
                      mechanisms to be financed and adopted at scale
                    </li>
                    <li className='my-2'>
                      Building new conversations capabilities on crisis-responsive transformations
                    </li>
                  </ol>
                </div>
                <div className='col-span-1 lg:ml-6 xl:ml-12'>
                  <p className='small-text mb-4 mt-4 lg:mt-0'>
                    Beyond objectification: from dominion and control towards stewardship of land,
                    resources, information, and labor
                  </p>
                  <p className='small-text mb-4'>
                    Beyond extraction: from commoning externalities towards outcome-based governance
                    and long-term guardianship 
                  </p>
                  <p className='small-text'>
                    Beyond centralization: from rigid bureaucracy and concentration of benefits
                    towards distributed governance, value creation, permissioning and verification
                    frameworks 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


      <div className='flex flex-col items-center justify-center overflow-hidden h-[calc(100vh-120px)] relative'>
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
