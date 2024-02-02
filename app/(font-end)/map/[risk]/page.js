import RiskDetail from "@/components/risk-detail";
import { client } from "@/sanity/lib/client";


export const riskSlugs = `
*[_type == "risk" && defined(slug.current)][].slug.current
`;

const riskQuery = `
*[_type == "risk" && slug.current == $slug][0] {
 ...,
}
`;

export async function generateStaticParams() {
  const slugs = await client.fetch(riskSlugs);
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

async function getData(params) {
  const slug = params;
  const res = await client.fetch(riskQuery, { slug });
  return res;
}

export default async function RiskDetailPage({params}) {
    const risk = await getData(params.risk)
    return (
        <div>
            <RiskDetail risk={risk}/>
        </div>
    )
}