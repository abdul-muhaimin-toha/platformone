import getGqlData from '@/lib/get-gql-data';
import { projectCategoriesQuery } from '../queries/project-category-query';
import { WPConnection } from '../types';

interface ProjectCategory {
   id: string;
   parentId: string;
   name: string;
   projectCategoryId: number;
}

interface ProjectCategoriesData {
   projectCategories: WPConnection<ProjectCategory>;
}

export const getProjectCategories = async () => {
   try {
      const data = await getGqlData<ProjectCategoriesData>(projectCategoriesQuery);

      if (!data?.projectCategories?.edges) {
         console.warn('No project categories found');
         return [];
      }

      return data.projectCategories.edges.map((edge) => edge.node);
   } catch (error) {
      console.error('Error fetching project categories:', error);
      return [];
   }
};

