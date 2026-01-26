import { Insight } from '@/components/sections/insights/insightGrid/InsightCard';
import { LinkItem } from '@/components/sections/insights/sidebar/Sidebar';

export interface WpCategory {
  name: string;
  slug: string;
  ancestors?: {
    edges?: {
      node: {
        slug: string;
      };
    }[];
  };
}

export interface WpPost {
  title?: string;
  slug?: string;
  date?: string;
  featuredImage?: {
    node?: {
      mediaItemUrl?: string;
      sourceUrl?: string;
      link?: string;
    };
  };
  author?: {
    node?: {
      name?: string;
      avatar?: {
        url?: string;
      };
    };
  };
  categories?: {
    edges?: {
      node: {
        name: string;
        slug: string;
      };
    }[];
  };
  blocks?: any[];
}

export const mapWpPostToInsight = (post: WpPost): Insight => {
  if (!post) {
    return {
      title: 'Insight Title',
      image: '/insights/top-card.png',
      category: { label: 'Insight', href: '/insights' },
      author: 'Platform One',
    };
  }

  const validCategoryEdges = post.categories?.edges?.filter((edge: any) => edge.node.name.toLowerCase() !== 'uncategorized') || [];
  const categoryEdge = validCategoryEdges[0];
  const secondaryCategoryEdge = validCategoryEdges[1];

  return {
    title: post.title || '',
    image: post.featuredImage?.node?.mediaItemUrl || post.featuredImage?.node?.sourceUrl || post.featuredImage?.node?.link || '/insights/top-card.png',
    category: {
      label: categoryEdge?.node?.name || 'Insight',
      href: `/insights?category=${categoryEdge?.node?.slug || ''}`,
    },
    secondaryCategory: secondaryCategoryEdge?.node?.name,
    author: post.author?.node?.name || 'Platform One',
    authorImage: post.author?.node?.avatar?.url || '/home/work-with-us/avatar.png',
    date: post.date ? new Date(post.date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }) : '',
    slug: post.slug,
  };
};

export const getCategoryNavigation = (
  categoriesData: WpCategory[],
  currentParams: { category?: string; topic?: string },
  activeCategories?: string[]
): { exploreLinks: LinkItem[]; topicLinks: LinkItem[] } => {
  const categories = categoriesData.filter((c) => c.name.toLowerCase() !== 'uncategorized');
  
  // Explore Links (Parent Categories)
  const parentCategories = categories.filter((c) => !c.ancestors?.edges?.length);
  const exploreLinks: LinkItem[] = parentCategories.map((c) => ({
    label: c.name,
    href: `/insights?category=${c.slug}`,
    isActive: activeCategories 
      ? activeCategories.includes(c.slug)
      : currentParams.category === c.slug
  }));
  exploreLinks.unshift({ 
    label: 'All', 
    href: '/insights', 
    isActive: activeCategories ? false : !currentParams.category 
  });

  // Topic Links (Sub-categories)
  const targetChildCategories = currentParams.category 
    ? categories.filter((c) => c.ancestors?.edges?.some((edge) => edge.node.slug === currentParams.category))
    : categories.filter((c) => (c.ancestors?.edges?.length || 0) > 0);

  const topicLinks: LinkItem[] = targetChildCategories.map((c) => ({
    label: c.name,
    href: `/insights?category=${currentParams.category || c.ancestors?.edges?.[0]?.node?.slug}&topic=${c.slug}`,
    isActive: activeCategories
      ? activeCategories.includes(c.slug)
      : currentParams.topic === c.slug
  }));
  topicLinks.unshift({ 
    label: 'All', 
    href: currentParams.category ? `/insights?category=${currentParams.category}` : '/insights', 
    isActive: activeCategories ? false : !currentParams.topic 
  });

  return { exploreLinks, topicLinks };
};

export const extractTableOfContents = (blocks: any[]): LinkItem[] => {
  if (!blocks || !Array.isArray(blocks)) return [];

  const toc: LinkItem[] = [];

  blocks.forEach((block) => {
    const content = block.saveContent || block.originalContent || block.dynamicContent || '';
    if (!content) return;

    // Regex to find elements with id="..."
    // Captures: 1=id value, 2=inner text content (approximate)
    const idRegex = /<[^>]+id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/[^>]+>/g;
    
    let match;
    while ((match = idRegex.exec(content)) !== null) {
      const id = match[1];
      const rawText = match[2];
      
      // Clean HTML tags from label
      let cleanLabel = rawText.replace(/<[^>]+>/g, '').trim();

      // Truncate to max 5 words
      const words = cleanLabel.split(/\s+/);
      if (words.length > 5) {
        cleanLabel = words.slice(0, 5).join(' ') + '...';
      }

      if (id && cleanLabel) {
        toc.push({
          label: cleanLabel,
          href: `#${id}`,
        });
      }
    }
  });

  return toc;
};

/**
 * Safely parse attributesJSON from a WordPress block.
 */
export const parseAttributes = (json: string | object | null | undefined): Record<string, any> => {
  if (!json) return {};
  if (typeof json === 'object') return json;
  try {
    return JSON.parse(json);
  } catch (e) {
    console.warn('Failed to parse attributesJSON:', e);
    return {};
  }
};

/**
 * Extracts the first blog ID from various possible sticky post data shapes.
 */
export const getStickyBlogId = (stickyData: any): string | null => {
  const data = stickyData?.data || stickyData;
  const id = data?.selected_sticky_blogs?.[0]?.id || 
             data?.sticky_post?.[0]?.id ||
             stickyData?.stickyId?.data?.selected_sticky_blogs?.[0]?.id ||
             stickyData?.stickyId?.data?.sticky_post?.[0]?.id;
             
  return id ? String(id) : null;
};
