import getGqlData from '@/lib/get-gql-data';
import {
   multiProjectQuery,
   projectBySlugQuery,
   projectsWithLimitQuery,
   projectsWithPaginationQuery,
} from '../queries/project-data-query';
import { WPConnection, WPNode } from '../types';

interface ProjectsData {
   projects: WPConnection<WPNode>;
   projectBy?: WPNode;
}

export const getProjectData = async (ids: string[] | number[]) => {
   if (!Array.isArray(ids) || ids.length === 0) {
      console.warn('No IDs provided for project fetch');
      return [];
   }

   try {
      const projectData = await getGqlData<ProjectsData>(multiProjectQuery, { ids });

      if (!projectData?.projects?.nodes?.length) {
         console.warn(`No projects found for IDs: ${ids.join(', ')}`);
         return [];
      }

      return projectData.projects.nodes;
   } catch (error) {
      console.error('Error fetching project data:', error);
      return [];
   }
};

export const getProjectBySlug = async (slug: string) => {
   if (!slug) {
      console.warn('No slug provided for project fetch');
      return null;
   }

   try {
      const projectData = await getGqlData<ProjectsData>(projectBySlugQuery, { slug });

      if (!projectData?.projectBy) {
         console.warn(`No project found for slug: ${slug}`);
         return null;
      }

      return projectData.projectBy;
   } catch (error) {
      console.error('Error fetching project by slug:', error);
      return null;
   }
};

export const getProjectsWithLimit = async (limit: number = 5) => {
   try {
      const projectData = await getGqlData<ProjectsData>(projectsWithLimitQuery, { limit });

      if (!projectData?.projects?.nodes?.length) {
         console.warn(`No projects found with limit: ${limit}`);
         return [];
      }

      return projectData.projects.nodes;
   } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
   }
};

interface PaginationParams {
   limit?: number;
   after?: string | null;
   location?: string | null;
   search?: string | null;
}

export const getProjectsWithPagination = async ({
   limit = 5,
   after = null,
   location = null,
   search = null,
}: PaginationParams = {}) => {
   try {
      const variables = {
         limit,
         after,
         location,
         search,
      };

      const data = await getGqlData<ProjectsData>(projectsWithPaginationQuery, variables);

      if (!data?.projects?.nodes?.length) {
         console.warn('No projects found with variables:', variables);
         return { projects: [], pageInfo: null };
      }

      return {
         projects: data.projects.nodes, // nodes is already array
         pageInfo: data.projects.pageInfo, // Access pageInfo from projects connection
      };
   } catch (error) {
      console.error('Error fetching projects with pagination:', error);
      return { projects: [], pageInfo: null };
   }
};

