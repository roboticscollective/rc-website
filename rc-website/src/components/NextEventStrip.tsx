import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  formatEventDateNumeric,
  formatEventLocationShort,
  formatEventTimeRange,
  getEventTitleParts,
  getNextEvent,
} from "@/lib/events";

/**
 * "What's next" row directly under the hero, linking through to /events.
 *
 * Built as a timetable entry rather than a card: hairline rules, a large
 * tabular date, no container. It reuses the section eyebrow and the numeral
 * treatment the rest of the page already owns, so it reads as part of the
 * system instead of a notification bar bolted onto it.
 *
 * Deliberately not a numbered section — the 01-05 IDs are a navbar contract,
 * and this has to disappear entirely when nothing is coming up.
 */
export function NextEventStrip() {
  const event = getNextEvent();
  if (!event) return null;

  const { lead, sub } = getEventTitleParts(event);

  return (
    <section
      aria-labelledby="next-event-heading"
      className="bg-light text-dark"
      style={{ padding: "0 5svh" }}
    >
      <h2 id="next-event-heading" className="sr-only">
        Upcoming event
      </h2>

      <Link
        href="/events"
        className="group block max-w-[150svh] mx-auto"
        style={{
          paddingTop: "5svh",
          paddingBottom: "5svh",
          borderBottom: "1px solid #0d0d0d1f",
        }}
      >
        <div
          className="flex items-baseline justify-between"
          style={{ gap: "2svh", marginBottom: "3svh" }}
        >
          <p
            className="uppercase"
            style={{
              letterSpacing: "0.3svh",
              color: "#666",
              fontSize: "1.8svh",
              fontWeight: 500,
            }}
          >
            Upcoming
          </p>
          <span
            className="flex items-center uppercase whitespace-nowrap"
            style={{
              gap: "0.6rem",
              letterSpacing: "0.3svh",
              fontSize: "1.8svh",
              fontWeight: 500,
            }}
          >
            All events
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-baseline" style={{ gap: "1.5svh 4svh" }}>
          <span
            className="shrink-0 transition-colors duration-200 group-hover:text-brand"
            style={{
              fontSize: "clamp(2.75rem, min(8svh, 16vw), 5.5rem)",
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {formatEventDateNumeric(event)}
          </span>

          <span className="min-w-0">
            <span
              className="block"
              style={{
                fontSize: "clamp(1.1rem, 3svh, 1.9rem)",
                fontWeight: 500,
                lineHeight: 1.25,
              }}
            >
              {lead}
            </span>
            {sub && (
              <span
                className="block"
                style={{
                  fontSize: "clamp(1.1rem, 3svh, 1.9rem)",
                  fontWeight: 500,
                  lineHeight: 1.25,
                  color: "#8a8a8a",
                }}
              >
                {sub}
              </span>
            )}
            <span
              className="block"
              style={{
                fontSize: "1.8svh",
                color: "#666",
                marginTop: "1.5svh",
              }}
            >
              {formatEventTimeRange(event)} &middot;{" "}
              {formatEventLocationShort(event)}
            </span>
          </span>
        </div>
      </Link>
    </section>
  );
}

export default NextEventStrip;
