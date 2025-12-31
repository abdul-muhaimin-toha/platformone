import { FC, ReactNode } from 'react';

export interface WhatWeGetCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
}

const WhatWeGetCard: FC<WhatWeGetCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col w-full bg-white p-8 rounded-2xl">
      <div className="size-[72px] flex items-center justify-center bg-[#E8006D14] rounded-full mb-10">
        {icon}
      </div>
      <h3 className="text-[32px] leading-tight font-semibold text-black">
        {title}
      </h3>
      {description && (
        <p className="text-black text-xl font-normal leading-[1.30] mt-4">
          {description}
        </p>
      )}
    </div>
  );
};

export default WhatWeGetCard;
