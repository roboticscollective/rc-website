import { events, getEventBySlug } from "@/lib/events";
import { buildEventIcs } from "@/lib/ics";

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return new Response("Not found", { status: 404 });
  }

  return new Response(buildEventIcs(event), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `attachment; filename="${event.slug}.ics"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
