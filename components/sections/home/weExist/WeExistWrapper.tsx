import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
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
          <div className="flex flex-col justify-center xl:pr-14">
            <h3 className="text-[38px] font-bold leading-[1.26] xl:text-[56px] xl:leading-[1.28] text-black mb-2">
              {title}
            </h3>
            <h4 className="text-2xl font-semibold leading-normal text-pulse-pink-600 mb-10 xl:leading-[1.33]">
              {subtitle}
            </h4>

            <p className="text-xl font-normal leading-[1.33] text-black mb-8">
              {description}
            </p>

            <Link
              href={linkHref}
              className="text-base self-start inline-flex justify-center items-center gap-2 font-normal leading-[1.37] text-black"
            >
              <ArrowRightIcon className="text-pulse-pink-700" />
              <span>{linkLabel}</span>
            </Link>
          </div>
          {/* Right Image */}
          <div className="w-full relative rounded-3xl my-auto overflow-hidden aspect-380/240  md:w-full xl:aspect-680/428">
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
          className="absolute -bottom-[85px] z-10 lg:w-[640px] lg:-right-[460px] lg:-bottom-[155px] -right-[130px] aspect-423/415 w-[423px]"
        />
      )}
    </section>
  );
}

export default WeExistWrapper;
