import { DocumentNode, gql } from '@apollo/client';

export const multiCaseStudyQuery = gql`
  query MultiCaseStudyQuery($ids: [ID!]!) {
    caseStudies(where: { in: $ids }) {
      nodes {
        id
        slug
        logoFile
        title
        featuredImage {
          node {
            id
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export const singleCaseStudyQuery: DocumentNode = gql`
  query SingleCaseStudyQuery($slug: String!) {
    caseStudyBy(slug: $slug) {
      id
      blocks {
        attributesJSON
        dynamicContent
        originalContent
        saveContent
        name
      }
    }
  }
`;

export const allCaseStudiesQuery = gql`
  query AllCaseStudies($first: Int, $after: String) {
    caseStudies(first: $first, after: $after) {
      edges {
        node {
          id
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          slug
          title
          logoFile
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
