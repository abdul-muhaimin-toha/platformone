'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Clarity from '@microsoft/clarity';

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

export default function ClarityProvider() {
  const pathname = usePathname();

  // init once
  useEffect(() => {
    if (!CLARITY_ID) return;

    Clarity.init(CLARITY_ID);
  }, []);

  // track SPA route changes
  useEffect(() => {
    if (!CLARITY_ID) return;

    Clarity.setTag('page', pathname);
  }, [pathname]);

  return null;
}
