"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackScrollMilestone } from '@/lib/analytics';

export const ScrollTracker: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const trackedMilestones = new Set<number>();

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrollPercent = Math.round((scrollTop / docHeight) * 100);

          // Track milestones at 25%, 50%, 75%, and 90%
          const milestones = [25, 50, 75, 90];
          
          for (const milestone of milestones) {
            if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
              trackScrollMilestone(milestone, pathname);
              trackedMilestones.add(milestone);
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Reset tracked milestones when pathname changes
    trackedMilestones.clear();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return null;
};