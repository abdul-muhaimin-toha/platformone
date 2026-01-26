import { gql, DocumentNode } from '@apollo/client';

export const allInsightsQuery: DocumentNode = gql`
  query AllInsightsQuery($limit: Int = 20, $search: String) {
    posts(first: $limit, where: { search: $search }) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            edges {
              node {
                name
                slug
              }
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
          mediaItemUrl
        }
      }
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
      slug
      date
      content
      blocks {
        attributesJSON
        dynamicContent
        originalContent
        saveContent
      }
      categories {
        edges {
          node {
            id
            name
            slug
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
              mediaItemUrl
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            edges {
              node {
                name
                slug
              }
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
        date
        excerpt
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    }
  }
`;

export const filteredInsightsQuery: DocumentNode = gql`
  query FilteredInsightsQuery($limit: Int = 20, $categoryName: String, $search: String) {
    posts(first: $limit, where: { categoryName: $categoryName, search: $search }) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          title
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          categories {
            edges {
              node {
                name
                slug
              }
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
