import { gql } from '@apollo/client';

export const policiesDataQuery = gql`
  query NewQuery {
    policies {
      edges {
        node {
          id
          title
          slug
          dateGmt
          date
        }
      }
    }
  }
`;

export const singlePolicyQuery = gql`
  query singlePolicy($slug: String!) {
    policyBy(slug: $slug) {
      id
      title
      slug
      date
      dateGmt
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
