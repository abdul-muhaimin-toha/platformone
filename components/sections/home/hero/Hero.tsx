import HeroClient from './HeroClient';

export interface HeroProps {
  bgImage: string;
  titleSpans: string[];
  description: string;
  subDescription: string;
  buttonLabel: string;
}

export default function Hero({ data }) {
  console.log(data);
  return (
    <section>
      <div className="bg-[#3E122F] rounded-bl-[64px]">
        {/* <HeroClient {...props} /> */}
      </div>
    </section>
  );
}
