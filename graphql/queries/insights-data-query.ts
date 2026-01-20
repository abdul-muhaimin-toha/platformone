import { gql, DocumentNode } from '@apollo/client';

export const allInsightsQuery: DocumentNode = gql`
  query AllInsightsQuery($limit: Int = 10) {
    posts(first: $limit) {
      edges {
        node {
          id
          title
          featuredImage {
            node {
              link
            }
          }
          slug
          date
          excerpt
        }
      }
    }
  }
`;

export const singleInsightQuery: DocumentNode = gql`
  query singleInsight($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      featuredImage {
        node {
          link
        }
      }
      slug
      date
      content
      categories {
        edges {
          node {
            id
            categoryId
          }
        }
      }
    }
  }
`;

export const relatedInsightsQuery: DocumentNode = gql`
  query relatedInsightsQuery(
    $categoryId: Int!
    $limit: Int = 10
    $exclude: [ID] = []
  ) {
    posts(first: $limit, where: { categoryId: $categoryId, notIn: $exclude }) {
      edges {
        node {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              link
            }
          }
        }
      }
    }
  }
`;

// /////////////////////////////////

export const multiInsightQuery = gql`
  query MultiInsightQuery($ids: [ID!]!) {
    posts(where: { in: $ids }) {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            link
          }
        }
        categories {
          edges {
            node {
              name
            }
          }
        }
      }
    }
  }
`;
