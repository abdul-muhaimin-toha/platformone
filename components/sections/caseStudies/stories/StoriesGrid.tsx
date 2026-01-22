'use client';

import { FC, useState } from 'react';
import StoriesCard from './StoriesCard';
import { CaseStudyNode } from '@/graphql/types';
import Button from '@/components/globals/Button';
import { fetchMoreCaseStudies } from './stories-actions';

export interface StoriesGridProps {
  initialCaseStudies: CaseStudyNode[];
  initialPageInfo: {
    hasNextPage: boolean;
    endCursor: string;
  };
}

const StoriesGrid: FC<StoriesGridProps> = ({
  initialCaseStudies,
  initialPageInfo,
}) => {
  const [caseStudies, setCaseStudies] = useState<CaseStudyNode[]>(initialCaseStudies);
  const [pageInfo, setPageInfo] = useState(initialPageInfo);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    if (loading || !pageInfo.hasNextPage) return;

    setLoading(true);
    try {
      const result = await fetchMoreCaseStudies(6, pageInfo.endCursor);
      if (result) {
        setCaseStudies((prev) => [...prev, ...result.nodes]);
        setPageInfo(result.pageInfo);
      }
    } catch (error) {
      console.error('Failed to load more case studies:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-14 lg:gap-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
        {caseStudies.map((caseStudy, index) => (
          <StoriesCard key={caseStudy.id || index} caseStudy={caseStudy} />
        ))}
      </div>

      {pageInfo.hasNextPage && (
        <div className="flex justify-center">
          <Button
            onClick={handleLoadMore}
            variant="primary"
            className="min-w-[180px]"
          >
            {loading ? 'Loading...' : 'Load more'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default StoriesGrid;
