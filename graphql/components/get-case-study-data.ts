import getGqlData from '@/lib/get-gql-data';
import { WPConnection, CaseStudyNode, PageBlock } from '../types';
import {
  multiCaseStudyQuery,
  singleCaseStudyQuery,
  allCaseStudiesQuery,
} from '../queries/case-study-data-query';

interface CaseStudyData {
  caseStudies: WPConnection<CaseStudyNode> & { nodes?: CaseStudyNode[] };
}

/**
 * Fetch multiple case studies by IDs
 */
export const getCaseStudiesByIds = async (
  ids: (string | number)[],
): Promise<CaseStudyNode[]> => {
  if (!Array.isArray(ids) || ids.length === 0) {
    return [];
  }

  try {
    const data = await getGqlData<CaseStudyData>(multiCaseStudyQuery, { ids });

    if (!data?.caseStudies?.nodes?.length) {
      console.warn(`No case studies found for IDs: ${ids.join(', ')}`);
      return [];
    }

    return data.caseStudies.nodes;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
};

/**
 * Fetch single case study by slug
 */
export interface SingleCaseStudyData {
  caseStudyBy: {
    id: string;
    blocks: PageBlock[];
  } | null;
}

export const getCaseStudyBySlug = async (
  slug: string,
): Promise<PageBlock[] | null> => {
  if (!slug) return null;

  try {
    const data = await getGqlData<SingleCaseStudyData>(singleCaseStudyQuery, {
      slug,
    });

    const blocks = data?.caseStudyBy?.blocks;
    if (!blocks || blocks.length === 0) {
      console.warn(`No blocks found for slug: ${slug}`);
      return null;
    }

    // Parse each block's attributesJSON safely
    const parsedBlocks = blocks.map((block) => ({
      ...block,
      attributesJSON:
        typeof block.attributesJSON === 'string' && block.attributesJSON
          ? JSON.parse(block.attributesJSON)
          : block.attributesJSON || {},
    }));

    return parsedBlocks;
  } catch (error) {
    console.error('Error fetching case study blocks:', error);
    return null;
  }
};

/**
 * Fetch all case studies with pagination
 */
export const getAllCaseStudies = async (
  first: number = 10,
  after?: string,
): Promise<{
  nodes: CaseStudyNode[];
  pageInfo: { hasNextPage: boolean; endCursor: string };
}> => {
  try {
    const data = await getGqlData<{ caseStudies: WPConnection<CaseStudyNode> }>(
      allCaseStudiesQuery,
      { first, after },
    );

    if (!data?.caseStudies?.edges) {
      return { nodes: [], pageInfo: { hasNextPage: false, endCursor: '' } };
    }

    const nodes = data.caseStudies.edges.map((edge) => edge.node);
    const pageInfo = data.caseStudies.pageInfo || {
      hasNextPage: false,
      endCursor: '',
    };

    return { nodes, pageInfo };
  } catch (error) {
    console.error('Error fetching all case studies:', error);
    return { nodes: [], pageInfo: { hasNextPage: false, endCursor: '' } };
  }
};
