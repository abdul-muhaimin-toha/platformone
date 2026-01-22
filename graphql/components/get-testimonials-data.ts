import getGqlData from '@/lib/get-gql-data';
import { WPConnection, TestimonialNode } from '../types';
import { testimonialsByIdQuery } from '../queries/testimonials-data-query';

interface TestimonialData {
  testimonials: WPConnection<TestimonialNode>;
}

/**
 * Fetch multiple testimonials by IDs
 */
export const getTestimonialsByIds = async (
  ids: (string | number)[],
): Promise<TestimonialNode[]> => {
  if (!Array.isArray(ids) || ids.length === 0) {
    return [];
  }

  const stringIds = ids.map((id) => id.toString());

  try {
    const data = await getGqlData<TestimonialData>(testimonialsByIdQuery, { ids: stringIds });

    if (!data?.testimonials?.nodes?.length) {
      console.warn(`No testimonials found for IDs: ${ids.join(', ')}`);
      return [];
    }

    return data.testimonials.nodes;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};

