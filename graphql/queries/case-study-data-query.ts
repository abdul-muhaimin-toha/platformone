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
