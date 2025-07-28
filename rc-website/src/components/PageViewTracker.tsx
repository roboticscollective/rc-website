"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackPageView } from '@/lib/analytics';

export const PageViewTracker: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Track page view when pathname changes
    if (pathname) {
      trackPageView(window.location.href, document.title);
    }
  }, [pathname]);

  return null;
};