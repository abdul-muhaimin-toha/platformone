import { FooterProps, MenuNode, ThemeOptions } from '@/components/layout/header/types';

export const mapFooterData = (
  menus: MenuNode[],
  crbThemeOptions: ThemeOptions
): FooterProps => {
  const servicesMenu = menus.find((menu) => menu.name === 'Services');
  const discoverMenu = menus.find((menu) => menu.name === 'Discover');
  const privacyMenu = menus.find((menu) => menu.name === 'Privacy Policy');

  const mapLinks = (menu?: MenuNode) =>
    menu?.menuItems?.edges.map(({ node }) => ({
      label: node.label,
      href: node.url,
    })) || [];

  return {
    logoSrc: crbThemeOptions?.footerCompanyLogo || '',
    description: crbThemeOptions?.shortDescription || '',
    columns: [
      {
        title: 'Services',
        links: mapLinks(servicesMenu),
      },
      {
        title: 'Discover',
        links: mapLinks(discoverMenu),
      },
    ],
    copyright: crbThemeOptions?.copyrightTest || '',
    bottomLinks: mapLinks(privacyMenu),
    socials: {
      facebook: crbThemeOptions?.socialFacebookLink,
      instagram: crbThemeOptions?.socialInstagramLink,
      linkedin: crbThemeOptions?.socialLinkedinLink,
    },
  };
};
