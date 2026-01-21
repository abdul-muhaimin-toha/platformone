import LeadershipCard from './LeadershipCard';
import LeadershipSectionHeading from './LeadershipSectionHeading';
import { getLeadershipTeams } from '@/graphql/components/get-team-data';
import { BlockData, HeadingProps } from '../../home/types';

export interface LeadershipData extends HeadingProps {
  people_list?: any[];
}

export type LeadershipWrapperProps = BlockData<LeadershipData>;

const LeadershipWrapper = async ({ data }: LeadershipWrapperProps) => {
  const content = data?.data;
  if (!content) return null;

  const { title = '', subtitle = '' } = content;

  const teams = await getLeadershipTeams();

  if (!teams || teams.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="container-custom">
        <div className="flex w-full py-24 md:py-32 flex-col items-center justify-center gap-14 md:gap-16">
          <LeadershipSectionHeading title={title} subtitle={subtitle} />

          <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-4 md:gap-6">
            {teams.map((person) => (
              <LeadershipCard
                key={person.id}
                name={person.title || ''}
                role={person.designation || ''}
                image={person.featuredImage?.node?.mediaItemUrl || ''}
                linkedinUrl={person.linkedinLink || "#"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipWrapper;
