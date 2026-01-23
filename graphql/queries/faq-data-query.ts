import { gql } from '@apollo/client';

export const faqsByIdQuery = gql`
  query FaqsById($ids: [ID!]!) {
    faqs(where: { in: $ids }, first: 100) {
      nodes {
        id
        title
        faqContent
      }
    }
  }
`;
