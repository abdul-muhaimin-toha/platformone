import { extractBottomText } from '@/utils/utils';
import LeadershipHeroInner from './LeadershipHeroInner';
import { FC } from 'react';
import { BlockData, ButtonProps } from '../../home/types';
import { getTeamsImagesRandom } from '@/graphql/components/get-team-data';

export interface LeadershipHeroData extends ButtonProps {
  title_one: string;
}

export type LeadershipHeroProps = BlockData<LeadershipHeroData>;

const LeadershipHero: FC<LeadershipHeroProps> = async ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    btn_text = '',
    btn_url = '',
    title_one = '',
  } = content;

  // Fetch random team images (defaults to LARGE size)
  const randomTeams = await getTeamsImagesRandom(10);

  // Format and filter images
  const formattedImages = randomTeams
    .map((team) => ({
      src: team.featuredImage.node.mediaItemUrl || '',
      alt: team.title || 'Team Member',
    }))
    .filter((img) => img.src);

  // Helper to slice array into groups
  const chunkArray = (arr: any[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size),
    );
  };

  // Distribute across 3 columns for desktop and 2 rows for mobile
  const desktopImagesList = chunkArray(
    formattedImages,
    Math.ceil(formattedImages.length / 3),
  );
  const mobileImagesList = chunkArray(
    formattedImages,
    Math.ceil(formattedImages.length / 2),
  );

  const heading = extractBottomText(title_one);

  return (
    <section className="bg-background">
      <div className="bg-[#FF69B4] rounded-bl-[64px] overflow-hidden">
        <div
          className="w-full relative bg-[#3F1231] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/home/hero/bg.svg')` }}
        >
          <LeadershipHeroInner
            heading={heading}
            desktopImages={desktopImagesList}
            mobileImages={mobileImagesList}
            button={{ href: btn_url, label: btn_text }}
          />
        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
