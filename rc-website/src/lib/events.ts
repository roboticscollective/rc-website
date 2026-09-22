/**
 * Community events — hardcoded content, same convention as `team.ts`.
 *
 * To add an event: append an entry to `events` below, drop a cover image in
 * `/public/events/`, and redeploy. Registration stays on Luma; this site only
 * markets the event and links out.
 *
 * Times are stored as ISO strings *with* the German UTC offset (+02:00 in
 * summer, +01:00 in winter). All formatting is pinned to `Europe/Berlin` so
 * server and client always agree.
 */

export const EVENT_TIME_ZONE = "Europe/Berlin";
const EVENT_LOCALE = "en-GB";

export interface EventLocation {
  /** Optional venue name shown above the street, e.g. "Gateway Factory". */
  venue?: string;
  street: string;
  postalCode?: string;
  city: string;
  country?: string;
}

export interface EventSection {
  heading: string;
  /** Intro line for the section. Optional when `items` carries the content. */
  body?: string;
  items?: { title: string; body?: string }[];
}

export interface CommunityEvent {
  slug: string;
  title: string;
  /** Recurring series this edition belongs to, e.g. "Robotics Happy Hour". */
  series?: string;
  /** One-liner used on cards and the landing-page strip. */
  tagline: string;
  /** ISO 8601 with offset, e.g. "2026-08-13T11:00:00+02:00". */
  start: string;
  end: string;
  /** Set when the end time is a soft one ("open end"). */
  openEnd?: boolean;
  location: EventLocation;
  /** Path under /public. Falls back to a branded gradient when omitted. */
  coverImage?: string;
  registrationUrl?: string;
  /** Lead paragraphs on the detail page. */
  intro: string[];
  sections?: EventSection[];
  sponsors?: string[];
  supporters?: string[];
  tags?: string[];
}

export const events: CommunityEvent[] = [
  {
    slug: "robotics-happy-hour-august-2026",
    title: "Robotics Happy Hour: Brunch & Bring Your Own Robots",
    series: "Robotics Happy Hour",
    tagline:
      "Brunch, show & tell, plus every robot you are building, working or not.",
    start: "2026-08-13T11:00:00+02:00",
    end: "2026-08-13T14:00:00+02:00",
    openEnd: true,
    location: {
      street: "Campus-Boulevard 55",
      postalCode: "52074",
      city: "Aachen",
      country: "Germany",
    },
    coverImage: "/events/robotics-happy-hour-august-2026.webp",
    registrationUrl: "https://luma.com/pg67a797",
    tags: ["Community", "Show & Tell"],
    intro: [
      "The Robotics Collective invites you to the next edition of Robotics Happy Hour. This time we are celebrating our new space, made possible thanks to the Gateway Factory.",
      "The space is still in the making and becoming a home for the robotics community in Aachen. Join us as we start setting things up, become part of this exciting journey and discover our vision for what this place can become.",
      "Join us for a relaxed brunch, conversations with the Aachen robotics community and most importantly: bring your own robot.",
    ],
    sections: [
      {
        heading: "Bring your own robot",
        body: "Bring whatever robot you are building, experimenting with or just want to show off. Fully functional, unfinished or held together by duct tape and optimism, everything is welcome. No keynote. No pitches. No pressure.",
      },
      {
        heading: "What to expect",
        items: [
          {
            title: "Robot show & tell",
            body: "All robots welcome, working or not.",
          },
          {
            title: "Brunch & refreshments",
            body: "Snacks, beverages and good conversations.",
          },
          {
            title: "Casual networking",
            body: "Connect with students, researchers, startups and industry professionals.",
          },
          {
            title: "A growing robotics community",
            body: "Meet people building the future of robotics in Aachen.",
          },
        ],
      },
      {
        heading: "Who is this for?",
        body: "Whether you are building a six-axis robot arm, experimenting with sensors, developing a startup or simply curious about robotics, come by and join the community.",
      },
    ],
    sponsors: ["Vectioneer", "INFORM"],
    supporters: [
      "Gateway Factory",
      "Digitalhub Aachen",
      "WZL RWTH Aachen",
      "IGMR RWTH Aachen",
      "Institut für Unternehmenskybernetik e.V.",
    ],
  },
  {
    slug: "fokusgruppe-robotics-automation-september-2026",
    title: "Kick-off: Fokusgruppe Robotics & Automation",
    tagline:
      "Launching the digitalHUB Aachen focus group for robotics and automation.",
    start: "2026-09-16T17:00:00+02:00",
    end: "2026-09-16T19:00:00+02:00",
    openEnd: true,
    location: {
      venue: "digitalHUB Aachen (Great Conference)",
      street: "Jülicher Straße 72a",
      postalCode: "52070",
      city: "Aachen",
      country: "Germany",
    },
    tags: ["Community", "Kick-off"],
    intro: [
      "We're taking off! Together with you, we want to launch the new focus group Robotics & Automation at the digitalHUB Aachen. Meet the ecosystem of startups, researchers and industry.",
      "The first meeting is about getting to know each other, exchanging ideas and the common question: what topics, ideas and projects do we want to advance around robotics and automation?",
      "Come by, bring your perspectives and help shape the focus group. We look forward to seeing you!",
    ],
    supporters: ["Digitalhub Aachen"],
  },
  {
    slug: "robotics-happy-hour-igmr-september-2026",
    title: "Robotics Happy Hour x IGMR",
    series: "Robotics Happy Hour",
    tagline:
      "Robotics, research & real-world applications: lab tours and networking at RWTH's IGMR.",
    start: "2026-09-29T17:00:00+02:00",
    end: "2026-09-29T20:00:00+02:00",
    location: {
      venue: "IGMR, RWTH Aachen University",
      street: "Eilfschornsteinstraße 18",
      postalCode: "52062",
      city: "Aachen",
      country: "Germany",
    },
    registrationUrl: "https://luma.com/lp2uxs49",
    tags: ["Community", "Lab Tour"],
    intro: [
      "Join the Robotics Happy Hour with the Institute of Mechanism Theory, Machine Dynamics and Robotics (IGMR) at RWTH Aachen University. Explore academic robotics research, meet the team and connect with Aachen's robotics community.",
      "Only 30 spots are available. Participants will be selected based on best fit and the value we believe they can bring to the community. Please make sure you really attend if you register.",
      "Sip, snack and connect over robotics in a relaxed atmosphere.",
    ],
    sections: [
      {
        heading: "Program",
        items: [
          { title: "Welcome from the Robotics Collective" },
          { title: "IGMR spotlight", body: "Stefan Bezrucav" },
          {
            title: "Lab tours",
            body: "Two groups of 20 people, 20-30 minutes each.",
          },
          { title: "Networking" },
        ],
      },
      {
        heading: "Good to know",
        items: [
          {
            title: "Check-in at the foyer",
            body: "Registration requires approval by the host.",
          },
          {
            title: "No photos or videos inside the lab",
            body: "Experimental areas are off limits for cameras. Photos and videos taken elsewhere during the event may be used for Robotics Collective communication.",
          },
        ],
      },
    ],
    sponsors: ["Vectioneer", "INFORM", "Gateway Factory", "IGMR RWTH Aachen"],
  },
];

/* ------------------------------------------------------------------ */
/* Queries                                                             */
/* ------------------------------------------------------------------ */

/**
 * Single read point for event data. If we ever sync from Luma's ICS feed,
 * this is the only function that has to change.
 */
export function getAllEvents(): CommunityEvent[] {
  return [...events].sort((a, b) => Date.parse(a.start) - Date.parse(b.start));
}

/** An event counts as past only once its end time has gone by. */
export function isPastEvent(event: CommunityEvent, now: Date = new Date()) {
  return Date.parse(event.end) < now.getTime();
}

/** Soonest first — the order you want for "what's coming up". */
export function getUpcomingEvents(now: Date = new Date()): CommunityEvent[] {
  return getAllEvents().filter((e) => !isPastEvent(e, now));
}

/** Most recent first — the order you want for an archive. */
export function getPastEvents(now: Date = new Date()): CommunityEvent[] {
  return getAllEvents()
    .filter((e) => isPastEvent(e, now))
    .reverse();
}

export function getNextEvent(now: Date = new Date()): CommunityEvent | null {
  return getUpcomingEvents(now)[0] ?? null;
}

export function getEventBySlug(slug: string): CommunityEvent | undefined {
  return events.find((e) => e.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Formatting — all pinned to Europe/Berlin                            */
/* ------------------------------------------------------------------ */

function fmt(value: string, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat(EVENT_LOCALE, {
    timeZone: EVENT_TIME_ZONE,
    ...options,
  }).format(new Date(value));
}

/** "Thursday, 13 August 2026" */
export function formatEventDate(event: CommunityEvent) {
  return fmt(event.start, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** "AUG" / "13" — for the date block on cards. */
export function formatEventMonth(event: CommunityEvent) {
  return fmt(event.start, { month: "short" }).toUpperCase();
}

export function formatEventDay(event: CommunityEvent) {
  return fmt(event.start, { day: "numeric" });
}

/** "AUG 13" — compact badge form. */
export function formatEventDateCompact(event: CommunityEvent) {
  return `${formatEventMonth(event)} ${formatEventDay(event)}`;
}

/** "13.08" — the numeric form the event artwork uses. */
export function formatEventDateNumeric(event: CommunityEvent) {
  return fmt(event.start, { day: "2-digit", month: "2-digit" }).replace(
    /\//g,
    ".",
  );
}

/**
 * Splits "Robotics Happy Hour: Brunch & Bring Your Own Robots" into its series
 * lead and the edition subtitle, so a two-line title can be set typographically
 * without duplicating copy in a component.
 */
export function getEventTitleParts(event: CommunityEvent) {
  if (event.series && event.title.startsWith(`${event.series}:`)) {
    return {
      lead: event.series,
      sub: event.title.slice(event.series.length + 1).trim(),
    };
  }
  return { lead: event.title, sub: null };
}

/** "11:00 - 14:00", with " (open end)" when the end time is soft. */
export function formatEventTimeRange(event: CommunityEvent) {
  const time = (value: string) =>
    fmt(value, { hour: "2-digit", minute: "2-digit", hour12: false });
  const range = `${time(event.start)} - ${time(event.end)}`;
  return event.openEnd ? `${range} (open end)` : range;
}

/** "Campus-Boulevard 55, Aachen" — the short form used on cards. */
export function formatEventLocationShort(event: CommunityEvent) {
  return [event.location.street, event.location.city]
    .filter(Boolean)
    .join(", ");
}

/** Full postal address, one line. */
export function formatEventAddress(event: CommunityEvent) {
  const { venue, street, postalCode, city, country } = event.location;
  return [venue, street, [postalCode, city].filter(Boolean).join(" "), country]
    .filter(Boolean)
    .join(", ");
}

export function getEventMapsUrl(event: CommunityEvent) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    formatEventAddress(event),
  )}`;
}
