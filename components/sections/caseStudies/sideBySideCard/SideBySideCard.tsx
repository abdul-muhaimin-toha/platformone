import Image from 'next/image';
import { FC } from 'react';
import { parseHighlights } from '@/utils/utils';

export interface SideBySideCardProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  avatarSrc: string;
  avatarAlt: string;
  name: string;
  role: string;
}

const SideBySideCard: FC<SideBySideCardProps> = ({
  imageSrc,
  imageAlt,
  description,
  avatarSrc,
  avatarAlt,
  name,
  role,
}) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-pulse-pink-50 gap-10 flex flex-col lg:flex-row lg:items-center lg:gap-7 xl:gap-24 md:p-14 rounded-[40px] p-6"
    >
      <Image
        src={imageSrc}
        alt={imageAlt.replace(/<[^>]*>/g, '')}
        width={332}
        height={232}
        className="w-full z-20 aspect-332/232 lg:max-w-[468px] lg:aspect-468/376 object-cover rounded-3xl"
      />

      <div className="flex relative flex-col w-full gap-10 xl:gap-16">
        {/* SVG Decoration */}
        <svg
          className="absolute z-0 -left-3.5 -top-11"
          width={100}
          height={78}
          viewBox="0 0 100 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.7628 0L42.5876 11.9582C33.9623 16.5784 23.9892 27.993 21.5633 37.777C22.372 37.2335 24.7978 36.9617 26.9542 36.9617C37.1968 36.9617 45.283 44.8432 45.283 56.5296C45.283 68.216 35.5795 78 23.9892 78C11.3208 78 0 67.9443 0 50.2788C0 29.8955 11.0512 11.6864 27.7628 0ZM82.4798 0L97.5741 11.9582C88.9488 16.5784 78.7062 27.993 76.5499 37.777C77.3585 37.2335 79.7844 36.9617 81.9407 36.9617C91.9138 36.9617 100 44.8432 100 56.5296C100 68.216 90.566 78 78.7062 78C66.0378 78 54.9865 67.9443 54.9865 50.2788C54.9865 29.8955 65.7682 11.6864 82.4798 0Z"
            fill="#FFE4F4"
          />
        </svg>

        <p
          className="text-black z-10 text-xl xl:text-2xl leading-[1.3] xl:leading-[1.33] font-normal"
          dangerouslySetInnerHTML={{ __html: parseHighlights(description) }}
        />

        <div className="flex w-full z-10 items-center gap-4">
          <div className="flex items-center w-16 shrink-0 justify-center border-[#8C2858] border rounded-full">
            <Image
              src={avatarSrc}
              width={64}
              height={64}
              className="aspect-square w-full rounded-full"
              alt={avatarAlt}
            />
          </div>
          <div className="flex flex-col gap-2 text-black">
            <p className="text-xl font-semibold leading-[1.30] text-[#8C2858]">
              {name}
            </p>
            <p className="text-base font-normal leading-[1.37]">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBySideCard;
