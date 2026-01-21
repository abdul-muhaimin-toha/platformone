import Image from 'next/image';
import { parseHighlights } from '@/utils/utils';

export interface HowWeDoItCardProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
}

function HowWeDoItCard({
  title,
  description,
  image,
}: HowWeDoItCardProps) {
  return (
    <div className="flex flex-col w-full">
      <h2
        className="text-[34px] sm:text-[36px] md:text-[38px] lg:text-[56px] font-bold leading-[1.28] text-black pt-[88px] pb-14"
        dangerouslySetInnerHTML={{ __html: parseHighlights(title) }}
      />
      <div className="w-full flex z-20 gap-16 md:gap-6 lg:gap-16 md:justify-between pt-14 pb-32 items-start md:items-center justify-center flex-col md:flex-row">
        <div className="w-full flex flex-col gap-10">
          {description && (
            <p
              className="text-2xl md:text-xl xl:text-2xl font-normal text-black leading-[1.33]"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>

        <div className="w-full relative aspect-644/423 lg:max-w-[644px]">
          <Image
            fill
            src={image.src}
            alt={image.alt}
            className="object-cover w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HowWeDoItCard;
