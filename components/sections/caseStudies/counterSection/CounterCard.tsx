'use client';

import { FC, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { CounterItem } from './CounterWrapper';

interface CounterCardProps {
  counter: CounterItem;
}

const CounterCard: FC<CounterCardProps> = ({ counter }) => {
  const [isInView, setIsInView] = useState(false);
  const countUpRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const el = countUpRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div className="flex flex-col w-full gap-2">
      <h2
        ref={countUpRef}
        className="text-[56px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-tight font-bold text-pulse-pink-600"
      >
        {isInView ? (
          <CountUp
            end={counter.counterNumber}
            duration={4}
            decimals={counter.decimal ?? 0}
            decimal="."
            suffix={counter.suffix}
          />
        ) : (
          '0'
        )}
      </h2>

      <p className="text-xl md:text-sm lg:text-xl xl:text-2xl text-mulberry-900 font-normal leading-[1.33]">
        {counter.counterDetails}
      </p>
    </div>
  );
};

export default CounterCard;
