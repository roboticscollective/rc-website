import { events, getEventBySlug, localizeEvent } from "@/lib/events";
import { isLocale, locales } from "@/i18n/config";
import { buildEventIcs } from "@/lib/ics";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    events.map((event) => ({ locale, slug: event.slug })),
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string; slug: string }> },
) {
  const { locale, slug } = await params;
  const event = getEventBySlug(slug);

  if (!event || !isLocale(locale)) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(buildEventIcs(localizeEvent(event, locale), locale), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${event.slug}.ics"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
