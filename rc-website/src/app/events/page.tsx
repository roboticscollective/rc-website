import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import Link from "next/link";
import {
  formatEventDateCompact,
  formatEventLocationShort,
  getPastEvents,
  getUpcomingEvents,
} from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | Robotics Collective Aachen",
  description:
    "Meetups, show & tells and Happy Hours from the Robotics Collective in Aachen. Come build, share and meet the community.",
  alternates: { canonical: "/events" },
  openGraph: {
    title: "Events | Robotics Collective Aachen",
    description:
      "Meetups, show & tells and Happy Hours from the Robotics Collective in Aachen.",
    url: "/events",
    type: "website",
    images: [{ url: "/social/og-default.jpg", width: 1200, height: 630 }],
  },
};

/**
 * Upcoming/past is computed from the current time, so the page has to be
 * re-rendered periodically or a finished event would stay in "Upcoming" until
 * the next deploy. Hourly is plenty.
 */
export const revalidate = 3600;

const label =
  "font-mono text-[11px] uppercase tracking-[0.18em] text-[#666] sm:text-xs";

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <div className="bg-light text-dark">
      <header className="rounded-b-[2rem] bg-dark text-white lg:rounded-b-[4svh]">
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-12 pt-28 sm:px-8 lg:px-12 lg:pb-16 lg:pt-[calc(8svh+4rem)]">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
            Events
          </p>
          <h1 className="text-[clamp(2.6rem,9vw,5.5rem)] font-extrabold leading-[0.95] tracking-tight">
            Come build with us.
          </h1>
        </div>
      </header>

      {/* `layout.tsx` already renders a <main>, so this is a plain wrapper */}
      <div className="mx-auto w-full max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <section aria-labelledby="upcoming-heading">
          <h2 id="upcoming-heading" className={`${label} mb-5`}>
            0.1/ Upcoming
          </h2>

          {upcoming.length > 0 ? (
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
              {upcoming.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          ) : (
            <p className="border-y border-dark/15 py-6 text-lg">
              Nothing planned right now. Follow us on{" "}
              <a
                href="https://www.instagram.com/roboticscollective/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-brand"
              >
                Instagram
              </a>{" "}
              or{" "}
              <a
                href="https://www.linkedin.com/company/roboticscollective/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-brand"
              >
                LinkedIn
              </a>
              .
            </p>
          )}
        </section>

        {past.length > 0 && (
          <section aria-labelledby="archive-heading" className="mt-16 lg:mt-24">
            <h2 id="archive-heading" className={`${label} mb-5`}>
              0.2/ Past
            </h2>

            {/* Compact list — past events don't need big cards */}
            <ul className="border-t border-dark/15">
              {past.map((event) => (
                <li key={event.slug} className="border-b border-dark/15">
                  <Link
                    href={`/events/${event.slug}`}
                    className="group grid grid-cols-[4.5rem_minmax(0,1fr)_auto] items-baseline gap-4 py-5 sm:grid-cols-[6rem_minmax(0,1fr)_auto] sm:gap-8"
                  >
                    <span className="font-mono text-sm tabular-nums text-[#666]">
                      {formatEventDateCompact(event)}
                    </span>
                    <span>
                      <span className="block text-lg font-semibold leading-snug transition-colors group-hover:text-brand sm:text-xl">
                        {event.title}
                      </span>
                      <span className="mt-1 block text-sm text-[#666]">
                        {formatEventLocationShort(event)}
                      </span>
                    </span>
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
