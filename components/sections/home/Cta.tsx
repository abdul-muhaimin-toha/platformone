'use client';

import Button from '@/components/globals/Button';
import { cn, parseHighlights } from '@/utils/utils';

import { BlockData, ButtonProps, HeadingProps } from './types';

export interface CtaData extends ButtonProps, HeadingProps {
  select_version?: 'v1' | 'v2';
}

export type CtaProps = BlockData<CtaData>;

const Cta: React.FC<CtaProps> = ({ data }) => {
  const content = data?.data ?? {};

  const {
    btn_text = '',
    btn_url = '',
    open_in_new_tab = false,
    subtitle = '',
    title = '',
    select_version = 'v1',
  } = content;

  return (
    <section className="bg-linear-90 from-[#E9C4DD00]/0 to-[#E9C4DD99]/60">
      <div className="container-custom">
        <div
          data-aos="fade-up"
          className="w-full flex flex-col gap-10 py-24 md:flex-row md:items-center md:justify-between"
        >
          <h2
            className={cn(
              ' flex w-full flex-col font-bold leading-[1.33]',
              select_version === 'v1'
                ? 'text-[56px]'
                : 'text-4xl  lg:text-[56px]',
            )}
          >
            {title && (
              <span
                className="text-[#4D2B42]"
                dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
              />
            )}
            {subtitle && (
              <span
                className="text-pulse-pink-600"
                dangerouslySetInnerHTML={{ __html: parseHighlights(subtitle) }}
              />
            )}
          </h2>

          {btn_text && btn_url && (
            <Button
              href={btn_url}
              variant="primary-arrow"
              target={open_in_new_tab ? '_blank' : undefined}
            >
              {btn_text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cta;
