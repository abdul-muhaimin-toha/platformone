import { gql, DocumentNode } from '@apollo/client';

export const categoriesHierarchyQuery: DocumentNode = gql`
  query CategoriesHierarchy {
    categories {
      edges {
        node {
          id
          name
          slug
          ancestors {
            edges {
              node {
                id
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
