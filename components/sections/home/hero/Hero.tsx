import HeroClient from './HeroClient';

export interface HeroProps {
  bgImage: string;
  titleSpans: string[];
  description: string;
  subDescription: string;
  buttonLabel: string;
}

export default function Hero(props: HeroProps) {
  return (
    <section>
      <div
        className="h-[95dvh] min-h-[872px] md:min-h-auto w-full relative overflow-hidden z-40 rounded-bl-[64px] bg-no-repeat bg-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${props.bgImage})` }}
      >
        <div className="container-custom">
          <HeroClient {...props} />
        </div>
      </div>
    </section>
  );
}
