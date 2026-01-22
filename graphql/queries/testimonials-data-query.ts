import { gql } from '@apollo/client';

export const testimonialsByIdQuery = gql`
  query TestimonialsById($ids: [ID!]!) {
    testimonials(where: { in: $ids }) {
      nodes {
        id
        title
        clientDescription
        logoFile
        uploadClientImage
        designation
        caseStyudy {
          slug
        }
      }
    }
  }
`;
