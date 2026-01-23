import getGqlData from '@/lib/get-gql-data';
import { WPConnection, FAQNode } from '../types';
import { faqsByIdQuery } from '../queries/faq-data-query';

interface FAQData {
  faqs: WPConnection<FAQNode>;
}

/**
 * Fetch multiple FAQs by IDs
 */
export const getFaqsByIds = async (
  ids: (string | number)[],
): Promise<FAQNode[]> => {
  if (!Array.isArray(ids) || ids.length === 0) {
    return [];
  }

  const stringIds = ids.map((id) => id.toString());

  try {
    const data = await getGqlData<FAQData>(faqsByIdQuery, { ids: stringIds });

    if (!data?.faqs?.nodes?.length) {
      console.warn(`No FAQs found for IDs: ${ids.join(', ')}`);
      return [];
    }

    return data.faqs.nodes;
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
};
