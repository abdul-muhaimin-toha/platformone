'use client';

import { FC, useEffect, useRef, useState, useMemo } from 'react';
import CountUp from 'react-countup';
import { CounterItem } from './CounterWrapper';

interface CounterCardProps {
  counter: CounterItem;
}

const CounterCard: FC<CounterCardProps> = ({ counter }) => {
  const [isInView, setIsInView] = useState(false);
  const countUpRef = useRef<HTMLHeadingElement | null>(null);

  const { counter_title, counter_description } = counter;

  // Safe parsing of the counter string (e.g. "87%", "80", "$500")
  const { prefix, number, suffix, decimals } = useMemo(() => {
    const raw = counter_title || '0';
    // Regex matches: (prefix)(number with optional decimal)(suffix)
    const match = raw.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);

    if (match) {
      const numStr = match[2];
      const hasDecimal = numStr.includes('.');
      return {
        prefix: match[1] || '',
        number: parseFloat(numStr),
        suffix: match[3] || '',
        decimals: hasDecimal ? numStr.split('.')[1].length : 0,
      };
    }
    return { prefix: '', number: 0, suffix: '', decimals: 0 };
  }, [counter_title]);

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
            start={0}
            end={number}
            duration={4}
            decimals={decimals}
            decimal="."
            prefix={prefix}
            suffix={suffix || "%"}
          />
        ) : (
          '0'
        )}
      </h2>

      <p className="text-xl md:text-sm lg:text-xl xl:text-2xl text-mulberry-900 font-normal leading-[1.33]">
        {counter_description}
      </p>
    </div>
  );
};

export default CounterCard;
