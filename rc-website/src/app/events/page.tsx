import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { getPastEvents, getUpcomingEvents } from "@/lib/events";

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
  },
};

/**
 * Upcoming/past is computed from the current time, so the page has to be
 * re-rendered periodically or a finished event would stay in "Upcoming" until
 * the next deploy. Hourly is plenty.
 */
export const revalidate = 3600;

export default function EventsPage() {
  const upcoming = getUpcomingEvents();
  const past = getPastEvents();

  return (
    <div className="bg-light text-dark">
      {/* Dark header block, mirrors the hero's rounded-bottom treatment */}
      <header
        className="relative w-full overflow-hidden flex flex-col justify-end min-h-0 lg:min-h-[60svh]"
        style={{
          padding:
            "clamp(7rem, 16svh, 14rem) clamp(1.5rem, 5svh, 4rem) clamp(3rem, 7svh, 6rem)",
          backgroundColor: "#0d0d0d",
          borderBottomLeftRadius: "4svh",
          borderBottomRightRadius: "4svh",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 85% 100%, #47A8BD26 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 w-full" style={{ maxWidth: "180svh", margin: "0 auto" }}>
          <p
            className="uppercase"
            style={{
              letterSpacing: "0.3svh",
              color: "#ffffff99",
              fontSize: "clamp(0.7rem, 1.8svh, 1rem)",
              fontWeight: 500,
              marginBottom: "2svh",
            }}
          >
            Community Events
          </p>
          <h1
            className="text-white"
            style={{
              fontSize: "clamp(2.5rem, min(8svh, 11vw), 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: "3svh",
            }}
          >
            Come build with <span className="text-brand">us</span>.
          </h1>
          <p
            style={{
              fontSize: "clamp(1rem, 2.3svh, 1.5rem)",
              lineHeight: 1.4,
              maxWidth: "80svh",
              color: "#ffffffcc",
            }}
          >
            Meetups, show &amp; tells and Happy Hours in Aachen. Bring a robot,
            bring a question, bring yourself.
          </p>
        </div>
      </header>

      {/* `layout.tsx` already renders a <main>, so this is a plain wrapper */}
      <div
        style={{
          padding: "clamp(3rem, 10svh, 8rem) clamp(1.5rem, 5svh, 4rem)",
        }}
      >
        <div style={{ maxWidth: "180svh", margin: "0 auto" }}>
          <section aria-labelledby="upcoming-heading">
            <h2
              id="upcoming-heading"
              style={{
                fontSize: "clamp(1.6rem, 5svh, 3rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "4svh",
              }}
            >
              Upcoming
            </h2>

            {upcoming.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2svh]">
                {upcoming.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            ) : (
              <div
                className="bg-gray-mid"
                style={{ borderRadius: "3svh", padding: "clamp(2rem, 6svh, 4rem)" }}
              >
                <p
                  style={{
                    fontSize: "clamp(1rem, 2.3svh, 1.4rem)",
                    fontWeight: 500,
                    marginBottom: "1svh",
                  }}
                >
                  Nothing on the calendar right now.
                </p>
                <p style={{ color: "#555", fontSize: "clamp(0.85rem, 1.9svh, 1.05rem)" }}>
                  We are cooking up the next one. Follow us on{" "}
                  <a
                    href="https://www.instagram.com/roboticscollective/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    Instagram
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://www.linkedin.com/company/roboticscollective/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                  >
                    LinkedIn
                  </a>{" "}
                  to hear about it first.
                </p>
              </div>
            )}
          </section>

          {past.length > 0 && (
            <section
              aria-labelledby="archive-heading"
              style={{ marginTop: "clamp(3rem, 12svh, 9rem)" }}
            >
              <h2
                id="archive-heading"
                style={{
                  fontSize: "clamp(1.6rem, 5svh, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: "1svh",
                }}
              >
                Archive
              </h2>
              <p
                style={{
                  color: "#555",
                  fontSize: "clamp(0.85rem, 1.9svh, 1.05rem)",
                  marginBottom: "4svh",
                }}
              >
                What we have already built, shown and eaten together.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2svh] opacity-80">
                {past.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
