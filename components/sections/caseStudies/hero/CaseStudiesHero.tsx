import { cn } from '@/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import { BlockData, HeadingProps } from '../../home/types';
import CaseStudiesHeroSvg from './CaseStudiesHeroSvg';

export interface CaseStudiesHeroData extends HeadingProps {
  title_one?: string;
  title_two?: string;
  crb_select?: 'version-one' | 'version-two';
  feature_image?: string;
}

export type CaseStudiesHeroProps = BlockData<CaseStudiesHeroData>;

const CaseStudiesHero: FC<CaseStudiesHeroProps> = ({ data }) => {
  const content = data?.data;
  if (!content) return null;

  const {
    short_description = '',
    title_one = '',
    title_two = '',
    crb_select = 'version-one',
    feature_image = '',
  } = content;

  return (
    <section className="bg-white">
      <div className="bg-[#3E122F] rounded-bl-[64px] overflow-hidden">
        <div
          className="w-full relative bg-no-repeat bg-cover"
          style={{ backgroundImage: `url('/home/hero/bg.svg')` }}
        >
          <div className="container-custom">
            <div
              data-aos="fade-up"
              className="w-full flex flex-col z-50 gap-20 md:flex-row md:gap-8 md:pb-[91px] md:justify-between pt-[182px] pb-8 lg:pb-[91px] lg:pt-[166px] items-center justify-center"
            >
              {/* Text Content */}
              <div className="w-full flex flex-col self-start md:self-center sm:max-w-[578px]">
                <h1
                  className={cn(
                    'inline-flex flex-col font-bold leading-[1.28]  lg:leading-tight text-white',
                    crb_select == 'version-one'
                      ? 'text-[56px] lg:text-[64px]'
                      : 'text-[56px] md:text-[38px] lg:text-[54px] xl:text-[64px]',
                  )}
                >
                  <span>{title_one}</span>
                  <span className="text-pulse-pink-600">{title_two}</span>
                </h1>

                {short_description && (
                  <p className="text-xl font-normal text-white mt-10">
                    {short_description}
                  </p>
                )}
              </div>

              {/* Image + SVG */}
              {feature_image && (
                <div
                  className={cn(
                    'w-full relative md:max-w-[516px] aspect-380/244',
                    crb_select == 'version-one'
                      ? 'md:max-w-[516px] lg:aspect-516/327'
                      : 'md:max-w-[434px] lg:aspect-434/387',
                  )}
                >
                  <Image
                    fill
                    src={feature_image}
                    alt={title_one}
                    className="object-cover z-20 rounded-3xl"
                  />

                  {crb_select == 'version-one' && <CaseStudiesHeroSvg />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
