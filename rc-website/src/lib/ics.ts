import {
  type CommunityEvent,
  formatEventAddress,
} from "@/lib/events";
import { localePath, SITE_URL, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/** ICS wants UTC basic-format timestamps: 20260813T090000Z */
function toIcsUtc(value: string) {
  return new Date(value).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/** Escapes the four characters RFC 5545 treats as special in TEXT values. */
function escapeText(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

/**
 * RFC 5545 caps lines at 75 octets; longer ones are folded onto continuation
 * lines that start with a single space. Calendar apps reject files that don't.
 */
function foldLine(line: string) {
  if (line.length <= 75) return line;
  const chunks: string[] = [line.slice(0, 75)];
  let rest = line.slice(75);
  while (rest.length > 74) {
    chunks.push(` ${rest.slice(0, 74)}`);
    rest = rest.slice(74);
  }
  if (rest.length) chunks.push(` ${rest}`);
  return chunks.join("\r\n");
}

/** Builds a single-event .ics file for "Add to calendar" (event already localized). */
export function buildEventIcs(event: CommunityEvent, locale: Locale) {
  const url = `${SITE_URL}${localePath(locale, `/events/${event.slug}`)}`;
  const moreInfo = getDictionary(locale).event.moreInfo;
  const description = [...event.intro, "", `${moreInfo}: ${url}`].join("\n");

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Robotics Collective Aachen//Events//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${event.slug}@roboticscollective.org`,
    `DTSTAMP:${toIcsUtc(event.start)}`,
    `DTSTART:${toIcsUtc(event.start)}`,
    `DTEND:${toIcsUtc(event.end)}`,
    `SUMMARY:${escapeText(event.title)}`,
    `DESCRIPTION:${escapeText(description)}`,
    `LOCATION:${escapeText(formatEventAddress(event, locale))}`,
    `URL:${url}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.map(foldLine).join("\r\n");
}
