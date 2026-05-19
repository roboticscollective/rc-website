"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Instagram } from "lucide-react";
import { useConsent } from "@/contexts/ConsentContext";

const XIcon = () => (
  <svg
    style={{ width: "2.5vh", height: "2.5vh" }}
    fill="currentColor"
    viewBox="0 0 50 50"
    aria-hidden="true"
  >
    <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    style={{ width: "2.5vh", height: "2.5vh" }}
    fill="currentColor"
    viewBox="0 0 50 50"
    aria-hidden="true"
  >
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
  </svg>
);

export function Footer() {
  const { resetConsent } = useConsent();

  return (
    <footer
      className="bg-dark text-white overflow-hidden"
      style={{ padding: "8vh 5vh 4vh" }}
    >
      <div className="max-w-[180vh] mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-[4vh] mb-[6vh]">
          <Link href="/" className="flex items-center" aria-label="Robotics Collective Aachen home">
            <Image
              src="/logo.svg"
              alt="Robotics Collective Aachen"
              width={64}
              height={64}
              style={{ height: "6vh", width: "auto", filter: "brightness(0) invert(1)" }}
            />
          </Link>

          <nav className="flex flex-col lg:flex-row gap-[2vh] lg:gap-[3vh] text-left lg:text-right">
            <a href="#about" className="text-h5 hover:opacity-70 transition-opacity">
              About
            </a>
            <a href="#network" className="text-h5 hover:opacity-70 transition-opacity">
              Network
            </a>
            <a href="#projects" className="text-h5 hover:opacity-70 transition-opacity">
              Projects
            </a>
            <a href="#team" className="text-h5 hover:opacity-70 transition-opacity">
              Team
            </a>
          </nav>
        </div>

        <div
          className="border-t border-white-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[2vh]"
          style={{ paddingTop: "3vh" }}
        >
          <div className="flex gap-[1.5vh]">
            <a
              href="https://x.com/robocollectiv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="X (Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="https://www.instagram.com/roboticscollective/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram style={{ width: "2.5vh", height: "2.5vh" }} />
            </a>
            <a
              href="https://github.com/roboticscollective"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="GitHub"
            >
              <Github style={{ width: "2.5vh", height: "2.5vh" }} />
            </a>
            <a
              href="https://www.linkedin.com/company/roboticscollective/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          <p className="text-small" style={{ color: "#ffffff99" }}>
            © {new Date().getFullYear()} Robotics Collective Aachen. All rights reserved.
          </p>

          <div className="flex gap-[2vh] text-small" style={{ color: "#ffffff99" }}>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/imprint" className="hover:text-white transition-colors">
              Imprint
            </Link>
            <button
              onClick={resetConsent}
              className="hover:text-white transition-colors"
            >
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
