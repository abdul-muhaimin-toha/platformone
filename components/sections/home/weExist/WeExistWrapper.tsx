import Button from '@/components/globals/Button';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export interface WeExistProps {
  title: string;
  subtitle: string;
  description: string;
  linkHref: string;
  linkLabel: string;
  imageSrc: string;
  backgroundImageSrc?: string; // optional
}

function WeExistWrapper({
  title,
  subtitle,
  description,
  linkHref,
  linkLabel,
  imageSrc,
  backgroundImageSrc,
}: WeExistProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-custom">
        <div className="w-full z-50 grid gap-16 grid-cols-1 md:grid-cols-2 md:gap-10 py-32 xl:pb-[200px] xl:pt-[235px] xl:grid-cols-[632px_1fr]">
          {/* Left Content */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center xl:pr-14"
          >
            <h3 className="text-[38px] font-bold leading-[1.26] xl:text-[56px] xl:leading-[1.28] text-black mb-2">
              {title}
            </h3>
            <h4 className="text-2xl font-semibold leading-normal text-pulse-pink-600 mb-10 xl:leading-[1.33]">
              {subtitle}
            </h4>

            <p className="text-xl font-normal leading-[1.33] text-black mb-8">
              {description}
            </p>
            <Button href={linkHref} variant="tertiary">
              {linkLabel}
            </Button>
          </div>
          {/* Right Image */}
          <div
            data-aos="fade-up"
            className="w-full relative rounded-3xl my-auto overflow-hidden aspect-380/240  md:w-full xl:aspect-680/428"
          >
            <Image
              src={imageSrc}
              fill
              className="object-cover"
              alt="We exist image"
            />
          </div>
        </div>
      </div>
      {backgroundImageSrc && (
        <Image
          src={backgroundImageSrc}
          width={640}
          height={630}
          alt=""
          className="absolute -bottom-[85px] z-10 lg:w-[640px] lg:-right-[460px] lg:-bottom-[155px] -right-72 aspect-423/415 w-[423px] animate-[float-rotate_6s_ease-in-out_infinite]"
        />
      )}
    </section>
  );
}

export default WeExistWrapper;
