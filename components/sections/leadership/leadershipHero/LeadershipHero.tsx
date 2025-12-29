import LeadershipHeroInner from './LeadershipHeroInner';
import { FC } from 'react';

interface LeadershipHeroProps {
  heading: {
    title: string;
    subtitle: string;
  };
  desktopImages: { src: string; alt: string }[][];
  mobileImages: { src: string; alt: string }[][];
}

const LeadershipHero: FC<LeadershipHeroProps> = ({
  heading,
  desktopImages,
  mobileImages,
}) => {
  return (
    <section className="bg-white">
      <div className="bg-[#FF69B4] rounded-bl-[64px] overflow-hidden">
        <div
          className="w-full relative bg-[#3F1231] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/home/hero/bg.svg')` }}
        >
          {/* Client Component */}
          <LeadershipHeroInner
            heading={heading}
            desktopImages={desktopImages}
            mobileImages={mobileImages}
          />
        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
