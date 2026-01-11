import { gql, DocumentNode } from '@apollo/client';

export const paginatedCareersQuery: DocumentNode = gql`
   query PaginatedCareersQuery {
      careers(first: 100) {
         edges {
            node {
               id
               title
               slug
               careerJobLocation
               careerJobDeadline
               careerVacancies
            }
         }
      }
   }
`;

export const singleCareerQuery: DocumentNode = gql`
   query SingleCareer($slug: String!) {
      careerBy(slug: $slug) {
         id
         title
         careerJobDeadline
         careerJobLocation
         careerVacancies
         slug
         content
      }
   }
`;
