import { gql, DocumentNode } from '@apollo/client';

export const serviceDataQuery: DocumentNode = gql`
  query ServiceDataQuery($slug: String!) {
    serviceBy(slug: $slug) {
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
