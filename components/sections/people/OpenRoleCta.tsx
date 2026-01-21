import Button from '@/components/globals/Button';
import { FC } from 'react';
import { BlockData, HeadingProps } from '../home/types';
import { parseHighlights } from '@/utils/utils';

export interface OpenRoleCtaData extends HeadingProps {
  button_text?: string;
  button_url?: string;
  highlight_text?: string;
  title_two?: string;
}

export type OpenRoleCtaProps = BlockData<OpenRoleCtaData>;

const OpenRoleCta: FC<OpenRoleCtaProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    button_text = '',
    button_url = '',
    subtitle = '',
    title = '',
  } = content;

  const parsedTitle = parseHighlights(title);

  return (
    <section>
      <div className="container-custom">
        <div className="w-full flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between pt-[88px] pb-32">
          <h2
            className="text-[36px] md:text-[44px] xl:text-[56px] w-full font-bold leading-[1.28] text-black max-w-[780px]"
            dangerouslySetInnerHTML={{
              __html:
                parsedTitle +
                (subtitle
                  ? ` <span class="text-pulse-pink-600">${subtitle}</span>`
                  : ''),
            }}
          />
          {button_text && button_url && (
            <Button href={button_url} variant="secondary">
              {button_text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default OpenRoleCta;
