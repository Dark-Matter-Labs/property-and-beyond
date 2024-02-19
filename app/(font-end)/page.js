import Header from '@/components/header';
import SideMenu from '@/components/side-menu';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { HPcomponents } from '@/lib/portableText';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/card';

const hpQuery = `
  *[_type == "homePage"][0] {
    ...,
    "cards": proofOfPossibilityCards[] {
      ...,
      "image": image.asset->.url,
      "file": file.asset->url,
    }
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
        <div className='bg-black w-[calc(w-screen-17px)]'>
          <div className='global-margin max-w-2xl bg-black text-white' name='section-1'>
            <div className='max-w-lg md:max-w-md lg:max-w-2xl py-20'>
              <PortableText value={data.intro} components={HPcomponents} />
            </div>
          </div>
        </div>
        {/* SECTION TWO - Politics of Change */}
        <div name='section-2'>
          <div className='bg-white w-[calc(w-screen-17px)]'>
            <div className='global-margin max-w-2xl bg-white text-black'>
              <div className='max-w-lg md:max-w-md lg:max-w-2xl py-24'>
                <h2 className='mb-8'>Crisis-Responsive Transformation</h2>
                <PortableText value={data.politicsOfChange} components={HPcomponents} />
              </div>
            </div>
          </div>

          <div className='hidden md:block w-[calc(w-screen-17px)] bg-[url("/crisis.png")] bg-cover h-[800px]'>
            <Link href='/map'>
              <div className='w-full h-full bg-black/40 md:bg-black/80 flex items-center justify-center group'>
                <button
                  href='/map'
                  className='md:mr-12 bg-[#AD76F4] border-2 border-[#AD76F4] w-80 md:w-56 lg:w-80 rounded-[33px] items-center justify-center text-white block '
                >
                  <div className='py-4 text-[21px]'>View the map</div>
                </button>
              </div>
            </Link>
          </div>
        </div>
        {/* SECTION Three - Capabilites */}
        <div className='bg-black w-[calc(w-screen-17px)]' name='section-3'>
          <div className='global-margin max-w-4xl  bg-black text-white'>
            <h2 className='mb-8 pt-24'>Capabilities</h2>
            <div className='max-w-lg md:max-w-md lg:max-w-[690px] xl:max-w-[740px] pb-24'>
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
          <div className='w-full h-8 bg-[#CEB2F2]'></div>
        </div>

        {/* SECTION 4 - Proofs of Possibility */}

        <div className='bg-white w-[calc(w-screen-17px)]' name='section-4'>
          <div className='global-margin max-w-2xl bg-white text-black'>
            <div className='max-w-lg md:max-w-md lg:max-w-2xl pt-24 pb-12'>
              <h2 className='mb-8'>Proofs of Possibility</h2>
              <PortableText value={data.proofsOfPossibility} components={HPcomponents} />
            </div>
            <div className='flex flex-wrap gap-6 max-w-lg md:max-w-md lg:max-w-2xl pb-24 justify-center md:justify-start items-center'>
              {data?.cards?.map((card, id) => (
                <Card key={id} data={card} />
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 5 - Join us */}
        <div
          className='w-[calc(w-screen-17px)] bg-[url("/join-us.png")] bg-cover h-[535px]'
          name='section-5'
        >
          <div className='global-margin max-w-2xl text-white bg-transparent'>
            <div className='max-w-lg md:max-w-md lg:max-w-2xl py-24'>
              <h2 className='mb-8'>Join Us</h2>
              <p className='intro mb-20'>
                Join us in envisioning and co-designing futures of property, ownership and beyond. 
              </p>
              <button
                href='/map'
                className='hover:bg-[#AD76F4] text-[#AD76F4] border-2 border-[#AD76F4] w-80 rounded-[33px] items-center justify-center hover:text-white'
              >
                <div className='py-1 text-[21px] font-semibold'>Contact us</div>
              </button>
            </div>
          </div>
        </div>
        {/* SECTION 6 - Conference */}
        <div className='bg-black w-[calc(w-screen-17px)]'>
          <div className='global-margin max-w-2xl bg-black text-white' name='section-6'>
            <div className='max-w-lg md:max-w-md lg:max-w-2xl py-20'>
              <div className='uppercase text-[36px]'>conference:</div>
              <h2 className=''>What and how we own</h2>
              <div className='mb-8 text-[30px] text-[#AD76F4]'>
                <span className='font-bold'>March 1, 2024</span> in Oakland, CA
              </div>
              <PortableText value={data.conference} components={HPcomponents} />
            </div>
          </div>
          <div className='w-full h-8 bg-[#CEB2F2]'></div>
        </div>
        {/* SECTION 7 - Partners */}
        <div className='bg-white w-[calc(w-screen-17px)]' name='section-7'>
          <div className='global-margin max-w-2xl bg-white text-black'>
            <div className='max-w-lg md:max-w-md lg:max-w-2xl py-24'>
              <h2 className='mb-8'>Our team</h2>
              <p className='intro mb-20'>
                Many people have worked on this project. Thanks to our partners and collaborators:{' '}
              </p>
              <div className='flex flex-wrap gap-6 mb-20'>
                <div>
                  <Image
                    src='/DMLogo-black.png'
                    alt='Dark Matter Labs Logo'
                    height={157}
                    width={157}
                  />
                </div>
                <div>
                  {' '}
                  <Image
                    src='/DMLogo-black.png'
                    alt='Dark Matter Labs Logo'
                    height={157}
                    width={157}
                  />
                </div>
                <div>
                  {' '}
                  <Image
                    src='/DMLogo-black.png'
                    alt='Dark Matter Labs Logo'
                    height={157}
                    width={157}
                  />
                </div>
                <div>
                  {' '}
                  <Image
                    src='/DMLogo-black.png'
                    alt='Dark Matter Labs Logo'
                    height={157}
                    width={157}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* END DECO */}

        <div className="bg-[url('/footer-deco.png')] bg-contain lg:bg-auto lg:bg-left lg:bg-no-repeat	bg-black h-[200px] md:h-[325px] w-full "></div>

        <SideMenu />
      </div>
    </main>
  );
}
