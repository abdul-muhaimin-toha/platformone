import TextRevealDescription from "./TextRevealDescription";

interface Props {
  title: string;
  description: string;
}

export default function WhatWeDoHeading({ title, description }: Props) {
  return (
    <div className="container-custom">
      <div className="w-full flex flex-col gap-14 max-w-[600px] lg:max-w-max">
        <div className="flex items-left flex-col justify-center text-left gap-10 lg:flex-row lg:items-center xl:gap-36">
          <h2 className="text-[38px] lg:text-[56px] lg:leading-[1.28] lg:w-full font-bold leading-[1.26] text-black">
            {title}
          </h2>
          <TextRevealDescription text={description} />
        </div>
        <h4 className="text-[32px] lg:hidden font-semibold leading-tight text-mulberry-900">
          What we do
        </h4>
      </div>
    </div>
  );
}
