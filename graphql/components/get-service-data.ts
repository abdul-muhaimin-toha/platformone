import getGqlData from '@/lib/get-gql-data';
import { serviceDataQuery } from '../queries/service-data-query';
import { ServiceData, ServiceBlock } from '../types';

/**
 * Fetch service blocks by slug
 */
export const getServiceData = async (
  slug: string
): Promise<ServiceBlock[] | null> => {
  if (!slug) return null;

  try {
    const serviceData = await getGqlData<ServiceData>(serviceDataQuery, {
      slug,
    });

    if (!serviceData?.serviceBy) {
      console.warn(`No service found for slug: ${slug}`);
      return null;
    }

    const blocks = serviceData.serviceBy.blocks || [];

    // Parse attributesJSON if it's a string (though RenderBlocksHelper also handles this)
    return blocks.map((block) => ({
      ...block,
      attributesJSON:
        typeof block.attributesJSON === 'string' && block.attributesJSON
          ? JSON.parse(block.attributesJSON)
          : block.attributesJSON || {},
    }));
  } catch (error) {
    console.error('Error fetching service data:', error);
    return null;
  }
};
