'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TeamCenterpiece from './TeamCenterpiece';
import TeamFigure from './TeamFigure';

export default function TeamCylinder({
  peopleImages,
  centerpieceImage,
}: {
  peopleImages: string[];
  centerpieceImage: string;
}) {
  const cylinderRef = useRef<HTMLDivElement | null>(null);
  const centerpieceRef = useRef<HTMLDivElement | null>(null);
  const figureRefs = useRef<HTMLElement[]>([]);

  const registerFigureRef = (index: number, el: HTMLElement | null) => {
    if (el) figureRefs.current[index] = el;
  };

  // Rotating Cylinder
  useGSAP(() => {
    const elements = figureRefs.current;
    if (!elements.length) return;

    const radius = 744;
    const yStep = 90;
    const speed = 0.005;
    const total = elements.length;

    elements.forEach((el, i) => {
      const angle = (i / total) * Math.PI * 2;
      const y = (i % 3) * yStep - yStep;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      gsap.set(el, { x, y, z, rotationY: (angle * 180) / Math.PI + 180 });
    });

    let rotation = 0;
    const tick = () => {
      rotation += speed;
      elements.forEach((el, i) => {
        const baseAngle = (i / total) * Math.PI * 2;
        const y = (i % 3) * yStep - yStep;
        const angle = baseAngle + rotation;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
        gsap.set(el, { x, y, z, rotationY: (angle * 180) / Math.PI + 180 });
      });
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, []);

  // Mouse movement effect
  useEffect(() => {
    const cylinderEl = cylinderRef.current;
    const centerpieceEl = centerpieceRef.current;
    if (!cylinderEl || !centerpieceEl) return;

    const ROTATION_RANGE = 8;
    const MOVE_RANGE = 20;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = cylinderEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const normX = x / rect.width - 0.5;
      const normY = y / rect.height - 0.5;

      const rotateX = -normY * ROTATION_RANGE;
      const rotateY = normX * ROTATION_RANGE;

      const moveX = normX * MOVE_RANGE;
      const moveY = normY * MOVE_RANGE;

      centerpieceEl.style.transform = `translate3d(${moveX}px, ${moveY}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      centerpieceEl.style.transform =
        'translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
    };

    cylinderEl.addEventListener('mousemove', handleMouseMove);
    cylinderEl.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cylinderEl.removeEventListener('mousemove', handleMouseMove);
      cylinderEl.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="overflow-hidden flex justify-center w-full items-center">
      <div
        ref={cylinderRef}
        className="w-full h-[400px] pb-[200px] md:h-[800px] md:pb-[200px] scale-50 md:scale-100 flex justify-center items-center lg:perspective-[1000px] md:perspective-[2000px]"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
            transform:
              'rotateX(8deg) rotateY(10deg) translateZ(-600px) translateY(-120px)',
          }}
        >
          <TeamCenterpiece image={centerpieceImage} refObj={centerpieceRef} />

          <div
            className="relative left-1/2 top-1/2"
            style={{
              transform: 'translate(-50%, -50%) rotate(3deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            {peopleImages.map((src, i) => (
              <TeamFigure
                key={i}
                src={src}
                index={i}
                register={registerFigureRef}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
