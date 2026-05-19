"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";

const navLinks = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Network", href: "#network" },
  { num: "03", label: "Build", href: "#projects" },
  { num: "04", label: "FAQ", href: "#faq" },
  { num: "05", label: "Team", href: "#team" },
];

const JOIN_HREF =
  "https://docs.google.com/forms/d/e/1FAIpQLSd366e4bzN3yZAiWgNSJgT9FlJfaVEv0H0nMyTe3JKrQVj00Q/viewform";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(true);

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
        style={{ padding: "2vh 5vh" }}
      >
        <nav
          className={`transition-all duration-200 ${
            scrolled ? "bg-white/95 backdrop-blur-sm mx-auto" : "bg-transparent"
          }`}
          style={{
            padding: scrolled ? "0.8vh 1.6vh" : "0",
            borderRadius: scrolled ? "1.5vh" : "0",
            boxShadow: scrolled ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
            maxWidth: scrolled ? "fit-content" : "100%",
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ gap: "3vh" }}
          >
            <Link
              href="/"
              className="flex items-center"
              aria-label="Robotics Collective Aachen home"
            >
              <Image
                src={scrolled ? "/RC_Logo_Dark.svg" : "/logo.svg"}
                alt="Robotics Collective Aachen"
                width={48}
                height={48}
                className="h-[4vh] w-auto transition-all duration-300"
                priority
              />
            </Link>

            <div className="flex items-center" style={{ gap: "1.5vh" }}>
              {navLinks.map((link) => (
                <a key={link.num} href={link.href} className={pillClass}>
                  <span style={{ marginRight: "1.5vh", fontWeight: 500 }}>
                    {link.num}
                  </span>
                  {link.label}
                </a>
              ))}
              <a
                href={JOIN_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={pillClass}
                style={{ padding: "1vh 4vh" }}
              >
                Join us
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile + iPad-portrait floating pill */}
      <div
        className="lg:hidden fixed top-0 left-0 right-0 z-40 flex justify-center pointer-events-none transition-all duration-300"
        style={{
          padding: "1.8vh 1.5rem",
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
            border: scrolled ? "1.5px solid #21212122" : "1.5px solid #ffffff55",
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
            href="/"
            className="flex items-center"
            aria-label="Robotics Collective Aachen home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src={scrolled ? "/RC_Logo_Dark.svg" : "/logo.svg"}
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
            aria-label="Open menu"
            className="flex items-center justify-center transition-transform active:scale-95"
            style={{
              width: "2.25rem",
              height: "2.25rem",
              borderRadius: "999px",
              background: scrolled ? "#212121" : "#ffffff",
              color: scrolled ? "#ffffff" : "#212121",
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
          background: "#212121",
        }}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="flex flex-col h-full w-full"
          style={{ padding: "1.8vh 1.5rem 3rem" }}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center"
              aria-label="Robotics Collective Aachen home"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/logo.svg"
                alt="Robotics Collective Aachen"
                width={48}
                height={48}
                style={{ height: "1.5rem", width: "auto" }}
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center active:scale-95 transition-transform"
              style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "999px",
                background: "#ffffff",
                color: "#212121",
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
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-baseline gap-4 text-white active:opacity-70 transition-opacity"
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
          </nav>

          <a
            href={JOIN_HREF}
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
            Join us
          </a>
        </div>
      </div>
    </>
  );
}
