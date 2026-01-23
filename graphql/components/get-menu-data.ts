import getGqlData from '@/lib/get-gql-data';
import { GET_ALL_HEADER_FOOTER_DATA } from '../queries/menu-data-query';
import { GqlResponse } from '@/components/layout/header/types';

export const getSiteHeaderFooterData = async () => {
  try {
    const data = await getGqlData<GqlResponse>(GET_ALL_HEADER_FOOTER_DATA, {});

    const menus = data?.menus?.nodes || [];
    const crbThemeOptions = data?.crbThemeOptions || {};

    return { menus, crbThemeOptions };
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return { menus: [], crbThemeOptions: {} };
  }
};
