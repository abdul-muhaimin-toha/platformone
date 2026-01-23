import { MenuNode, NavLink, ThemeOptions } from '@/components/layout/header/types';

export const mapHeaderData = (menus: MenuNode[], crbThemeOptions: ThemeOptions) => {
  const primaryMenu = menus.find((menu) => menu.name === 'Primary Menu');

  const navLinks: NavLink[] =
    primaryMenu?.menuItems?.edges
      .filter(({ node }) => !node.parentId) // Only top-level items
      .map(({ node }) => {
        const children =
          node.childItems?.edges.map(({ node: child }) => ({
            label: child.label,
            href: child.url,
          })) || [];

        return {
          label: node.label,
          href: node.url,
          child: children.length > 0 ? children : undefined,
        };
      }) || [];

  return {
    navLinks,
    logoSrc: crbThemeOptions?.companyLogo || '',
    logoLightSrc: crbThemeOptions?.footerCompanyLogo || '',
    cta: {
      label: crbThemeOptions?.letstalkTitle || "Let's Talk",
      href: crbThemeOptions?.letstalkUrl || '/contact-us',
    },
  };
};
