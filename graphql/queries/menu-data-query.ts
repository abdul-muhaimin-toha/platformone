import { gql, DocumentNode } from '@apollo/client';

export const GET_ALL_HEADER_FOOTER_DATA: DocumentNode = gql`
  query NewQuery {
    menus {
      nodes {
        name
        menuItems {
          edges {
            node {
              id
              label
              url
              childItems {
                edges {
                  node {
                    id
                    label
                    url
                    parentId
                  }
                }
              }
              parentId
            }
          }
        }
      }
    }
    crbThemeOptions {
      companyLogo
      copyrightTest
      crbFooterScripts
      crbHeaderScripts
      footerCompanyLogo
      socialFacebookLink
      socialInstagramLink
      socialLinkedinLink
      shortDescription
      letstalkUrl
      letstalkTitle
    }
  }
`;
