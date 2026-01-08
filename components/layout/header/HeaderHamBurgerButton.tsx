'use client';

import {
  HamburgerCrossIcon,
  HamburgerIcon,
} from '@/components/icons/HamburgerIcon';
import { cn } from '@/utils/utils';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

interface HeaderHamBurgerButtonProps {
  onMenuClick?: () => void;
  open: boolean;
  scrolled: boolean;
}

function HeaderHamBurgerButton({
  onMenuClick,
  open,
  scrolled,
}: HeaderHamBurgerButtonProps) {
  const containerRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLSpanElement>(null);
  const crossRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!crossRef.current) return;

      gsap.set(crossRef.current, {
        opacity: 0,
        rotate: -90,
        scale: 0.8,
      });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      if (!hamburgerRef.current || !crossRef.current) return;

      if (open) {
        gsap.to(hamburgerRef.current, {
          opacity: 0,
          rotate: 90,
          scale: 0.8,
          duration: 0.25,
          ease: 'power2.out',
        });

        gsap.to(crossRef.current, {
          opacity: 1,
          rotate: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
          delay: 0.05,
        });
      } else {
        gsap.to(crossRef.current, {
          opacity: 0,
          rotate: -90,
          scale: 0.8,
          duration: 0.25,
          ease: 'power2.out',
        });

        gsap.to(hamburgerRef.current, {
          opacity: 1,
          rotate: 0,
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
          delay: 0.05,
        });
      }
    },
    {
      dependencies: [open],
      scope: containerRef,
    }
  );

  return (
    <button
      ref={containerRef}
      type="button"
      onClick={onMenuClick}
      className={cn(
        'relative p-2 lg:hidden cursor-pointer',
        scrolled || open
          ? 'text-mulberry-900 hover:text-mulberry-950 '
          : 'text-white hover:text-pulse-pink-100'
      )}
    >
      <span
        ref={hamburgerRef}
        className="absolute inset-0 flex items-center justify-center"
      >
        <HamburgerIcon />
      </span>

      <span
        ref={crossRef}
        className={cn(
          'absolute inset-0 flex items-center justify-center',
          !open && 'hidden'
        )}
      >
        <HamburgerCrossIcon />
      </span>
    </button>
  );
}

export default HeaderHamBurgerButton;
