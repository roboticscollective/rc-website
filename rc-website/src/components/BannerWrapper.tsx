"use client";

import { EventNotification } from "@/components/EventNotification";
import { useBanner } from "@/contexts/BannerContext";
import type { EventData } from "@/components/EventNotification";

interface BannerWrapperProps {
  event: EventData;
  showDaysThreshold?: number;
}

export const BannerWrapper = ({ event, showDaysThreshold = 365 }: BannerWrapperProps) => {
  const { setBannerDismissed } = useBanner();

  return (
    <EventNotification 
      event={event}
      variant="banner"
      showDaysThreshold={showDaysThreshold}
      onDismiss={() => setBannerDismissed(true)}
    />
  );
};