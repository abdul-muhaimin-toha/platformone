import LeadershipHeroInner from './LeadershipHeroInner';
import { FC } from 'react';

interface LeadershipHeroProps {
  heading: {
    title: string;
    subtitle: string;
  };
  desktopImages: { src: string; alt: string }[][];
  mobileImages: { src: string; alt: string }[][];
  button?: {
    label: string;
    href: string;
  };
}

const LeadershipHero: FC<LeadershipHeroProps> = ({
  heading,
  desktopImages,
  mobileImages,
  button,
}) => {
  return (
    <section className="bg-background">
      <div className="bg-[#FF69B4] rounded-bl-[64px] overflow-hidden">
        <div
          className="w-full relative bg-[#3F1231] bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/home/hero/bg.svg')` }}
        >
          <LeadershipHeroInner
            heading={heading}
            desktopImages={desktopImages}
            mobileImages={mobileImages}
            button={button}
          />
        </div>
      </div>
    </section>
  );
};

export default LeadershipHero;
