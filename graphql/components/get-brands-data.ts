import getGqlData from '@/lib/get-gql-data';
import { WPConnection, BrandNode } from '../types';
import { allBrandsQuery } from '../queries/brands-data-query';

interface BrandsData {
  brands: WPConnection<BrandNode>;
}

/**
 * Fetch all brands
 */
export const getAllBrands = async (): Promise<BrandNode[]> => {
  try {
    const data = await getGqlData<BrandsData>(allBrandsQuery);

    if (!data?.brands?.edges?.length) {
      console.warn('No brands found');
      return [];
    }

    return data.brands.edges.map((edge) => edge.node);
  } catch (error) {
    console.error('Error fetching brands:', error);
    return [];
  }
};
