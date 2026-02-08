'use client';

import Button from '@/components/globals/Button';

interface TeamHeadingProps {
  title: string;
  subtitle: string;
  short_description: string;
  btntext: string;
  btnurl: string;
}

export default function TeamHeading({
  title,
  subtitle,
  short_description,
  btntext,
  btnurl,
}: TeamHeadingProps) {
  return (
    <div
      data-aos="fade-up"
      className="flex items-left flex-col justify-center lg:flex-row text-left gap-10 md:max-w-[600px] xl:gap-36 lg:max-w-max lg:items-center lg:justify-between"
    >
      <div className="flex flex-col lg:w-[632px] gap-2">
        {title && (
          <h2 className="text-[56px] xl:text-[56px] xl:leading-[1.28] w-full font-bold leading-[1.28] text-white">
            {title}
          </h2>
        )}
        {subtitle && (
          <h3 className="text-2xl font-semibold leading-[1.33] text-pulse-pink-600">
            {subtitle}
          </h3>
        )}
      </div>

      <div className="flex flex-col lg:max-w-xl lg:w-1/2 gap-8">
        {short_description && (
          <p className="text-xl font-normal leading-[27px] w-full text-pulse-pink-200">
            {short_description}
          </p>
        )}
        {btntext && btnurl && (
          <Button href={btnurl} variant="secondary">
            {btntext}
          </Button>
        )}
      </div>
    </div>
  );
}
