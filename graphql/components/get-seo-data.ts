import getGqlData from '@/lib/get-gql-data';
import {
   seoCareerDataQuery,
   seoCaseStudyDataQuery,
   seoDataQuery,
   seoInsightDataQuery,
   seoPolicyDataQuery,
   seoProjectDataQuery,
   seoServiceDataQuery,
} from '../queries/seo-data-query';
import { PageData, WPNode } from '../types';

export const getSeoData = async (uri: string) => {
   try {
      const response = await getGqlData<PageData>(seoDataQuery, { uri });

      if (!response?.pageBy) {
         console.warn(`No SEO data found for URI: ${uri}`);
         return null;
      }

      const page = response.pageBy;

      return {
         id: page.id,
         seo: page.seo || {},
         featuredImage: page.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching SEO data:', error);
      return null;
   }
};

interface ProjectOrCareerData {
   projectBy?: WPNode;
   careerBy?: WPNode;
   postBy?: WPNode;
   serviceBy?: WPNode;
   policyBy?: WPNode;
   caseStudyBy?: WPNode;
}

export const getSeoProjectData = async (slug: string) => {
   try {
      const response = await getGqlData<ProjectOrCareerData>(seoProjectDataQuery, { slug });

      if (!response?.projectBy) {
         console.warn(`No project SEO data found for slug: ${slug}`);
         return null;
      }

      const project = response.projectBy;

      return {
         id: project.id,
         seo: project.seo || {},
         featuredImage: project.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching project SEO data:', error);
      return null;
   }
};

export const getSeoCareerData = async (slug: string) => {
   try {
      const response = await getGqlData<ProjectOrCareerData>(seoCareerDataQuery, { slug });

      if (!response?.careerBy) {
         console.warn(`No career SEO data found for slug: ${slug}`);
         return null;
      }

      const career = response.careerBy;

      return {
         id: career.id,
         seo: career.seo || {},
         featuredImage: career.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching career SEO data:', error);
      return null;
   }
};

export const getSeoInsightData = async (slug: string) => {
   try {
      const response = await getGqlData<ProjectOrCareerData>(seoInsightDataQuery, { slug });

      if (!response?.postBy) {
         console.warn(`No insight SEO data found for slug: ${slug}`);
         return null;
      }

      const post = response.postBy;

      return {
         id: post.id,
         seo: post.seo || {},
         featuredImage: post.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching insight SEO data:', error);
      return null;
   }
};

export const getSeoServiceData = async (slug: string) => {
   try {
      const response = await getGqlData<ProjectOrCareerData>(seoServiceDataQuery, { slug });

      if (!response?.serviceBy) {
         console.warn(`No service SEO data found for slug: ${slug}`);
         return null;
      }

      const service = response.serviceBy;

      return {
         id: service.id,
         seo: service.seo || {},
         featuredImage: service.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching service SEO data:', error);
      return null;
   }
};

export const getSeoPolicyData = async (slug: string) => {
   try {
      const response = await getGqlData<ProjectOrCareerData>(seoPolicyDataQuery, { slug });

      if (!response?.policyBy) {
         console.warn(`No policy SEO data found for slug: ${slug}`);
         return null;
      }

      const policy = response.policyBy;

      return {
         id: policy.id,
         seo: policy.seo || {},
         featuredImage: policy.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching policy SEO data:', error);
      return null;
   }
};

export const getSeoCaseStudyData = async (slug: string) => {
   try {
      const response = await getGqlData<ProjectOrCareerData>(seoCaseStudyDataQuery, { slug });

      if (!response?.caseStudyBy) {
         console.warn(`No case study SEO data found for slug: ${slug}`);
         return null;
      }

      const caseStudy = response.caseStudyBy;

      return {
         id: caseStudy.id,
         seo: caseStudy.seo || {},
         featuredImage: caseStudy.featuredImage?.node?.mediaItemUrl || null,
      };
   } catch (error) {
      console.error('Error fetching case study SEO data:', error);
      return null;
   }
};

