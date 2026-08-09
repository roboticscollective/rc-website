import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found | Robotics Collective Aachen",
  description: "The page you're looking for couldn't be found.",
  robots: { index: false, follow: true },
};

const suggestions = [
  { label: "Home", href: "/", hint: "Start from the top" },
  { label: "Events", href: "/events", hint: "What's coming up in Aachen" },
  { label: "About", href: "/#about", hint: "Who we are" },
  { label: "Team", href: "/#team", hint: "The people behind it" },
];

export default function NotFound() {
  return (
    <div
      className="relative w-full overflow-hidden flex flex-col justify-center bg-dark text-white"
      style={{
        minHeight: "100svh",
        padding:
          "clamp(7rem, 16svh, 14rem) clamp(1.5rem, 5svh, 4rem) clamp(4rem, 8svh, 8rem)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 20%, #47A8BD26 0%, transparent 60%), radial-gradient(70% 60% at 10% 90%, #47A8BD1a 0%, transparent 55%)",
        }}
      />

      <div
        className="relative z-10 w-full"
        style={{ maxWidth: "150svh", margin: "0 auto" }}
      >
        <p
          className="uppercase"
          style={{
            letterSpacing: "0.3svh",
            color: "#ffffff99",
            fontSize: "clamp(0.7rem, 1.8svh, 1rem)",
            fontWeight: 500,
            marginBottom: "2svh",
          }}
        >
          Error 404
        </p>

        <h1
          style={{
            fontSize: "clamp(4rem, min(20svh, 26vw), 14rem)",
            fontWeight: 800,
            lineHeight: 0.9,
            marginBottom: "3svh",
          }}
        >
          4<span className="text-brand">0</span>4
        </h1>

        <p
          style={{
            fontSize: "clamp(1.15rem, min(2.8svh, 5vw), 1.9rem)",
            fontWeight: 600,
            lineHeight: 1.3,
            marginBottom: "1.5svh",
          }}
        >
          This page went off and joined another collective.
        </p>
        <p
          style={{
            fontSize: "clamp(0.9rem, 2.1svh, 1.15rem)",
            lineHeight: 1.5,
            color: "#ffffff99",
            maxWidth: "70svh",
            marginBottom: "6svh",
          }}
        >
          The link is broken or the page has moved. Here is where you probably
          wanted to go.
        </p>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: "1.5svh", maxWidth: "110svh" }}
        >
          {suggestions.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center justify-between w-full transition-colors"
                style={{
                  gap: "1rem",
                  padding: "clamp(1rem, 2.4svh, 1.6rem) clamp(1.25rem, 3svh, 2rem)",
                  borderRadius: "2svh",
                  background: "#ffffff0d",
                  border: "1px solid #ffffff1f",
                }}
              >
                <span className="min-w-0">
                  <span
                    className="block"
                    style={{
                      fontSize: "clamp(0.95rem, 2.1svh, 1.2rem)",
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="block"
                    style={{
                      fontSize: "clamp(0.75rem, 1.6svh, 0.9rem)",
                      color: "#ffffff80",
                    }}
                  >
                    {item.hint}
                  </span>
                </span>
                <ArrowRight
                  size={18}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
