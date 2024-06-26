import RiskDetailNonModal from '@/components/risk-detail-non-modal';
import { client } from '@/sanity/lib/client';

export const riskSlugs = `
*[_type == "risk" && defined(slug.current)][].slug.current
`;

const riskQuery = `
*[_type == "risk" && slug.current == $slug][0] {
  ...,
  caseStudies[]->{
    ...,
    "image": image.asset->.url
  },
  propertyIssues[]{...,
    genericPropertyIssue->{
      ...,
      "image": image.asset->.url
    }
  },
}
`;

export async function generateStaticParams() {
  const slugs = await client.fetch(riskSlugs, { next: { tags: ['risk'] } });
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

async function getData(params) {
  const slug = params;
  const res = await client.fetch(
    riskQuery,
    { slug },
    { next: { revalidate: 30, tags: ['risk', 'caseStudy', 'propertyIssue'] } },
  );
  return res;
}

export default async function RiskDetailPage({ params }) {
  const risk = await getData(params.risk);

  return (
    <div className=''>
      <RiskDetailNonModal risk={risk} />
    </div>
  );
}
