import { gql, DocumentNode } from '@apollo/client';

export const pageDataQuery: DocumentNode = gql`
   query PageDataQuery($uri: String!) {
      pageBy(uri: $uri) {
         id
         blocks {
            attributesJSON
            dynamicContent
            originalContent
            saveContent
            name
            order
         }
         seo {
            canonical
            title
            metaDesc
            metaKeywords
            opengraphImage {
               mediaItemUrl
            }
         }
         featuredImage {
            node {
               mediaItemUrl
            }
         }
      }
   }
`;
