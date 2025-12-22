'use client';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { cn } from '@/lib/utils';

interface Props {
  text: string;
  className?: string;
}

function TextRevealDescription({ text, className }: Props) {
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    if (!descriptionRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const words = descriptionRef.current.innerText.split(' ').map((word) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.color = '#B3ADAE';
      span.style.opacity = '1';
      span.style.display = 'inline-block';
      span.style.whiteSpace = 'pre';
      return span;
    });

    descriptionRef.current.innerHTML = '';
    words.forEach((span) => descriptionRef.current!.appendChild(span));

    gsap.to(words, {
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: 'top 90%',
        end: 'bottom 40%',
        scrub: true,
      },
      opacity: 1,
      color: '#160E11',
      stagger: 0.08,
      ease: 'power2.out',
    });
  });

  return (
    <p
      ref={descriptionRef}
      className={cn(
        'text-2xl font-normal max-w-xl lg:w-full leading-[1.33] text-black',
        className
      )}
    >
      {text}
    </p>
  );
}

export default TextRevealDescription;
