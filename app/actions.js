'use server';

import { revalidateTag } from 'next/cache';

export default async function action() {
  revalidateTag('risks');
  revalidateTag('riskDetail');
  revalidateTag('riskSlugs');
}
