"use client";

import { ReactNode } from 'react';
import { trackConversion, trackEngagement, trackExternalLink } from '@/lib/analytics';

interface AnalyticsWrapperProps {
  children: ReactNode;
  onClick?: () => void;
  trackEvent?: {
    type: 'conversion' | 'engagement' | 'external_link';
    eventName: string;
    parameters?: Record<string, any>;
  };
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export const AnalyticsWrapper: React.FC<AnalyticsWrapperProps> = ({
  children,
  onClick,
  trackEvent,
  ...props
}) => {
  const handleClick = () => {
    if (trackEvent) {
      switch (trackEvent.type) {
        case 'conversion':
          trackConversion(trackEvent.eventName, trackEvent.parameters);
          break;
        case 'engagement':
          trackEngagement(trackEvent.eventName, trackEvent.parameters);
          break;
        case 'external_link':
          trackExternalLink(props.href || '', trackEvent.parameters?.linkText);
          break;
      }
    }
    onClick?.();
  };

  if (props.href) {
    return (
      <a {...props} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <div {...props} onClick={handleClick}>
      {children}
    </div>
  );
};