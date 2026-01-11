import getGqlData from '@/lib/get-gql-data';
import { sitemapQuery } from '../queries/sitemap-query';
import { SitemapData, WPNode } from '../types';

export const getSitemapData = async () => {
   try {
      const response = await getGqlData<SitemapData>(sitemapQuery);
      return {
         pages: response?.pages?.edges || [],
         posts: response?.posts?.edges || [],
         projects: response?.projects?.edges || [],
         careers: response?.careers?.edges || [],
      };
   } catch (error) {
      console.error('Error fetching sitemap data:', error);
      return { pages: [], posts: [], projects: [], careers: [] };
   }
};

