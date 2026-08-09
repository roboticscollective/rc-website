import Link from "next/link";
import Image from "next/image";
import {
  type CommunityEvent,
  formatEventDate,
  formatEventDay,
  formatEventLocationShort,
  formatEventMonth,
  formatEventTimeRange,
} from "@/lib/events";

/**
 * Card artwork.
 *
 * Deliberately not the event poster: posters are 1:1 with baked-in type and a
 * sponsor bar, so they either crop badly or letterbox in a card. The poster is
 * shown intact on the event's own page instead; the listing gets a branded
 * plate that keeps every card the same shape.
 */
function CardPlate() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(90% 120% at 15% 15%, #47A8BD40 0%, transparent 60%), radial-gradient(80% 100% at 90% 90%, #47A8BD26 0%, transparent 55%), #161616",
      }}
    >
      <Image
        src="/logo.svg"
        alt=""
        width={120}
        height={120}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          height: "35%",
          width: "auto",
          opacity: 0.16,
          filter: "brightness(0) invert(1)",
        }}
      />
    </div>
  );
}

/** Stacked month/day block, mirrors the date badge on the Luma listing. */
function DateBlock({ event }: { event: CommunityEvent }) {
  return (
    <div
      className="flex flex-col items-center justify-center shrink-0 text-white"
      style={{
        width: "8svh",
        minWidth: "4.5rem",
        padding: "1svh 0",
        borderRadius: "1.5svh",
        background: "#ffffff14",
        border: "1px solid #ffffff1f",
      }}
    >
      <span
        style={{
          fontSize: "clamp(0.6rem, 1.4svh, 0.85rem)",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "#47A8BD",
        }}
      >
        {formatEventMonth(event)}
      </span>
      <span
        style={{
          fontSize: "clamp(1.4rem, 3.4svh, 2.2rem)",
          fontWeight: 700,
          lineHeight: 1.1,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {formatEventDay(event)}
      </span>
    </div>
  );
}

export function EventCard({ event }: { event: CommunityEvent }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group relative flex flex-col overflow-hidden bg-dark text-white transition-transform duration-200 hover:scale-[1.02] aspect-square lg:aspect-auto"
      style={{ borderRadius: "3svh" }}
    >
      {/* Plate: fills the square on mobile, a 16:9 strip above the details on lg+ */}
      <div className="absolute inset-0 lg:relative lg:inset-auto lg:aspect-[16/9] lg:shrink-0 overflow-hidden">
        <CardPlate />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0d0d0d00 35%, #0d0d0de6 100%)",
          }}
        />
        {event.series && (
          <span
            className="absolute uppercase"
            style={{
              top: "2svh",
              left: "2svh",
              padding: "0.5svh 1.5svh",
              borderRadius: "999px",
              background: "#0d0d0dcc",
              border: "1px solid #ffffff2e",
              fontSize: "clamp(0.6rem, 1.3svh, 0.8rem)",
              fontWeight: 700,
              letterSpacing: "0.12em",
            }}
          >
            {event.series}
          </span>
        )}
      </div>

      {/* Mobile: square poster, title then the calendar date over the plate */}
      <div
        className="relative z-10 mt-auto flex flex-col lg:hidden"
        style={{ padding: "2.5svh", gap: "1.5svh" }}
      >
        <h3
          style={{
            fontSize: "clamp(1.05rem, 2.6svh, 1.5rem)",
            fontWeight: 600,
            lineHeight: 1.25,
          }}
        >
          {event.title}
        </h3>
        <DateBlock event={event} />
      </div>

      {/* Desktop/tablet: full detail row below the image */}
      <div
        className="relative z-10 hidden lg:flex flex-1 items-start"
        style={{ gap: "2svh", padding: "3svh" }}
      >
        <DateBlock event={event} />

        <div className="min-w-0 flex-1">
          <h3
            style={{
              fontSize: "clamp(1.05rem, 2.6svh, 1.6rem)",
              fontWeight: 600,
              lineHeight: 1.25,
              marginBottom: "1svh",
            }}
          >
            {event.title}
          </h3>
          <p
            style={{
              fontSize: "clamp(0.85rem, 1.8svh, 1.05rem)",
              lineHeight: 1.45,
              color: "#ffffff99",
              marginBottom: "1.5svh",
            }}
          >
            {event.tagline}
          </p>
          <dl
            className="flex flex-col"
            style={{
              gap: "0.4svh",
              fontSize: "clamp(0.78rem, 1.6svh, 0.95rem)",
              color: "#ffffffcc",
            }}
          >
            <div className="flex gap-2">
              <dt className="sr-only">Date</dt>
              <dd>
                {formatEventDate(event)} &middot; {formatEventTimeRange(event)}
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="sr-only">Location</dt>
              <dd style={{ color: "#ffffff99" }}>
                {formatEventLocationShort(event)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Link>
  );
}

export default EventCard;
