"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Types
export interface EventData {
  id: string;
  title: string;
  date: Date;
  time: {
    start: string;
    end: string;
  };
  location: {
    name: string;
    city: string;
    country: string;
    mapUrl?: string;
  };
  registrationUrl: string;
  description?: string;
}

export interface EventNotificationProps {
  event: EventData;
  variant?: "badge" | "banner" | "countdown";
  showDaysThreshold?: number; // Show notification only if event is within X days
  className?: string;
  onDismiss?: () => void;
}

export interface CountdownTimeProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Utility functions
export const calculateTimeUntilEvent = (
  eventDate: Date
): CountdownTimeProps | null => {
  const now = new Date();
  const timeDiff = eventDate.getTime() - now.getTime();

  if (timeDiff <= 0) return null;

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export const formatEventDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export const shouldShowNotification = (
  eventDate: Date,
  thresholdDays: number
): boolean => {
  const now = new Date();
  const timeDiff = eventDate.getTime() - now.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // Show for events up to the threshold days away
  return daysDiff > 0 && daysDiff <= thresholdDays;
};

// Badge Variant Component
const EventBadge: React.FC<EventNotificationProps> = ({ event, onDismiss }) => {
  const timeUntil = calculateTimeUntilEvent(event.date);

  if (!timeUntil) return null;

  return (
    <Link
      href="/meetup"
      className="relative group event-notification-focusable"
      aria-label={`Upcoming event: ${event.title} in ${timeUntil.days} days`}
    >
      <div
        className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-black relative -ml-4 -translate-y-1"
        role="status"
        aria-live="polite"
      >
        {timeUntil.days}
      </div>

      {/* Hover tooltip - Hidden on mobile, shown on desktop */}
      <div
        className="
        hidden md:block absolute top-full left-0 mt-2 p-3 min-w-[200px] max-w-[300px]
        bg-card border border-primary/20 rounded-lg shadow-lg
        opacity-0 invisible group-hover:opacity-100 group-hover:visible
        transition-all duration-200 z-50
      "
      >
        <p className="text-sm font-medium text-white">{event.title}</p>
        <p className="text-xs text-gray-300 mt-1">
          {formatEventDate(event.date)} • {event.time.start}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {event.location.name}, {event.location.city}
        </p>
      </div>
    </Link>
  );
};

// Banner Variant Component
const EventBanner: React.FC<EventNotificationProps> = ({
  event,
  onDismiss,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const timeUntil = calculateTimeUntilEvent(event.date);

  if (!timeUntil || !isVisible) return null;

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  return (
    <div
      className="
        fixed top-0 left-0 right-0 z-50 w-full
        bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15
        backdrop-blur-md border-b border-primary/20
        banner-sweep
      "
      role="banner"
      aria-label="Event notification"
    >
      <div className="container mx-auto px-4 py-1.5 sm:py-2 relative z-10">
        {/* Mobile Layout - Stacked */}
        <div className="flex flex-col gap-2 sm:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0 flex-1">
              <div
                className="w-2 h-2 bg-primary rounded-full flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-white truncate">
                Upcoming: {event.title}
              </span>
            </div>
            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-white transition-colors p-1 event-notification-focusable flex-shrink-0"
              aria-label="Dismiss event notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-col gap-1 text-xs text-gray-300 min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                <span>
                  {event.date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  • {event.time.start}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                <span className="truncate">{event.location.name}</span>
              </div>
            </div>
            
            <Link 
              href="/meetup"
              className="text-xs text-primary hover:text-white transition-colors underline decoration-primary/50 hover:decoration-white flex-shrink-0"
              aria-label={`Register for ${event.title}`}
            >
              Register
            </Link>
          </div>
        </div>

        {/* Desktop/Tablet Layout - Horizontal */}
        <div className="hidden sm:flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-shrink-0">
              <div
                className="w-2 h-2 bg-primary rounded-full"
                aria-hidden="true"
              />
              <span className="text-xs sm:text-sm font-medium text-white">
                Upcoming: {event.title}
              </span>
            </div>

            {/* Desktop view - full details */}
            <div className="hidden lg:flex items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-1">
                <Calendar
                  className="w-4 h-4 flex-shrink-0"
                  aria-hidden="true"
                />
                <span>{formatEventDate(event.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{event.time.start}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{event.location.name}</span>
              </div>
            </div>

            {/* Tablet view - condensed info */}
            <div className="lg:hidden flex items-center gap-2 text-xs text-gray-300">
              <Calendar className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
              <span>
                {event.date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}{" "}
                • {event.time.start}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Link 
              href="/meetup"
              className="text-sm text-primary hover:text-white transition-colors underline decoration-primary/50 hover:decoration-white"
              aria-label={`Register for ${event.title}`}
            >
              <span className="hidden md:inline">Register Now</span>
              <span className="md:hidden">Register</span>
            </Link>

            <button
              onClick={handleDismiss}
              className="text-gray-400 hover:text-white transition-colors p-1 event-notification-focusable"
              aria-label="Dismiss event notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Countdown Variant Component
const EventCountdown: React.FC<EventNotificationProps> = ({ event }) => {
  const [timeUntil, setTimeUntil] = useState<CountdownTimeProps | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      setTimeUntil(calculateTimeUntilEvent(event.date));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [event.date]);

  if (!timeUntil) return null;

  return (
    <Link
      href="/meetup"
      className="block event-notification-focusable"
      aria-label={`Next meetup countdown: ${timeUntil.days} days, ${timeUntil.hours} hours, ${timeUntil.minutes} minutes remaining`}
    >
      <div
        className="
        bg-gradient-to-br from-primary/20 to-accent/10
        border border-primary/30 rounded-lg p-3 sm:p-4
        hover:from-primary/30 hover:to-accent/15
        transition-all duration-300
        group cursor-pointer event-hover-glow
      "
      >
        <p className="text-xs sm:text-sm font-medium text-primary mb-2 text-center">
          Next Meetup
        </p>
        <div
          className="grid grid-cols-4 gap-1 sm:gap-2 text-center"
          role="timer"
          aria-live="polite"
        >
          {[
            { value: timeUntil.days, label: "days", shortLabel: "d" },
            { value: timeUntil.hours, label: "hrs", shortLabel: "h" },
            { value: timeUntil.minutes, label: "min", shortLabel: "m" },
            { value: timeUntil.seconds, label: "sec", shortLabel: "s" },
          ].map((unit, index) => (
            <div
              key={index}
              className="
              bg-card/50 rounded px-1 py-1 sm:px-2 sm:py-1.5
              group-hover:bg-card/70 transition-colors
            "
            >
              <div className="text-sm sm:text-base font-bold text-white">
                {unit.value.toString().padStart(2, "0")}
              </div>
              <div className="text-xs text-gray-400">
                <span className="hidden sm:inline">{unit.label}</span>
                <span className="sm:hidden">{unit.shortLabel}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-300 mt-2 text-center">
          {formatEventDate(event.date)}
        </p>
      </div>
    </Link>
  );
};

// Main EventNotification Component
export const EventNotification: React.FC<EventNotificationProps> = ({
  event,
  variant = "badge",
  showDaysThreshold = 30,
  className = "",
  onDismiss,
}) => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't show event notification on meetup page to avoid redundancy
  if (pathname === "/meetup") {
    return null;
  }

  if (!mounted || !shouldShowNotification(event.date, showDaysThreshold)) {
    return null;
  }

  const components = {
    badge: EventBadge,
    banner: EventBanner,
    countdown: EventCountdown,
  };

  const Component = components[variant];

  return (
    <div className={className}>
      <Component event={event} variant={variant} onDismiss={onDismiss} />
    </div>
  );
};

export default EventNotification;
