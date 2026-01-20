import getGqlData from '@/lib/get-gql-data';
import {
  allInsightsQuery,
  multiInsightQuery,
  relatedInsightsQuery,
  singleInsightQuery,
} from '../queries/insights-data-query';
import { WPConnection, WPNode } from '../types';

interface InsightsData {
  posts: WPConnection<WPNode> & { nodes?: WPNode[] };
  postBy?: WPNode;
}

/**
 * Fetch all insights with optional limit
 */
export const getAllInsights = async (
  limit: number = 10
): Promise<WPConnection<WPNode>['edges']> => {
  try {
    const data = await getGqlData<InsightsData>(allInsightsQuery, { limit });
    return data?.posts?.edges || [];
  } catch (error) {
    console.error('Error fetching all insights:', error);
    return [];
  }
};

/**
 * Fetch single insight by slug
 */
export const getInsightBySlug = async (slug: string): Promise<WPNode | null> => {
  if (!slug) {
    console.warn('No slug provided for insight fetch');
    return null;
  }

  try {
    const data = await getGqlData<InsightsData>(singleInsightQuery, { slug });

    if (!data?.postBy) {
      console.warn(`Insight not found for slug: ${slug}`);
      return null;
    }

    return data.postBy;
  } catch (error) {
    console.error(`Error fetching insight by slug ${slug}:`, error);
    return null;
  }
};

/**
 * Fetch related insights by category
 */
export const getRelatedInsights = async (
  categoryId: number,
  limit: number = 10,
  excludePostId: string | number | null = null
): Promise<WPConnection<WPNode>['edges']> => {
  if (!categoryId) return [];

  // Convert single post ID to array if provided
  const excludeArray = excludePostId ? [excludePostId] : [];

  try {
    const data = await getGqlData<InsightsData>(relatedInsightsQuery, {
      categoryId,
      limit,
      exclude: excludeArray,
    });

    return data?.posts?.edges || [];
  } catch (error) {
    console.error('Error fetching related insights:', error);
    return [];
  }
};

/**
 * Fetch multiple insights by IDs
 */
export const getInsightsData = async (
  ids: (string | number)[]
): Promise<WPNode[]> => {
  if (!Array.isArray(ids) || ids.length === 0) {
    return [];
  }

  try {
    const data = await getGqlData<InsightsData>(multiInsightQuery, { ids });

    if (!data?.posts?.nodes?.length) {
      console.warn(`No insights found for IDs: ${ids.join(', ')}`);
      return [];
    }

    return data.posts.nodes;
  } catch (error) {
    console.error('Error fetching insights by IDs:', error);
    return [];
  }
};
