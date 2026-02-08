import { extractBottomText } from '@/utils/utils';
import LeadershipHeroInner from './LeadershipHeroInner';
import { FC } from 'react';
import { BlockData, ButtonProps } from '../../home/types';
import { getTeamsImagesRandom, getLeadershipTeams } from '@/graphql/components/get-team-data';

export interface LeadershipHeroData extends ButtonProps {
  title_one: string;
  crb_case_study_association?: { id: number | string }[];
  show_selected_content?: boolean;
}

export type LeadershipHeroProps = BlockData<LeadershipHeroData>;

const LeadershipHero: FC<LeadershipHeroProps> = async ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    btn_text = '',
    btn_url = '',
    title_one = '',
    crb_case_study_association = [],
    show_selected_content,
  } = content;

  console.log(content);

  // Fetch team images based on selection mode
  let teamNodes: any[] = [];
  const targetCount = 12; // 3 columns * 4 images for a balanced grid

  if (show_selected_content && crb_case_study_association.length > 0) {
    const ids = crb_case_study_association.map((item: any) => item.id);
    const selectedNodes = await getLeadershipTeams(ids);
    
    // Repeat selected members to fill the grid if needed
    if (selectedNodes.length > 0) {
      while (teamNodes.length < targetCount) {
        teamNodes.push(...selectedNodes);
      }
      teamNodes = teamNodes.slice(0, targetCount);
      // Shuffle the selected/repeated items for random positioning
      teamNodes.sort(() => Math.random() - 0.5);
    }
  } else {
    teamNodes = await getTeamsImagesRandom(targetCount);
  }

  // Format and filter images
  const formattedImages = teamNodes
    .map((team: any) => ({
      src: team.featuredImage?.node?.mediaItemUrl || '',
      alt: team.title || 'Team Member',
    }))
    .filter((img: any) => img.src);

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
