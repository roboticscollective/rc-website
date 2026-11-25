import { NextResponse, type NextRequest } from "next/server";

/**
 * German is served without a prefix: "/events" is rewritten internally to
 * "/de/events". English URLs ("/en/...") pass through untouched, and anyone
 * typing "/de/..." is redirected to the clean URL so each page has exactly
 * one German address.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Static files (images, fonts, …) — but not the calendar downloads, which
  // are localized routes.
  if (/\.[a-z0-9]+$/i.test(pathname) && !pathname.endsWith(".ics")) {
    return NextResponse.next();
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  if (pathname === "/de" || pathname.startsWith("/de/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/de${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals and the public asset folders.
  matcher: [
    "/((?!_next/|api/|brand/|fonts/|videos/|photos/|social/|team/|partners/|universities/).*)",
  ],
};
