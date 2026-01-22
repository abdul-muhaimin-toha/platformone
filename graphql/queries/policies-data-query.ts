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
