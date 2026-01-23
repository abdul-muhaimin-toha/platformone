export interface WPNode {
  id?: string;
  databaseId?: number;
  slug?: string;
  uri?: string;
  title?: string;
  date?: string;
  modified?: string;
  content?: string;
  excerpt?: string;
  logoFile?: string; // Added for Case Studies
  featuredImage?: {
    node: {
      id?: string; // Added for Case Studies
      mediaItemUrl: string;
      link?: string;
    };
  };
  seo?: {
    canonical?: string;
    title?: string;
    metaDesc?: string;
    metaKeywords?: string;
    opengraphImage?: {
      mediaItemUrl: string;
    };
    fullHead?: string;
  };
}

export interface CaseStudyNode extends WPNode {
  logoFile: string;
  featuredImage: {
    node: {
      id: string;
      mediaItemUrl: string;
    };
  };
}

export interface TeamNode extends WPNode {
  designation?: string;
  linkedinLink?: string;
  featuredImage: {
    node: {
      id?: string;
      mediaItemUrl: string;
      sourceUrl?: string;
    };
  };
}

export interface PolicyNode extends WPNode {
  dateGmt?: string;
}

export interface TestimonialNode extends WPNode {
  clientDescription?: string;
  logoFile?: string;
  uploadClientImage?: string;
  designation?: string;
  caseStyudy?: {
    slug?: string;
  }[];
}

export interface BrandNode extends WPNode {
  logoFile?: string;
}

export interface FAQNode extends WPNode {
  faqContent?: string;
}

export interface WPEdge<T> {
  node: T;
}

export interface WPConnection<T> {
  edges: WPEdge<T>[];
  nodes?: T[];
  pageInfo?: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    endCursor: string;
    startCursor: string;
  };
}

export interface SitemapData {
  pages: WPConnection<WPNode>;
  posts: WPConnection<WPNode>;
  projects: WPConnection<WPNode>;
  careers: WPConnection<WPNode>;
}

export interface MenuItem {
  id?: string;
  label?: string;
  url?: string;
  parentId?: string;
  childItems?: {
    nodes: MenuItem[];
  };
}

export interface MenuData {
  menu: {
    menuItems: {
      nodes: MenuItem[];
      edges?: WPEdge<MenuItem>[];
    };
  };
  crbThemeOptions?: Record<string, unknown>;
}

export interface PageBlock {
  name: string;
  attributesJSON: string | Record<string, any>;
  order: number;
  dynamicContent?: string;
  originalContent?: string;
  saveContent?: string;
}

export interface PageData {
  pageBy: {
    id: string;
    blocks: PageBlock[];
    seo?: WPNode['seo'];
    featuredImage?: WPNode['featuredImage'];
  };
}

export interface ServiceBlock {
  name: string;
  attributesJSON: string | Record<string, any>;
  order: number;
  dynamicContent?: string;
  originalContent?: string;
  saveContent?: string;
}

export interface ServiceData {
  serviceBy: {
    id: string;
    blocks: ServiceBlock[];
    seo?: WPNode['seo'];
    featuredImage?: WPNode['featuredImage'];
  };
}
