import getGqlData from '@/lib/get-gql-data';
import { pageDataQuery } from '../queries/page-data-query';
import { PageData } from '../types';
import { cache } from 'react';

/**
 * Enhanced fetcher that includes SEO and blocks.
 * Wrapped in React cache to deduplicate calls between generateMetadata and Page component.
 */
export const getFullPageData = cache(async (uri: string) => {
   try {
      const pageData = await getGqlData<PageData>(pageDataQuery, { uri });

      if (!pageData?.pageBy) {
         console.warn(`No data found for URI: ${uri}`);
         return null;
      }

      return pageData.pageBy;
   } catch (error) {
      console.error('Error fetching full page data:', error);
      return null;
   }
});

export const getPageData = async (uri: string) => {
   const pageData = await getFullPageData(uri);
   return pageData?.blocks || [];
};

