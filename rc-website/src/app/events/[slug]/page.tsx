import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarPlus, ExternalLink } from "lucide-react";
import {
  EVENT_TIME_ZONE,
  events,
  formatEventAddress,
  formatEventDate,
  formatEventTimeRange,
  getEventBySlug,
  getEventMapsUrl,
  isPastEvent,
} from "@/lib/events";

const SITE_URL = "https://roboticscollective.org";

export const revalidate = 3600;

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return { title: "Event not found | Robotics Collective Aachen" };
  }

  const description = `${formatEventDate(event)} · ${formatEventTimeRange(
    event,
  )} · ${formatEventAddress(event)}. ${event.tagline}`;

  return {
    title: `${event.title} | Robotics Collective Aachen`,
    description,
    alternates: { canonical: `/events/${event.slug}` },
    openGraph: {
      title: event.title,
      description,
      url: `/events/${event.slug}`,
      type: "article",
      ...(event.coverImage ? { images: [{ url: event.coverImage }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description,
      ...(event.coverImage ? { images: [event.coverImage] } : {}),
    },
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  const past = isPastEvent(event);

  /** schema.org Event — gets us Google's event rich results. */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.start,
    endDate: event.end,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: event.tagline,
    url: `${SITE_URL}/events/${event.slug}`,
    ...(event.coverImage ? { image: [`${SITE_URL}${event.coverImage}`] } : {}),
    location: {
      "@type": "Place",
      name: event.location.venue ?? event.location.street,
      address: {
        "@type": "PostalAddress",
        streetAddress: event.location.street,
        postalCode: event.location.postalCode,
        addressLocality: event.location.city,
        addressCountry: "DE",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Robotics Collective Aachen",
      url: SITE_URL,
    },
    ...(event.registrationUrl
      ? {
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "EUR",
            availability: "https://schema.org/InStock",
            url: event.registrationUrl,
          },
        }
      : {}),
  };

  return (
    <div className="bg-light text-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Cover header */}
      <header
        className="relative w-full overflow-hidden flex flex-col justify-end"
        style={{
          minHeight: "70svh",
          padding:
            "clamp(7rem, 16svh, 14rem) clamp(1.5rem, 5svh, 4rem) clamp(3rem, 7svh, 6rem)",
          backgroundColor: "#0d0d0d",
          borderBottomLeftRadius: "4svh",
          borderBottomRightRadius: "4svh",
        }}
      >
        {/* The poster is light and carries its own type, so it is shown intact
            in the rail rather than used as a backdrop for white text here. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 85% 100%, #47A8BD26 0%, transparent 60%)",
          }}
        />

        <div
          className="relative z-10 w-full"
          style={{ maxWidth: "160svh", margin: "0 auto" }}
        >
          <Link
            href="/events"
            className="inline-flex items-center text-white hover:opacity-70 transition-opacity"
            style={{
              gap: "0.5rem",
              fontSize: "clamp(0.78rem, 1.7svh, 0.95rem)",
              fontWeight: 500,
              marginBottom: "3svh",
            }}
          >
            <ArrowLeft size={16} />
            All events
          </Link>

          <div
            className="flex flex-wrap items-center"
            style={{ gap: "1svh", marginBottom: "2svh" }}
          >
            {past && <Pill tone="muted">Past event</Pill>}
            {event.series && <Pill tone="brand">{event.series}</Pill>}
            {event.tags?.map((tag) => <Pill key={tag}>{tag}</Pill>)}
          </div>

          <h1
            className="text-white"
            style={{
              fontSize: "clamp(2rem, min(7svh, 9vw), 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              maxWidth: "130svh",
              marginBottom: "3svh",
            }}
          >
            {event.title}
          </h1>

          <dl
            className="flex flex-col sm:flex-row sm:flex-wrap text-white"
            style={{ gap: "1.5svh 4svh" }}
          >
            <MetaItem label="When">
              {formatEventDate(event)}
              <br />
              {formatEventTimeRange(event)}
            </MetaItem>
            <MetaItem label="Where">
              <a
                href={getEventMapsUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand transition-colors"
              >
                {event.location.venue && (
                  <>
                    {event.location.venue}
                    <br />
                  </>
                )}
                {event.location.street}
                <br />
                {[event.location.postalCode, event.location.city]
                  .filter(Boolean)
                  .join(" ")}
              </a>
            </MetaItem>
            <MetaItem label="Hosted by">Robotics Collective</MetaItem>
          </dl>
        </div>
      </header>

      {/* Body */}
      <div
        style={{
          padding: "clamp(3rem, 10svh, 8rem) clamp(1.5rem, 5svh, 4rem)",
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto]"
          style={{ maxWidth: "160svh", margin: "0 auto", gap: "6svh" }}
        >
          <article className="min-w-0">
            <h2
              style={{
                fontSize: "clamp(1.4rem, 4svh, 2.4rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: "3svh",
              }}
            >
              About the event
            </h2>

            {event.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                style={{
                  fontSize: "clamp(0.95rem, 2.1svh, 1.2rem)",
                  lineHeight: 1.6,
                  color: "#333",
                  marginBottom: "2.5svh",
                }}
              >
                {paragraph}
              </p>
            ))}

            {event.sections?.map((section) => (
              <section key={section.heading} style={{ marginTop: "6svh" }}>
                <h3
                  style={{
                    fontSize: "clamp(1.1rem, 2.8svh, 1.6rem)",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginBottom: "2svh",
                  }}
                >
                  {section.heading}
                </h3>

                {section.body && (
                  <p
                    style={{
                      fontSize: "clamp(0.95rem, 2.1svh, 1.2rem)",
                      lineHeight: 1.6,
                      color: "#333",
                    }}
                  >
                    {section.body}
                  </p>
                )}

                {section.items && (
                  <ul
                    className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: "1.5svh", marginTop: section.body ? "2.5svh" : 0 }}
                  >
                    {section.items.map((item) => (
                      <li
                        key={item.title}
                        className="bg-gray-mid"
                        style={{
                          borderRadius: "2svh",
                          padding: "clamp(1rem, 2.5svh, 1.75rem)",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "clamp(0.9rem, 2svh, 1.1rem)",
                            fontWeight: 600,
                            marginBottom: item.body ? "0.5svh" : 0,
                          }}
                        >
                          {item.title}
                        </p>
                        {item.body && (
                          <p
                            style={{
                              fontSize: "clamp(0.82rem, 1.8svh, 1rem)",
                              lineHeight: 1.5,
                              color: "#555",
                            }}
                          >
                            {item.body}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {(event.sponsors?.length || event.supporters?.length) && (
              <section style={{ marginTop: "8svh" }}>
                {event.sponsors?.length ? (
                  <CreditList label="Sponsored by" names={event.sponsors} />
                ) : null}
                {event.supporters?.length ? (
                  <CreditList label="Supported by" names={event.supporters} />
                ) : null}
              </section>
            )}

            <p
              style={{
                marginTop: "8svh",
                paddingTop: "3svh",
                borderTop: "1px solid #d8d8d8",
                fontSize: "clamp(0.75rem, 1.6svh, 0.9rem)",
                lineHeight: 1.6,
                color: "#666",
              }}
            >
              <strong style={{ fontWeight: 600 }}>Data &amp; media notice.</strong>{" "}
              By registering, you agree that your data may be used for event
              organization and communication. Photos and videos may be taken
              during the event and used for Robotics Collective communication.
              See our{" "}
              <Link href="/privacy" className="underline hover:no-underline">
                privacy policy
              </Link>
              .
            </p>
          </article>

          {/* Sticky registration rail */}
          <aside className="lg:w-[45svh] lg:min-w-[18rem]">
            <div className="lg:sticky" style={{ top: "14svh" }}>
              {event.coverImage && (
                <Image
                  src={event.coverImage}
                  alt={`Poster for ${event.title}`}
                  width={1200}
                  height={1200}
                  className="w-full h-auto"
                  style={{ borderRadius: "3svh", marginBottom: "2svh" }}
                  priority
                />
              )}

              <div
                className="bg-dark text-white"
                style={{
                  borderRadius: "3svh",
                  padding: "clamp(1.5rem, 3.5svh, 2.5rem)",
                }}
              >
              <p
                className="uppercase"
                style={{
                  fontSize: "clamp(0.62rem, 1.4svh, 0.8rem)",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "#ffffff99",
                  marginBottom: "1.5svh",
                }}
              >
                {past ? "This one is over" : "Registration"}
              </p>

              <p
                style={{
                  fontSize: "clamp(0.9rem, 2svh, 1.1rem)",
                  lineHeight: 1.5,
                  color: "#ffffffcc",
                  marginBottom: "3svh",
                }}
              >
                {past
                  ? "Thanks to everyone who came by. Check what is coming up next."
                  : "Free to attend. Sign up so we know how much brunch to get."}
              </p>

              {past ? (
                <Link
                  href="/events"
                  className="flex items-center justify-center w-full text-dark bg-white transition-transform hover:scale-[1.02]"
                  style={ctaStyle}
                >
                  See upcoming events
                </Link>
              ) : (
                <div className="flex flex-col" style={{ gap: "1.5svh" }}>
                  {event.registrationUrl && (
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full text-dark bg-white transition-transform hover:scale-[1.02]"
                      style={{ ...ctaStyle, gap: "0.5rem" }}
                    >
                      Register
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={`/events/${event.slug}/calendar.ics`}
                    className="flex items-center justify-center w-full text-white transition-transform hover:scale-[1.02]"
                    style={{
                      ...ctaStyle,
                      gap: "0.5rem",
                      background: "transparent",
                      border: "1.5px solid #ffffff55",
                    }}
                  >
                    <CalendarPlus size={16} />
                    Add to calendar
                  </a>
                </div>
              )}

              <p
                style={{
                  marginTop: "3svh",
                  paddingTop: "2svh",
                  borderTop: "1px solid #ffffff1a",
                  fontSize: "clamp(0.7rem, 1.5svh, 0.85rem)",
                  lineHeight: 1.5,
                  color: "#ffffff80",
                }}
              >
                All times {EVENT_TIME_ZONE.replace("_", " ")} (CET/CEST).
              </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

const ctaStyle: React.CSSProperties = {
  padding: "clamp(0.85rem, 1.8svh, 1.15rem)",
  borderRadius: "999px",
  fontSize: "clamp(0.82rem, 1.7svh, 0.95rem)",
  fontWeight: 700,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
};

function Pill({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "brand" | "muted";
}) {
  const tones = {
    default: { background: "#ffffff1a", border: "#ffffff2e", color: "#ffffff" },
    brand: { background: "#47A8BD26", border: "#47A8BD66", color: "#47A8BD" },
    muted: { background: "#ffffff0d", border: "#ffffff1f", color: "#ffffff99" },
  }[tone];

  return (
    <span
      className="uppercase"
      style={{
        padding: "0.5svh 1.5svh",
        borderRadius: "999px",
        background: tones.background,
        border: `1px solid ${tones.border}`,
        color: tones.color,
        fontSize: "clamp(0.6rem, 1.3svh, 0.78rem)",
        fontWeight: 700,
        letterSpacing: "0.12em",
      }}
    >
      {children}
    </span>
  );
}

function MetaItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt
        className="uppercase"
        style={{
          fontSize: "clamp(0.6rem, 1.3svh, 0.78rem)",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "#ffffff80",
          marginBottom: "0.75svh",
        }}
      >
        {label}
      </dt>
      <dd
        style={{
          fontSize: "clamp(0.85rem, 1.9svh, 1.05rem)",
          lineHeight: 1.45,
          fontWeight: 500,
        }}
      >
        {children}
      </dd>
    </div>
  );
}

function CreditList({ label, names }: { label: string; names: string[] }) {
  return (
    <div style={{ marginBottom: "3svh" }}>
      <p
        className="uppercase"
        style={{
          fontSize: "clamp(0.62rem, 1.4svh, 0.8rem)",
          fontWeight: 700,
          letterSpacing: "0.15em",
          color: "#666",
          marginBottom: "1.5svh",
        }}
      >
        {label}
      </p>
      <ul className="flex flex-wrap" style={{ gap: "1svh" }}>
        {names.map((name) => (
          <li
            key={name}
            style={{
              padding: "0.8svh 2svh",
              borderRadius: "999px",
              border: "1.5px solid #0d0d0d1f",
              fontSize: "clamp(0.8rem, 1.8svh, 1rem)",
              fontWeight: 500,
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
