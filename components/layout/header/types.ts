export interface NavLink {
  label: string;
  href?: string;
  child?: { label: string; href: string }[];
}

export interface HeaderProps {
  navLinks: NavLink[];
  cta: { label: string; href: string };
  logoSrc: string;
  logoLightSrc: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  logoSrc: string;
  description: string;
  columns: FooterColumn[];
  copyright: string;
  bottomLinks: { label: string; href: string }[];
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface ThemeOptions {
  companyLogo: string;
  copyrightTest: string;
  crbFooterScripts: string;
  crbHeaderScripts: string;
  footerCompanyLogo: string;
  socialFacebookLink: string;
  socialInstagramLink: string;
  socialLinkedinLink: string;
  shortDescription: string;
  letstalkUrl: string;
  letstalkTitle: string;
}

export interface GqlResponse {
  menus: {
    nodes: MenuNode[];
  };
  crbThemeOptions: ThemeOptions;
}

export interface MenuNode {
  name: string;
  menuItems: {
    edges: {
      node: {
        id: string;
        label: string;
        url: string;
        parentId: string | null;
        childItems: {
          edges: {
            node: {
              id: string;
              label: string;
              url: string;
              parentId: string | null;
            };
          }[];
        };
      };
    }[];
  };
}
