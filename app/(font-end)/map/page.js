

import { client } from "@/sanity/lib/client";

async function getData() {
    const res = await client.fetch(`*[_type == 'risk']`);
  
    return res;
  }
  

export default async function Map() {
    const data = await getData()
    return (
        <div className="">
            {data.map((risk, id) => (
                <div key={id}>
                    {risk.title}
                </div>
            ))}
        </div>
    )
}