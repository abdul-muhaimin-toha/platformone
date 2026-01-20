import { BlockData, ButtonProps } from '../types';
import HeroClient from './HeroClient';

export interface HeroData extends ButtonProps {
  short_description_one: string;
  short_description_two: string;
  title_one: string;
}

export type HeroWrapperProps = BlockData<HeroData>;

export default function Hero({ data }: HeroWrapperProps) {
  const content = data?.data;
  if (!content) return null;

  const {
    btn_text,
    btn_url,
    open_in_new_tab,
    short_description_one,
    short_description_two,
    title_one,
  } = content;

  const titleWords: string[] = title_one.split(' ');

  return (
    <section>
      <div className="bg-[#3E122F] rounded-bl-[64px]">
        <HeroClient
          title_one={titleWords}
          short_description_one={short_description_one}
          short_description_two={short_description_two}
          btn_text={btn_text}
          btn_url={btn_url}
          open_in_new_tab={open_in_new_tab}
        />
      </div>
    </section>
  );
}
