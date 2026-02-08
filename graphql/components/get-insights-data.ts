import getGqlData from '@/lib/get-gql-data';
import {
  allInsightsQuery,
  filteredInsightsQuery,
  multiInsightQuery,
  relatedInsightsQuery,
  singleInsightQuery,
  authorByQuery,
} from '../queries/insights-data-query';
import { WPConnection, WPNode } from '../types';
import { cache } from 'react';

interface InsightsData {
  posts: WPConnection<WPNode> & {
    nodes?: WPNode[];
  };
  postBy?: WPNode;
}

/**
 * Fetch all insights with optional limit and search
 */
export const getAllInsights = async (
  limit: number = 20,
  search?: string
): Promise<{ edges: any[], hasNextPage: boolean }> => {
  try {
    const data = await getGqlData<InsightsData>(allInsightsQuery, { limit, search });
    return {
      edges: data?.posts?.edges || [],
      hasNextPage: data?.posts?.pageInfo?.hasNextPage || false
    };
  } catch (error) {
    console.error('Error fetching all insights:', error);
    return { edges: [], hasNextPage: false };
  }
};

/**
 * Fetch insights filtered by category slug and search
 */
export const getFilteredInsights = async (
  categoryName?: string,
  limit: number = 20,
  search?: string
): Promise<{ edges: any[], hasNextPage: boolean }> => {
  try {
    const data = await getGqlData<InsightsData>(filteredInsightsQuery, {
      categoryName,
      limit,
      search,
    });
    return {
      edges: data?.posts?.edges || [],
      hasNextPage: data?.posts?.pageInfo?.hasNextPage || false
    };
  } catch (error) {
    console.error(`Error fetching filtered insights for ${categoryName}:`, error);
    return { edges: [], hasNextPage: false };
  }
};

/**
 * Enhanced fetcher that includes SEO and content.
 * Wrapped in React cache for deduping.
 */
export const getCachedInsightBySlug = cache(async (slug: string): Promise<WPNode | null> => {
  if (!slug) return null;

  try {
    const data = await getGqlData<InsightsData>(singleInsightQuery, { slug });
    return data?.postBy || null;
  } catch (error) {
    console.error(`Error fetching cached insight by slug ${slug}:`, error);
    return null;
  }
});

/**
 * Fetch single insight by slug
 */
export const getInsightBySlug = async (slug: string): Promise<WPNode | null> => {
  return getCachedInsightBySlug(slug);
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
/**
 * Fetch a single author by database ID
 * Wrapped in React cache for deduping.
 */
export const getAuthorById = cache(async (id: number): Promise<any | null> => {
  if (!id) return null;

  try {
    const response = await getGqlData<{ authorBy: any }>(authorByQuery, { authorId: id });
    return response?.authorBy || null;
  } catch (error) {
    console.error(`Error fetching author by ID ${id}:`, error);
    return null;
  }
});
