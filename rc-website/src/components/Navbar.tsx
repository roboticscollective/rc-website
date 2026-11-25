"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";
import { JOIN_FORM_URL } from "@/lib/links";
import { localePath, switchLocalePath, visiblePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function Navbar({ locale, t }: { locale: Locale; t: Dictionary["nav"] }) {
  const navLinks = [
    { num: "01", label: t.community, hash: "#community" },
    { num: "02", label: t.build, hash: "#projects" },
    { num: "03", label: t.team, hash: "#team" },
  ];
  const otherLocale: Locale = locale === "de" ? "en" : "de";
  const [scrolledPast, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(true);
  const pathname = visiblePath(usePathname());
  const home = localePath(locale, "/");
  const eventsHref = localePath(locale, "/events");
  const switchHref = switchLocalePath(pathname, otherLocale);

  // Imprint and privacy start on a light background, where the transparent
  // white navbar is invisible — show the solid (scrolled) style right away.
  const lightTop = /^(\/en)?\/(imprint|privacy)$/.test(pathname);
  const scrolled = scrolledPast || lightTop;
  const overlayRef = useRef<HTMLDivElement>(null);

  // `inert` keeps the hidden menu's links out of the keyboard tab order.
  // React 18 doesn't support the attribute as a prop, so set it directly.
  useEffect(() => {
    overlayRef.current?.toggleAttribute("inert", !mobileMenuOpen);
  }, [mobileMenuOpen]);

  // Bare "#about" only resolves on the landing page; anywhere else it has to
  // navigate home first.
  const onLanding = pathname === home;
  const sectionHref = (hash: string) => (onLanding ? hash : `${home}${hash}`);

  useEffect(() => {
    let lastY = typeof window !== "undefined" ? window.scrollY : 0;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      const delta = y - lastY;
      if (y <= 10) {
        setMobileVisible(true);
      } else if (delta > 4) {
        setMobileVisible(false);
      } else if (delta < -4) {
        setMobileVisible(true);
      }
      lastY = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileMenuOpen]);

  const pillClass = scrolled ? "btn-outline-pill-dark" : "btn-outline-pill";

  return (
    <>
      {/* Desktop / iPad-landscape navbar (lg+) */}
      <div
        className={`hidden lg:block fixed top-0 left-0 right-0 z-40 ${
          scrolled ? "" : ""
        }`}
        style={{ padding: "2svh 5svh" }}
      >
        <nav
          className={`transition-all duration-200 ${
            scrolled ? "bg-white/95 backdrop-blur-sm mx-auto" : "bg-transparent"
          }`}
          style={{
            padding: scrolled ? "0.8svh 1.6svh" : "0",
            borderRadius: scrolled ? "1.5svh" : "0",
            boxShadow: scrolled ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
            maxWidth: scrolled ? "fit-content" : "100%",
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ gap: "3svh" }}
          >
            <Link
              href={home}
              className="flex items-center"
              aria-label={t.homeAria}
            >
              <Image
                src={scrolled ? "/brand/rc-logo-black.svg" : "/brand/rc-logo-white.svg"}
                alt="Robotics Collective Aachen"
                width={48}
                height={48}
                className="h-[4svh] w-auto transition-all duration-300"
                priority
              />
            </Link>

            <div className="flex items-center" style={{ gap: "1.5svh" }}>
              {navLinks.map((link) => (
                <a
                  key={link.num}
                  href={sectionHref(link.hash)}
                  className={pillClass}
                >
                  <span style={{ marginRight: "1.5svh", fontWeight: 500 }}>
                    {link.num}
                  </span>
                  {link.label}
                </a>
              ))}
              <Link href={eventsHref} className={pillClass}>
                {t.events}
              </Link>
              <a
                href={JOIN_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={pillClass}
              >
                {t.join}
              </a>
              {/* Plain <a>: switching language reloads the page with the other <html lang>. */}
              <a
                href={switchHref}
                hrefLang={otherLocale}
                lang={otherLocale}
                aria-label={t.switchAria}
                className={pillClass}
              >
                {t.switchLabel}
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile + iPad-portrait floating pill */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-300"
        style={{
          padding: "1.8svh 1.5rem",
          transform: mobileVisible ? "translateY(0)" : "translateY(-150%)",
          opacity: mobileVisible ? 1 : 0,
        }}
      >
        <div
          className="pointer-events-auto flex items-center transition-colors duration-200"
          style={{
            gap: "1.25rem",
            padding: "0.45rem 0.45rem 0.45rem 1.1rem",
            borderRadius: "999px",
            border: scrolled ? "1.5px solid #0d0d0d22" : "1.5px solid #ffffff55",
            background: scrolled
              ? "rgba(255,255,255,0.92)"
              : "rgba(33,33,33,0.55)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            boxShadow: scrolled
              ? "0 2px 12px rgba(0,0,0,0.08)"
              : "0 2px 14px rgba(0,0,0,0.25)",
          }}
        >
          <Link
            href={home}
            className="flex items-center"
            aria-label={t.homeAria}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src={scrolled ? "/brand/rc-logo-black.svg" : "/brand/rc-logo-white.svg"}
              alt="Robotics Collective Aachen"
              width={48}
              height={48}
              style={{ height: "1.5rem", width: "auto" }}
              priority
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label={t.openMenu}
            className="flex items-center justify-center transition-transform active:scale-95"
            style={{
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "999px",
              background: scrolled ? "#0d0d0d" : "#ffffff",
              color: scrolled ? "#ffffff" : "#0d0d0d",
              border: "none",
            }}
          >
            <MenuIcon size={18} strokeWidth={2.25} />
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "#0d0d0d",
        }}
        aria-hidden={!mobileMenuOpen}
        ref={overlayRef}
      >
        <div
          className="flex flex-col h-full w-full"
          style={{ padding: "1.8svh 1.5rem 3rem" }}
        >
          <div className="flex items-center justify-between">
            <Link
              href={home}
              className="flex items-center"
              aria-label={t.homeAria}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/brand/rc-logo-white.svg"
                alt="Robotics Collective Aachen"
                width={48}
                height={48}
                style={{ height: "1.5rem", width: "auto" }}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label={t.closeMenu}
              className="flex items-center justify-center active:scale-95 transition-transform"
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#0d0d0d",
                border: "none",
              }}
            >
              <X size={18} strokeWidth={2.25} />
            </button>
          </div>

          <nav className="flex-1 flex flex-col justify-center items-start gap-6 pl-2">
            {navLinks.map((link) => (
              <a
                key={link.num}
                href={sectionHref(link.hash)}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline gap-4 text-white hover:text-brand active:text-brand transition-colors"
                style={{ fontSize: "2.25rem", fontWeight: 600, lineHeight: 1.1 }}
              >
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#ffffff70",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {link.num}
                </span>
                {link.label}
              </a>
            ))}
            <Link
              href={eventsHref}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-baseline gap-4 text-white hover:text-brand active:text-brand transition-colors"
              style={{ fontSize: "2.25rem", fontWeight: 600, lineHeight: 1.1 }}
            >
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "#47A8BD",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                &rarr;
              </span>
              {t.events}
            </Link>
            <a
              href={switchHref}
              hrefLang={otherLocale}
              lang={otherLocale}
              aria-label={t.switchAria}
              className="flex items-baseline gap-4 text-white/70 hover:text-brand active:text-brand transition-colors"
              style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.1, marginTop: "1rem" }}
            >
              {otherLocale === "en" ? "English" : "Deutsch"}
            </a>
          </nav>

          <a
            href={JOIN_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center text-white active:scale-[0.98] transition-transform"
            style={{
              width: "100%",
              padding: "1.1rem",
              borderRadius: "999px",
              border: "1.5px solid #ffffff",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {t.join}
          </a>
        </div>
      </div>
    </>
  );
}
