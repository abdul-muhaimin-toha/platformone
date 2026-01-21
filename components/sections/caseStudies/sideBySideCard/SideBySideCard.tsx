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
        {/* ... (svg content) */}

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
