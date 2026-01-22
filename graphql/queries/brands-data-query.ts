import { gql } from '@apollo/client';

export const allBrandsQuery = gql`
  query GetAllBrands {
    brands(first: 100) {
      edges {
        node {
          id
          logoFile
        }
      }
    }
  }
`;
