import { MetadataRoute } from "next";
import { getAllEvents } from "@/lib/events";
import { locales, localePath, SITE_URL } from "@/i18n/config";

type Entry = Pick<MetadataRoute.Sitemap[number], "changeFrequency" | "priority">;

/** Every page in both languages, each pointing at its translation (hreflang). */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, Entry][] = [
    ["/", { changeFrequency: "weekly", priority: 1 }],
    ["/events", { changeFrequency: "weekly", priority: 0.8 }],
    ...getAllEvents().map(
      (event): [string, Entry] => [
        `/events/${event.slug}`,
        { changeFrequency: "monthly", priority: 0.7 },
      ],
    ),
    ["/privacy", { changeFrequency: "yearly", priority: 0.3 }],
    ["/imprint", { changeFrequency: "yearly", priority: 0.3 }],
  ];

  return pages.flatMap(([path, entry]) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${localePath(locale, path)}`,
      lastModified: new Date(),
      ...entry,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${SITE_URL}${localePath(l, path)}`]),
        ),
      },
    })),
  );
}
