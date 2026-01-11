import Image from 'next/image';
import { FC } from 'react';

export interface WhatWeGetCardProps {
  icon: string;
  card_title: string;
  card_description?: string;
  _id: string;
}

const WhatWeGetCard: FC<WhatWeGetCardProps> = ({
  icon,
  card_title,
  card_description,
}) => {
  return (
    <div className="flex flex-col w-full bg-white p-8 rounded-2xl">
      {icon && (
        <div className="size-[72px] flex items-center justify-center bg-[#E8006D14] rounded-full mb-10">
          <Image
            src={icon}
            width={40}
            height={40}
            className="w-full h-full aspect-square"
            alt={card_title}
          />
        </div>
      )}
      {card_title && (
        <h3 className="text-[32px] leading-tight font-semibold text-black">
          {card_title}
        </h3>
      )}
      {card_description && (
        <p className="text-black text-xl font-normal leading-[1.30] mt-4">
          {card_description}
        </p>
      )}
    </div>
  );
};

export default WhatWeGetCard;
