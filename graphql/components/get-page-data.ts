import getGqlData from '@/lib/get-gql-data';
import { pageDataQuery } from '../queries/page-data-query';
import { PageData } from '../types';

export const getPageData = async (uri: string) => {
   try {
      const pageData = await getGqlData<PageData>(pageDataQuery, { uri });

      if (!pageData?.pageBy) {
         console.warn(`No data found for URI: ${uri}`);
         return [];
      }

      return pageData.pageBy.blocks || [];
   } catch (error) {
      console.error('Error fetching page data:', error);
      return [];
   }
};

