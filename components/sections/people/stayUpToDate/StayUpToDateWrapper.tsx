'use client'

import StayUpToDateHeader from './StayUpToDateHeader';
import StayUpToDateImages from './StayUpToDateImages';
import { FC, useState, useEffect, useRef } from 'react';
import { BlockData, HeadingProps } from '../../home/types';
import Script from 'next/script';

export interface StayUpToDateItem {
  feature_image: string;
}

export interface StayUpToDateData extends HeadingProps {
  up_to_date?: StayUpToDateItem[];
}

export type StayUpToDateWrapperProps = BlockData<StayUpToDateData>;

const StayUpToDateWrapper: FC<StayUpToDateWrapperProps> = ({ data }) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const content = data?.data;
  if (!content) return null;

  const { title = '', subtitle = '', short_description = '' } = content;

  const elfsightAppClass = process.env.NEXT_PUBLIC_ELFSIGHT_APP_CLASS;
  const elfsightAppScript = process.env.NEXT_PUBLIC_ELFSIGHT_APP_SCRIPT;

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Delay mounting by 500ms to allow scroll momentum to settle
          timer = setTimeout(() => {
            setIsInView(true);
          }, 500);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-mulberry-900 min-h-[600px]">
      <div className="container-custom">
        <div className="flex flex-col w-full py-20 gap-14">
          <StayUpToDateHeader
            title={title}
            subtitle={subtitle}
            description={short_description}
          />
          
          {isInView && elfsightAppScript && (
            <Script
              src={elfsightAppScript}
              strategy="afterInteractive" 
            />
          )}

          {isInView && elfsightAppClass && (
            <div 
              className={elfsightAppClass} 
              data-lenis-prevent // Prevents scroll hijacking conflicts
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default StayUpToDateWrapper;
