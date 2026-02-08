import getGqlData from '@/lib/get-gql-data';
import { WPConnection, PolicyNode } from '../types';
import { policiesDataQuery, singlePolicyQuery } from '../queries/policies-data-query';
import { cache } from 'react';

interface PolicyData {
  policyBy?: PolicyNode;
  policies?: WPConnection<PolicyNode>;
}

/**
 * Fetch all policies
 */
export const getPoliciesData = async (): Promise<PolicyNode[]> => {
  try {
    const data = await getGqlData<PolicyData>(
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

/**
 * Enhanced fetcher that includes SEO and content.
 * Wrapped in React cache for deduping.
 */
export const getCachedPolicyBySlug = cache(async (slug: string): Promise<PolicyNode | null> => {
  if (!slug) return null;

  try {
    const data = await getGqlData<PolicyData>(singlePolicyQuery, { slug });

    if (!data?.policyBy) {
      console.warn(`Policy not found for slug: ${slug}`);
      return null;
    }

    return data.policyBy;
  } catch (error) {
    console.error(`Error fetching cached policy by slug ${slug}:`, error);
    return null;
  }
});

/**
 * Fetch single policy by slug
 */
export const getPolicyBySlug = async (slug: string): Promise<PolicyNode | null> => {
  return getCachedPolicyBySlug(slug);
};
