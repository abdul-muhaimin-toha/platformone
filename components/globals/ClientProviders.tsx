'use client';

import React from 'react';
import ClarityProvider from './ClarityProvider';
import ReCaptchaProvider from './ReCaptchaProvider';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ReCaptchaProvider>
      <ClarityProvider />
      {children}
    </ReCaptchaProvider>
  );
}
