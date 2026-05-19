"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon, X } from "lucide-react";

const navLinks = [
  { num: "01", label: "About", href: "#about" },
  { num: "02", label: "Network", href: "#network" },
  { num: "03", label: "Projects", href: "#projects" },
  { num: "04", label: "FAQ", href: "#faq" },
  { num: "05", label: "Team", href: "#team" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pillClass = scrolled ? "btn-outline-pill-dark" : "btn-outline-pill";

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40"
      style={{ padding: "2vh 5vh" }}
    >
      <nav
        className={`transition-colors duration-200 ${
          scrolled ? "bg-white/95 backdrop-blur-sm" : "bg-transparent"
        }`}
        style={{
          padding: scrolled ? "1vh 2vh" : "0",
          borderRadius: scrolled ? "1.5vh" : "0",
          boxShadow: scrolled ? "0 1px 2px rgba(0,0,0,0.06)" : "none",
          maxWidth: "100%",
        }}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Robotics Collective Aachen home"
          >
            <Image
              src="/logo.svg"
              alt="Robotics Collective Aachen"
              width={48}
              height={48}
              className="h-[4vh] w-auto transition-all duration-300"
              style={{
                filter: scrolled ? "none" : "brightness(0) invert(1)",
              }}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center" style={{ gap: "1.5vh" }}>
            {navLinks.map((link) => (
              <a key={link.num} href={link.href} className={pillClass}>
                <span style={{ marginRight: "1.5vh", fontWeight: 500 }}>
                  {link.num}
                </span>
                {link.label}
              </a>
            ))}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSd366e4bzN3yZAiWgNSJgT9FlJfaVEv0H0nMyTe3JKrQVj00Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={pillClass}
              style={{ padding: "1vh 4vh" }}
            >
              Join us
            </a>
          </div>

          <button
            type="button"
            className="md:hidden transition-colors"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{ color: scrolled ? "#212121" : "#ffffff" }}
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className={`md:hidden mt-4 rounded-vh-md ${
              scrolled ? "bg-white" : "bg-dark/95 backdrop-blur-md"
            }`}
            style={{ padding: "3vh" }}
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.num}
                  href={link.href}
                  className={`${pillClass} w-fit`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span style={{ marginRight: "1.5vh", fontWeight: 500 }}>
                    {link.num}
                  </span>
                  {link.label}
                </a>
              ))}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSd366e4bzN3yZAiWgNSJgT9FlJfaVEv0H0nMyTe3JKrQVj00Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className={`${pillClass} w-fit`}
                style={{ padding: "1vh 4vh" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Join us
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
