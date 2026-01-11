import { gql, DocumentNode } from '@apollo/client';

export const seoDataQuery: DocumentNode = gql`
   query SeoDataQuery($uri: String!) {
      pageBy(uri: $uri) {
         id
         seo {
            canonical
            title
            metaDesc
            metaKeywords
            opengraphImage {
               mediaItemUrl
            }
            fullHead
         }
         featuredImage {
            node {
               mediaItemUrl
            }
         }
      }
   }
`;

export const seoProjectDataQuery: DocumentNode = gql`
   query SeoProjectDataQuery($slug: String!) {
      projectBy(slug: $slug) {
         id
         seo {
            canonical
            title
            metaDesc
            metaKeywords
            opengraphImage {
               mediaItemUrl
            }
            fullHead
         }
         featuredImage {
            node {
               mediaItemUrl
            }
         }
      }
   }
`;

export const seoCareerDataQuery: DocumentNode = gql`
   query SeoCareerDataQuery($slug: String!) {
      careerBy(slug: $slug) {
         id
         seo {
            canonical
            title
            metaDesc
            metaKeywords
            opengraphImage {
               mediaItemUrl
            }
            fullHead
         }
         featuredImage {
            node {
               mediaItemUrl
            }
         }
      }
   }
`;

export const seoInsightDataQuery: DocumentNode = gql`
   query SeoInsightQuery($slug: String!) {
      postBy(slug: $slug) {
         id
         seo {
            canonical
            title
            metaDesc
            metaKeywords
            opengraphImage {
               mediaItemUrl
            }
            fullHead
         }
         featuredImage {
            node {
               mediaItemUrl
            }
         }
      }
   }
`;
