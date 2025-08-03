"use client";

import { EventNotification } from "@/components/EventNotification";
import { useBanner } from "@/contexts/BannerContext";
import type { EventData } from "@/components/EventNotification";
import type { WebsiteSettings } from "@/lib/sanity";

interface BannerWrapperProps {
  event: EventData | null;
  settings: WebsiteSettings | null;
  showDaysThreshold?: number;
}

export const BannerWrapper = ({ event, settings, showDaysThreshold = 365 }: BannerWrapperProps) => {
  const { setBannerDismissed } = useBanner();

  // Check global settings first
  if (!settings?.eventControls?.showEventBanner || !event) {
    return null;
  }

  return (
    <EventNotification 
      event={event}
      variant="banner"
      showDaysThreshold={showDaysThreshold}
      onDismiss={() => setBannerDismissed(true)}
    />
  );
};