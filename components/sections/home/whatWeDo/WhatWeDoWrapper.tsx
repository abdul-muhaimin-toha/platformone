import WhatWeDoHeading from './WhatWeDoHeading';
import WhatWeDoCards from './WhatWeDoCards';
import WhatWeDoBackground from './WhatWeDoBackground';
import WhatWeDoStickySideTitle from './WhatWeDoStickySideTitle';

// types.ts (or you can keep this in the main file)
export interface WhatWeDoCardData {
  id: number | string;
  bg: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  imageSrc: string;
}

export interface WhatWeDoSectionProps {
  headingTitle: string;
  headingDescription: string;
  cards: WhatWeDoCardData[];
}

export default function WhatWeDoSection({
  headingTitle,
  headingDescription,
  cards,
}: WhatWeDoSectionProps) {
  return (
    <section className="relative z-0 w-full overflow-clip bg-white min-h-[300vh]">
      <WhatWeDoBackground />
      <div className="relative z-10 flex w-full flex-col py-32 pb-[248px] gap-16 lg:gap-32">
        <WhatWeDoHeading
          title={headingTitle}
          description={headingDescription}
        />
        <div className="relative w-full">
          <WhatWeDoStickySideTitle />
          <WhatWeDoCards cards={cards} />
        </div>
      </div>
    </section>
  );
}
