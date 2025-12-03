import ButtonRoundIcon from '@/components/icons/ButtonRoundIcon';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <section>
      <div className="h-[90dvh] w-full relative overflow-hidden z-40 rounded-bl-[64px] bg-[url('/home/hero/bg.svg')] bg-no-repeat bg-cover flex flex-col items-center justify-center">
        <div className="container-custom">
          <div className="w-full z-50 flex flex-col mt-[72px] md:mt-[74px] lg:mt-24">
            <h1 className="text-[clamp(64px,15vw,80px)] sm:text-[52px] max-w-[580px] sm:mb-10 mb-[88px] gap-x-4 flex flex-row items-center flex-wrap font-bold leading-tight text-white">
              <span>Know</span>
              <span>what</span>
              <span>your</span>
              <span className="h-2 w-[184px] bg-linear-[90deg] from-pulse-pink-700/0 to-pulse-pink-700" />
              <span>customers</span>
              <span>want</span>
            </h1>
            <div className="flex flex-col max-w-[400px] mb-12 gap-6">
              <p className="text-xl font-normal text-white leading-[1.30]">
                We get people – what they do, why they do it, and what that
                means for your business.
              </p>
              <p className="text-base font-normal text-pulse-pink-200 leading-[1.37]">
                We decode behaviour so you can lead with confidence, not
                assumptions. No fluff. Just sharp insights that drive action.
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex w-fit gap-2 justify-start items-center py-2 pr-4 text-base font-semibold leading-[1.37] text-white"
            >
              <ButtonRoundIcon />
              <span>Why we exist</span>
            </Link>
          </div>
          <div className="absolute -right-20 top-[72px] h-[472px] aspect-[415/872px]">
            <Image
              src="/home/hero/bg-logo.png"
              width={415}
              height={872}
              alt="Platformone Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
