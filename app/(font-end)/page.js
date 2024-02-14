import Header from '@/components/header';
import SideMenu from '@/components/side-menu';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { HPcomponents } from '@/lib/portableText';
import Link from 'next/link';

const hpQuery = `
  *[_type == "homePage"][0] {
    ...,
  }
`;

async function getData() {
  const res = await client.fetch(hpQuery, { next: { tags: ['homePage'] } });
  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <Header />
      <div className='relative w-full h-auto'>
        {/* SECTION ONE - intro */}
        <div className='bg-black w-[calc(w-screen - 17px)]'>
          <div className='global-margin max-w-2xl bg-black text-white' name='section-1'>
            <div className='max-w-2xl py-20'>
              <PortableText value={data.intro} components={HPcomponents} />
            </div>
          </div>
        </div>
        {/* SECTION TWO - Politics of Change */}
        <div name='section-2'>
          <div className='bg-white w-[calc(w-screen - 17px)]'>
            <div className='global-margin max-w-2xl bg-white text-black'>
              <div className='max-w-2xl py-24'>
                <h2 className='mb-8'>Politics of Change</h2>
                <PortableText value={data.politicsOfChange} components={HPcomponents} />
              </div>
            </div>
          </div>

          <div className='w-[calc(w-screen - 17px)] bg-[url("/crisis.png")] bg-cover h-[800px]'>
            <Link href='/map'>
              <div className='w-full h-full bg-black/60 flex items-center justify-center group'>
                <button
                  href='/map'
                  className='bg-[#AD76F4] group-hover:bg-transparent border-2 border-[#AD76F4] w-80 rounded-[33px] items-center justify-center text-white group-hover:text-[#AD76F4]'
                >
                  <div className='py-4  text-[21px]'>View the map</div>
                </button>
              </div>
            </Link>
          </div>
        </div>
        {/* SECTION Three - Capabilites */}
        <div className='bg-black w-[calc(w-screen - 17px)]' name='section-3'>
          <div className='global-margin max-w-3xl bg-black text-white'>
            <h2 className='mb-8 pt-24'>Capabilities</h2>
            <div className='max-w-4xl pb-24'>
              <div className='grid grid-cols-3'>
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
                <div className='col-span-1 ml-12'>
                  <p className='small-text mb-4'>
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
          <div className='w-full h-8 bg-[#CEB2F2]'></div>
        </div>

        {/* SECTION 4 - Proofs of Possibility */}

        <div className='bg-white w-[calc(w-screen - 17px)]' name='section-4'>
          <div className='global-margin max-w-2xl bg-white text-black'>
            <div className='max-w-2xl pt-24 pb-12'>
              <h2 className='mb-8'>Proofs of Possibility</h2>
              <PortableText value={data.proofsOfPossibility} components={HPcomponents} />
            </div>
            <div className='grid grid-cols-2 gap-6 max-w-4xl pb-24'>
              <div className='border border-black h-[520px] w-96'>card 1</div>
              <div className='border border-black h-[520px] w-96'>card 2</div>
              <div className='border border-black h-[520px] w-96'>card 3</div>
            </div>
          </div>
        </div>

        <SideMenu />
      </div>
    </main>
  );
}
