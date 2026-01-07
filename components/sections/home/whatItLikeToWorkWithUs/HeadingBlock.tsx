import { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const HeadingBlock: FC<Props> = ({ title, description }) => (
  <div className="container-custom">
    <div
      data-aos="fade-up"
      className="flex items-left flex-col justify-center lg:flex-row text-left gap-10 md:max-w-[600px] xl:gap-36 lg:max-w-max lg:items-center"
    >
      <h2 className="text-[38px] xl:text-[56px] xl:leading-[1.28] lg:w-1/2 font-bold leading-[1.26] text-black">
        {title}
      </h2>
      <p className="text-xl font-normal leading-[100%l lg:w-1/2 text-black">
        {description}
      </p>
    </div>
  </div>
);

export default HeadingBlock;
