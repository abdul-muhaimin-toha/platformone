import getGqlData from '@/lib/get-gql-data';
import { categoriesHierarchyQuery } from '../queries/category-data-query';

interface CategoryNode {
  id: string;
  name: string;
  slug: string;
  ancestors?: {
    edges: {
      node: {
        id: string;
        name: string;
        slug: string;
      };
    }[];
  };
}

interface CategoriesData {
  categories: {
    edges: {
      node: CategoryNode;
    }[];
  };
}

export const getCategoriesData = async () => {
  try {
    const data = await getGqlData<CategoriesData>(categoriesHierarchyQuery);
    return data?.categories?.edges?.map((edge) => edge.node) || [];
  } catch (error) {
    console.error('Error fetching categories data:', error);
    return [];
  }
};
