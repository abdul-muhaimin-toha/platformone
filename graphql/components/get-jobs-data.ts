import getGqlData from '@/lib/get-gql-data';
import {
   paginatedCareersQuery,
   singleCareerQuery,
} from '../queries/jobs-data-query';
import { WPConnection, WPNode } from '../types';

interface CareersData {
   careers: WPConnection<WPNode>;
   careerBy?: WPNode;
}

export const getPaginatedCareersData = async () => {
   try {
      const data = await getGqlData<CareersData>(paginatedCareersQuery);

      if (!data?.careers?.edges?.length) {
         console.warn('No careers found');
         return { careers: [] };
      }

      const careers = data.careers.edges.map(({ node }) => node);

      return { careers };
   } catch (error) {
      console.error('Error fetching careers data:', error);
      return { careers: [] };
   }
};

export const getCareerBySlug = async (slug: string) => {
   try {
      if (!slug) {
         console.warn('No slug provided');
         return null;
      }

      const data = await getGqlData<CareersData>(singleCareerQuery, { slug });

      if (!data?.careerBy) {
         console.warn(`Career not found for slug: ${slug}`);
         return null;
      }

      return data.careerBy;
   } catch (error) {
      console.error('Error fetching career by slug:', error);
      return null;
   }
};

