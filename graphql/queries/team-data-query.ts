import { gql } from '@apollo/client';

export const teamsImagesRandomQuery = gql`
  query TeamsImagesRandom($first: Int!, $size: MediaItemSizeEnum) {
    teams(first: $first) {
      nodes {
        id
        title
        featuredImage {
          node {
            mediaItemUrl
            sourceUrl(size: $size)
          }
        }
      }
    }
  }
`;

export const leadershipTeamsQuery = gql`
  query NewQuery {
    teams(first: 100) {
      edges {
        node {
          id
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          title
          designation
          linkedinLink
        }
      }
    }
  }
`;
