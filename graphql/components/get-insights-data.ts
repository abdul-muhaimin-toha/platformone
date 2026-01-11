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

export const getInsightsData = async (ids: string[] | number[]) => {
   if (!Array.isArray(ids) || ids.length === 0) {
      console.warn('No IDs provided for Insights fetch');
      return [];
   }

   try {
      const insightsData = await getGqlData<InsightsData>(multiInsightQuery, { ids });

      if (!insightsData?.posts?.nodes?.length) {
         console.warn(`No Insight found for IDs: ${ids.join(', ')}`);
         return [];
      }

      return insightsData.posts.nodes;
   } catch (error) {
      console.error('Error fetching insight data:', error);
      return [];
   }
};

export const getAllInsights = async (limit: number = 10) => {
   try {
      const data = await getGqlData<InsightsData>(allInsightsQuery, { limit });
      return data?.posts?.edges || [];
   } catch (error) {
      console.error('Error fetching insights:', error);
      return [];
   }
};

export const getInsightBySlug = async (slug: string) => {
   try {
      if (!slug) {
         console.warn('No slug provided');
         return null;
      }

      const data = await getGqlData<InsightsData>(singleInsightQuery, { slug });

      if (!data?.postBy) {
         console.warn(`Insight not found for slug: ${slug}`);
         return null;
      }

      return data.postBy;
   } catch (error) {
      console.error('Error fetching career by slug:', error);
      return null;
   }
};

export const getRelatedInsights = async (
   categoryId: number,
   limit: number = 10,
   excludePostId: string | number | null = null
) => {
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

