import { cn } from '@/utils/utils';
import Image from 'next/image';
import { FC } from 'react';

interface CaseStudiesHeroProps {
  version?: 'v1' | 'v2';
  title: string;
  subtitle: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
}

const CaseStudiesHero: FC<CaseStudiesHeroProps> = ({
  version = 'v1',
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
}) => {
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
                    version == 'v1'
                      ? 'text-[56px] lg:text-[64px]'
                      : 'text-[56px] md:text-[38px] lg:text-[54px] xl:text-[64px]'
                  )}
                >
                  <span>{title}</span>
                  <span className="text-pulse-pink-600">{subtitle}</span>
                </h1>

                {description && (
                  <p className="text-xl font-normal text-white mt-10">
                    {description}
                  </p>
                )}
              </div>

              {/* Image + SVG */}
              <div
                className={cn(
                  'w-full relative md:max-w-[516px] aspect-380/244',
                  version == 'v1'
                    ? 'md:max-w-[516px] lg:aspect-516/327'
                    : 'md:max-w-[434px] lg:aspect-434/387'
                )}
              >
                <Image
                  fill
                  src={imageSrc}
                  alt={imageAlt}
                  className="object-cover z-20 rounded-3xl"
                />

                {version == 'v1' && (
                  <svg
                    className="absolute -bottom-[43px] -right-[120px] w-[450px] h-[94px] sm:-right-16 md:-right-32 md:-bottom-[60px] lg:w-[600px] lg:h-[122px] lg:-bottom-[91px] lg:-right-[156px] 2xl:-right-10 2xl:w-[500px]"
                    viewBox="0 0 295 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M450 0H0V94.64H450V0Z"
                      fill="url(#paint0_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="0"
                        y1="47.3184"
                        x2="450"
                        y2="47.3184"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#E13FAB" />
                        <stop offset="1" stopColor="#EB335B" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesHero;
