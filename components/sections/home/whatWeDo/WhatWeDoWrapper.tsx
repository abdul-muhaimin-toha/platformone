import WhatWeDoHeading from './WhatWeDoHeading';
import WhatWeDoCards from './WhatWeDoCards';
import WhatWeDoBackground from './WhatWeDoBackground';
import WhatWeDoStickySideTitle from './WhatWeDoStickySideTitle';
import { BlockData, ButtonProps } from '../types';

export interface WhatWeDoCardData extends ButtonProps {
  _id: string | number;
  feature_image: string;
  top_title: string;
  title_one: string;
  title_two: string;
  short_description: string;
  bg_color: string;
}

export interface WhatWeDoData extends ButtonProps {
  title: string;
  description: string;
  customer_experience: WhatWeDoCardData[];
}

export type WhatWeDoSectionProps = BlockData<WhatWeDoData>;

export default function WhatWeDoSection({ data }: WhatWeDoSectionProps) {
  const content = data?.data;
  if (!content) return null;

  const {
    title = '',
    description = '',
    customer_experience = [],
    btn_text = '',
    btn_url = '',
    open_in_new_tab = false,
  } = content;

  return (
    <section className="relative z-0 w-full overflow-clip min-h-[300vh]">
      <WhatWeDoBackground />
      <div className="relative z-10 flex w-full flex-col py-32 pb-56 gap-16 lg:gap-32">
        <WhatWeDoHeading title={title} description={description} />
        <div className="relative w-full">
          <WhatWeDoStickySideTitle />
          <WhatWeDoCards
            cards={customer_experience}
            btn_text_main={btn_text}
            btn_url_main={btn_url}
            open_in_new_tab_main={open_in_new_tab}
          />
        </div>
      </div>
    </section>
  );
}
