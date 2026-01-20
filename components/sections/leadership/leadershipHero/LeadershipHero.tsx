import { extractBottomText } from '@/utils/utils';
import LeadershipHeroInner from './LeadershipHeroInner';
import { FC } from 'react';
import { BlockData, ButtonProps } from '../../home/types';

export interface LeadershipHeroData extends ButtonProps {
  title_one: string;
  desktop_images?: { feature_image: string }[];
  mobile_images?: { feature_image: string }[];
}

export type LeadershipHeroProps = BlockData<LeadershipHeroData>;

const LeadershipHero: FC<LeadershipHeroProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    btn_text = '',
    btn_url = '',
    title_one = '',
    desktop_images = [],
    mobile_images = [],
  } = content;

  const heading = extractBottomText(title_one);

  // Fallback images if not provided by CMS
  const defaultDesktopImages = [
    [
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
    ],
    [
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
    ],
    [
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
    ],
  ];

  const defaultMobileImages = [
    [
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
    ],
    [
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
    ],
    [
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
      { src: '/leadership/hero/leader-1.png', alt: 'Team 1' },
    ],
  ];

  // Helper to chunk images for rows/columns if needed, or just use defaults for now if CMS shape is different
  // For now, preservation of style is priority, so I'll keep the 3x/3x grid structure.
  
  return (
    <section className="bg-background">
      <div className="bg-[#FF69B4] rounded-bl-[64px] overflow-hidden">
        <div
          className="w-full relative bg-[#3F1231] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/home/hero/bg.svg')` }}
        >
          <LeadershipHeroInner
            heading={heading}
            desktopImages={defaultDesktopImages}
            mobileImages={defaultMobileImages}
            button={{ href: btn_url, label: btn_text }}
          />
        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
