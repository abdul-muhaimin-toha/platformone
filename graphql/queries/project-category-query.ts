import { gql, DocumentNode } from '@apollo/client';

export const projectCategoriesQuery: DocumentNode = gql`
   query ProjectCategoriesQuery {
      projectCategories {
         edges {
            node {
               id
               parentId
               name
               projectCategoryId
            }
         }
      }
   }
`;
