'use server';

import { getAllCaseStudies } from '@/graphql/components/get-case-study-data';

export async function fetchMoreCaseStudies(first: number, after: string) {
  return await getAllCaseStudies(first, after);
}
