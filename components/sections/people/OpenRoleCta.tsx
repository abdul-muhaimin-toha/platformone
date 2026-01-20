import Button from '@/components/globals/Button';
import { FC } from 'react';
import { BlockData, ButtonProps, HeadingProps } from '../home/types';

export interface OpenRoleCtaData extends ButtonProps, HeadingProps {
  highlight_text?: string;
  title_two?: string;
}

export type OpenRoleCtaProps = BlockData<OpenRoleCtaData>;

const OpenRoleCta: FC<OpenRoleCtaProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    title = '',
    highlight_text = '',
    title_two = '',
    btn_text = '',
    btn_url = '',
    open_in_new_tab = false,
  } = content;
  return (
    <section>
      <div className="container-custom">
        <div className="w-full flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between pt-[88px] pb-32">
          <h2 className="text-[36px] md:text-[44px] xl:text-[56px] w-full font-bold leading-[1.28] text-black max-w-[780px]">
            {title} <span className="text-pulse-pink-600">{highlight_text}</span>{' '}
            {title_two}
          </h2>
          {btn_text && btn_url && (
            <Button
              href={btn_url}
              variant="secondary"
              target={open_in_new_tab ? '_blank' : undefined}
            >
              {btn_text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

export default OpenRoleCta;
