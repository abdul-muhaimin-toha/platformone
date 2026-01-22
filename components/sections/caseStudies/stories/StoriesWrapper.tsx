import StoriesHeader from './StoriesHeader';
import { getAllCaseStudies } from '@/graphql/components/get-case-study-data';
import { BlockData, HeadingProps } from '../../home/types';
import StoriesGrid from './StoriesGrid';

export interface StoriesData extends HeadingProps {
  title_one?: string;
  title_two?: string;
}

export type StoriesWrapperProps = BlockData<StoriesData>;

const StoriesWrapper = async ({ data }: StoriesWrapperProps) => {
  const content = data?.data;
  if (!content) return null;

  const {
    short_description = '',
    title_one = '',
    title_two = '',
  } = content;

  // Initial fetch for the first set of case studies
  const { nodes: initialCaseStudies, pageInfo: initialPageInfo } = await getAllCaseStudies(6);

  if (!initialCaseStudies || initialCaseStudies.length === 0) return null;

  return (
    <section className="bg-white">
      <div className="container-custom">
        <div className="w-full flex flex-col gap-14 lg:gap-16 py-24">
          <StoriesHeader
            title={title_one}
            highlightedTitle={title_two}
            description={short_description}
          />

          <StoriesGrid 
            initialCaseStudies={initialCaseStudies}
            initialPageInfo={initialPageInfo}
          />
        </div>
      </div>
    </section>
  );
};

export default StoriesWrapper;
