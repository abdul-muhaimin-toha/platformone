import TeamCylinder from './TeamCylinder';
import TeamHeading from './TeamHeading';
import { getTeamsImagesRandom } from '@/graphql/components/get-team-data';

import { BlockData, HeadingProps } from '../types';

export interface TeamStartsWithUsData extends HeadingProps {}

export type TeamStartsWithUsProps = BlockData<TeamStartsWithUsData>;

export default async function TeamStartsWithUs({ data }: TeamStartsWithUsProps) {
  const content = data?.data ?? {};

  const {
    title = '',
    subtitle = '',
    short_description = '',
  } = content;

  // Fetch 12 random team images to populate the revolving cylinder
  const randomTeams = await getTeamsImagesRandom(12);

  const peopleImages = randomTeams
    .map((t) => t.featuredImage.node.mediaItemUrl)
    .filter(Boolean) as string[];

  return (
    <section className="bg-white">
      <div
        style={{
          background: 'linear-gradient(97deg, #571B39 0%, #2F0730 100%)',
        }}
        className="flex bg-blend-hard-light gap-10 flex-col rounded-tr-[80px] lg:rounded-tr-[120px] py-24 justify-center items-center w-full"
      >
        <div className="container-custom">
          <TeamHeading
            title={title}
            subtitle={subtitle}
            short_description={short_description}
          />
        </div>
        {peopleImages.length > 0 && (
          <TeamCylinder
            peopleImages={peopleImages}
            centerpieceImage="/home/start-with-us/center.png"
          />
        )}
      </div>
    </section>
  );
}
