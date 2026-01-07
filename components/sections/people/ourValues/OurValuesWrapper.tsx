import Image from 'next/image';

export interface OurValuesHeading {
  title: string;
  highlight: string;
}

export interface OurValueCard {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
  bgColor: string;
}

export interface OurValuesWrapperProps {
  heading: OurValuesHeading;
  values: OurValueCard[];
}

function OurValuesWrapper({ heading, values }: OurValuesWrapperProps) {
  return (
    <section>
      <div className="container-custom">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 items-center gap-6 py-28 xl:grid-cols-3 xl:py-32">
          {/* Heading */}
          <div className="w-full">
            <h2 className="w-full text-[56px] font-bold leading-[1.28] my-8">
              {heading.title}{' '}
              <span className="text-pulse-pink-600">{heading.highlight}</span>
            </h2>
          </div>

          {/* Cards */}
          {values.map((value, index) => (
            <div
              key={index}
              className="w-full flex flex-col rounded-2xl gap-10 p-10 md:p-6 lg:p-10"
              style={{ backgroundColor: value.bgColor }}
            >
              <Image
                src={value.icon}
                className="aspect-70/70 object-contain"
                width={70}
                height={70}
                alt={value.iconAlt}
              />

              <div className="w-full flex flex-col gap-6">
                <h3 className="text-black text-[32px] font-semibold leading-normal">
                  {value.title}
                </h3>
                <p className="text-black text-xl font-normal leading-normal">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurValuesWrapper;
