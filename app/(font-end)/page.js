import Header from '@/components/header';
import SideMenu from '@/components/side-menu';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';
import { HPcomponents } from '@/lib/portableText';
import Link from 'next/link';
import Image from 'next/image';
import Card from '@/components/card';
import scottishLogo from '@/public/logos/scottish.jpeg';
import stanfordLogo from '@/public/logos/stan.png';
import radicalXLogo from '@/public/logos/radical.svg';
import friendship from '@/public/logos/friendship.png';
import rfLogo from '@/public/logos/RF_logo.png';
import omiLogo from '@/public/logos/Omidyar_Network_logo.png';

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
  const res = await client.fetch(hpQuery, { next: { revalidate: 30 } });
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
              <div className='max-w-lg md:max-w-md lg:max-w-2xl py-20'>
                <h2 className='mb-8 break-words w-full'>Crisis-Responsive Transformation</h2>
                <PortableText value={data.politicsOfChange} components={HPcomponents} />
              </div>
            </div>
          </div>

          <div className='hidden md:block w-[calc(w-screen-17px)] bg-[url("/crisis.png")] bg-cover h-[800px]'>
            <Link href='/tool'>
              <div className='w-full h-full bg-black/40 md:bg-black/80 flex items-center justify-center group'>
                <button
                  href='/tool'
                  className='md:mr-12 bg-[#AD76F4] border-2 border-[#AD76F4] hover:bg-transparent hover:text-[#AD76F4] w-80 md:w-56 lg:w-80 rounded-[33px] items-center justify-center text-white block transition-all duration-150'
                >
                  <div className='py-1 font-semibold text-[21px]'>View the tool</div>
                </button>
              </div>
            </Link>
          </div>

          <div>
            <div className='block md:hidden w-[calc(w-screen-17px)] bg-[url("/crisis.png")] bg-cover h-[800px]'>
              <div className='w-full h-full bg-black/40 md:bg-black/80 flex items-center justify-center group'>
                <button className='md:mr-12 cursor-auto bg-[#AD76F4] border-2 border-[#AD76F4] w-80 md:w-56 lg:w-80 rounded-[9px] items-center justify-center text-white block '>
                  <div className='py-4 text-[21px]'>
                    The current version of the tool is only available on desktop view
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION Three - Capabilites */}
        <div className='bg-black w-[calc(w-screen-17px)]' name='section-3'>
          <div className='global-margin max-w-4xl  bg-black text-white'>
            <div className='max-w-lg md:max-w-md lg:max-w-[790px] xl:max-w-[850px] pb-20'>
              <h2 className='mb-8 pt-20 w-full break-words max-w-[500px]'>
                Building Critical Capabilities
              </h2>
              <div className='grid grid-cols-1 lg:grid-cols-3'>
                <div className='col-span-2'>
                  <p className='intro mb-4'>
                    We are developing interconnected building blocks for futures of property and
                    ownership seeding new ideas by:
                  </p>
                  <ol className='list-decimal	list-inside normal'>
                    <li className='my-2'>
                      Demonstrating a diverse portfolio of alternative property configurations like
                      self-ownership and collective ownership
                    </li>
                    <li className='my-2'>
                      Designing enabling infrastructures that allow for alternative property
                      mechanisms to be financed and adopted at scale
                    </li>
                    <li className='my-2'>
                      Building new conversations and capabilities on crisis-responsive
                      transformations
                    </li>
                  </ol>
                </div>
                <div className='col-span-1 lg:ml-6'>
                  <p className='normal mb-4'>
                    Pathways are opening up for different iterations of property, moving …
                  </p>
                  <p className='small-text mb-4 mt-4 lg:mt-0'>
                    <span className='font-bold'>Beyond objectification: </span> from dominion and
                    control towards relationality and stewardship of land, resources, information,
                    and labor
                  </p>
                  <p className='small-text mb-4'>
                    <span className='font-bold'>Beyond extraction: </span>
                    from commoning externalities towards outcome-based governance and long-term
                    guardianship
                  </p>
                  <p className='small-text'>
                    <span className='font-bold'>Beyond centralization: </span>
                    from rigid bureaucracy and concentration of benefits towards distributed
                    governance, value creation, permissioning and verification frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-4 bg-[#CEB2F2]'></div>
        </div>

        {/* SECTION 4 - Proofs of Possibility */}

        <div className='bg-white w-[calc(w-screen-17px)]' name='section-4'>
          <div className='global-margin max-w-2xl bg-white text-black'>
            <div className='max-w-lg md:max-w-md lg:max-w-2xl pt-20 pb-12'>
              <h2 className='mb-8'>Proofs of Possibility</h2>
              <PortableText value={data.proofsOfPossibility} components={HPcomponents} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:max-w-2xl lg:max-w-4xl pb-20 justify-center md:justify-start items-center'>
              {data?.cards?.map((card, id) => (
                <Card key={id} data={card} />
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 5 - Insights */}
        <div className='bg-black w-[calc(w-screen-17px)]'>
          <div className='global-margin bg-black text-white' name='section-6'>
            <div className='max-w-lg md:max-w-md lg:max-w-4xl py-20'>
              <h2 className='pb-4'>INSIGHTS</h2>
              {/* <PortableText value={data.conference} components={HPcomponents} /> */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <div className='px-4 py-4 border border-white'>
                  <h3 className='intro text-[#ad77f4]'>
                    Conference What & How We Own: The Politics of Change
                  </h3>
                  <p className='small-text pt-4'>
                    What financing mechanisms can support alternative and experimental property
                    systems? How can we expand and improve community land trusts? And how might we
                    concretely integrate Indigenous thinking, rights of nature, and self-ownership
                    into our property institutions? We explored these and other questions at the
                    conference “What and How We Own: The Politics Of Change” co-hosted by Dark
                    Matter Labs, RadicalxChange Foundation, and a Stanford University research team,
                    with generous support from Rockefeller Foundation and Omidyar Network (Oakland,
                    CA, March 1-3, 2024). The conference was the first step in seeding a coalition
                    of loosely-aligned actors building a new paradigm for property and ownership in
                    the 21st century. Through the event, we crystallized a set of projects and
                    initiatives focused on reimagined property relations that the coalition will
                    support and pursue together. Check out the <a href="https://vimeo.com/925039435" target='_blank' rel='noreferrer' className='underline font-bold'>highlights</a> and <a href="https://www.notion.so/what-and-how-we-own/What-How-We-Own-The-Politics-of-Change-0755201b081549bfa8ff8426c1fdeb0f" target='_blank' rel='noreferrer' className='underline font-bold'>emerging initiatives</a>
                    from the conference.
                  </p>
                </div>
                <div>
                  <div className='px-4 py-4 border border-white mb-4'>
                    <h3 className='intro text-[#ad77f4]'>
                      A deep exploration of how urban land ownership provides opportunities and
                      barriers to <a href="https://provocations.darkmatterlabs.org/urban-land-ownership-mapping-towards-a-just-transition-of-europes-built-environment-1-72ff315fefff" target='_blank' rel='noreferrer' className='underline font-bold'>just transition in the built environment</a>.
                    </h3>
                  </div>
                  <div className='px-4 py-4 border border-white mb-4'>
                    <h3 className='intro text-[#ad77f4]'>
                    <a href="https://bloombergcities.jhu.edu/news/city-putting-its-people-charge-public-space#:~:text=They%27re%20doing%20so%20by,billboards%E2%80%94in%20the%20people%27s%20hands" target='_blank' rel='noreferrer' className='underline font-bold'>Emerging insights on how Re:Permissioning the City platform</a> designed for
                      citizen-led governance of public space opens up pathways for new civic
                      economies and responses to emerging challenges like unhoused populations and
                      refugee communities.
                    </h3>
                  </div>
                  <div className='px-4 py-4 border border-white'>
                    <h3 className='intro text-[#ad77f4]'>
                    <a href="https://provocations.darkmatterlabs.org/diving-deep-into-the-deep-code-unraveling-the-knotted-problem-spaces-of-housing-data-87e595e8919b" target='_blank' rel='noreferrer' className='underline font-bold'>Diving Deep into the Deep Code: Unraveling the Knotted Problem Spaces of
                      Housing & Data</a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full h-4 bg-[#CEB2F2]'></div>
        </div>

        {/* SECTION 6 - Join us */}
        <div
          className='w-[calc(w-screen-17px)] bg-[url("/join-us.jpg")] bg-cover h-[535px]'
          name='section-5'
        >
          <div className='global-margin max-w-2xl text-white bg-transparent'>
            <div className='max-w-lg md:max-w-md lg:max-w-2xl py-20'>
              <h2 className='mb-8'>Join Us</h2>
              <p className='intro mb-20'>
                Join us in envisioning and co-designing futures of property, ownership and beyond. 
              </p>
              <button
                href='/tool'
                className='bg-[#AD76F4] hover:bg-transparent hover:text-[#AD76F4] border-2 border-[#AD76F4] w-80 rounded-[33px] items-center justify-center text-white transition-all duration-150'
              >
                <div className='py-1 text-[21px] font-semibold'>
                  <Link href='mailto:property@darkmatterlabs.org' target='_blank'>
                    Contact us
                  </Link>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 7 - Partners */}
        <div className='bg-white w-[calc(w-screen-17px)]' name='section-7'>
          <div className='global-margin max-w-2xl bg-white text-black'>
            <div className='max-w-lg md:max-w-md lg:max-w-2xl py-20'>
              <h2 className='mb-8'>Partners</h2>
              <p className='intro mb-20'>
                We are working closely with partners and collaborators:{' '}
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6'>
                <div className='flex items-center justify-center'>
                  <Image
                    src='/DMLogo-black.png'
                    alt='Dark Matter Labs Logo'
                    height={100}
                    width={100}
                  />
                </div>
                <div className='flex items-center justify-center'>
                  {' '}
                  <Image src={radicalXLogo} alt='Radicle X Change Logo' height={157} width={250} />
                </div>
                <div className='flex items-center justify-center'>
                  {' '}
                  <Image
                    src={friendship}
                    alt='Wijewinen Friendship Center Logo'
                    height={180}
                    width={300}
                  />
                </div>

                <div className='flex items-center justify-center'>
                  {' '}
                  <Image
                    src={scottishLogo}
                    alt='Scottish Land Commission Logo'
                    height={157}
                    width={250}
                  />
                </div>
                <div className='flex items-center justify-center'>
                  {' '}
                  <Image
                    src={stanfordLogo}
                    alt='Stanford University Logo'
                    height={157}
                    width={250}
                  />
                </div>
                <div className='flex items-center justify-center'>
                  {' '}
                  <Image src={rfLogo} alt='Rockefeller Foundation Logo' />
                </div>
                <div className='flex items-center justify-center'>
                  {' '}
                  <Image src={omiLogo} alt='Omidyar Network Logo' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* END DECO */}

        <SideMenu />
      </div>
    </main>
  );
}
