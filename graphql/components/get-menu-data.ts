import getGqlData from '@/lib/get-gql-data';
import { footerQuery, headerQuery } from '../queries/menu-data-query';
import { MenuData } from '../types';

export const getHeaderData = async (menuId: string | number) => {
   if (!menuId) {
      console.warn('No menu ID provided');
      return { menuItems: [], crbThemeOptions: {} };
   }

   try {
      const data = await getGqlData<MenuData>(headerQuery, { id: menuId });

      const menuItems = Array.isArray(data?.menu?.menuItems?.nodes)
         ? data.menu.menuItems.nodes
         : [];

      const crbThemeOptions = data?.crbThemeOptions || {};

      return { menuItems, crbThemeOptions };
   } catch (error) {
      console.error('Error fetching menu data:', error);
      return { menuItems: [], crbThemeOptions: {} };
   }
};

interface FooterData {
   firstMenu: MenuData['menu'];
   secondMenu: MenuData['menu'];
   thirdMenu: MenuData['menu'];
   crbThemeOptions: any;
}

export const getFooterData = async (firstId: string | number, secondId: string | number, thirdId: string | number) => {
   if (!firstId || !secondId || !thirdId) {
      console.warn('Menu IDs missing');
      return {
         firstMenu: {},
         secondMenu: {},
         thirdMenu: {},
         crbThemeOptions: {},
      };
   }

   try {
      const data = await getGqlData<FooterData>(footerQuery, {
         firstId,
         secondId,
         thirdId,
      });

      return {
         firstMenu: data?.firstMenu || {},
         secondMenu: data?.secondMenu || {},
         thirdMenu: data?.thirdMenu || {},
         crbThemeOptions: data?.crbThemeOptions || {},
      };
   } catch (error) {
      console.error('Error fetching footer data:', error);
      return {
         firstMenu: {},
         secondMenu: {},
         thirdMenu: {},
         crbThemeOptions: {},
      };
   }
};

