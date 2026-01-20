import StoriesHeader from './StoriesHeader';
import StoriesCard from './StoriesCard';
import { getCaseStudiesByIds } from '@/graphql/components/get-case-study-data';
import { CaseStudyNode } from '@/graphql/types';
import { BlockData, HeadingProps } from '../../home/types';

export interface StoriesData extends HeadingProps {
  crb_case_study_association?: any[];
  title_one?: string;
  title_two?: string;
}

export type StoriesWrapperProps = BlockData<StoriesData>;

async function StoriesWrapper({ data }: StoriesWrapperProps) {
  const content = data?.data;
  if (!content) return null;

  const {
    crb_case_study_association = [],
    short_description = '',
    title_one = '',
    title_two = '',
  } = content;

  const ids = crb_case_study_association
    .map((item) => item.databaseId ?? item.id)
    .filter(Boolean);

  let caseStudies: CaseStudyNode[] = [];

  if (ids.length > 0) {
    caseStudies = await getCaseStudiesByIds(ids);
  }

  // ✅ Correct variable name usage
  const validCaseStudies = caseStudies.filter((node) => node?.id);

  console.log(validCaseStudies);

  console.log(validCaseStudies);

  return (
    <section className="bg-white">
      <div className="container-custom">
        <div className="w-full flex flex-col gap-14 lg:gap-16 py-24">
          <StoriesHeader
            title={title_one}
            highlightedTitle={title_two}
            description={short_description}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
            {validCaseStudies.map((caseStudy, index) => (
              <StoriesCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoriesWrapper;
