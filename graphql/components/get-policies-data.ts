import getGqlData from '@/lib/get-gql-data';
import { WPConnection, PolicyNode } from '../types';
import { policiesDataQuery } from '../queries/policies-data-query';

/**
 * Fetch all policies
 */
export const getPoliciesData = async (): Promise<PolicyNode[]> => {
  try {
    const data = await getGqlData<{ policies: WPConnection<PolicyNode> }>(
      policiesDataQuery,
    );

    if (!data?.policies?.edges) {
      console.warn('No policies found');
      return [];
    }

    return data.policies.edges.map((edge) => edge.node);
  } catch (error) {
    console.error('Error fetching policies data:', error);
    return [];
  }
};
