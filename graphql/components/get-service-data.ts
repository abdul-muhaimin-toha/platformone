import getGqlData from '@/lib/get-gql-data';
import { serviceDataQuery } from '../queries/service-data-query';
import { ServiceData, ServiceBlock } from '../types';
import { cache } from 'react';

/**
 * Enhanced fetcher that includes SEO and blocks.
 * Wrapped in React cache for deduping.
 */
export const getFullServiceData = cache(async (slug: string) => {
  if (!slug) return null;

  try {
    const serviceData = await getGqlData<ServiceData>(serviceDataQuery, { slug });

    if (!serviceData?.serviceBy) {
      console.warn(`No service found for slug: ${slug}`);
      return null;
    }

    return serviceData.serviceBy;
  } catch (error) {
    console.error('Error fetching full service data:', error);
    return null;
  }
});

/**
 * Fetch service blocks by slug
 */
export const getServiceData = async (
  slug: string
): Promise<ServiceBlock[] | null> => {
  const service = await getFullServiceData(slug);
  if (!service) return null;

  const blocks = service.blocks || [];

  return blocks.map((block) => ({
    ...block,
    attributesJSON:
      typeof block.attributesJSON === 'string' && block.attributesJSON
        ? JSON.parse(block.attributesJSON)
        : block.attributesJSON || {},
  }));
};
