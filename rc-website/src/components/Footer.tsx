"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, MessageCircle, Instagram } from "lucide-react";
import { useConsent } from "@/contexts/ConsentContext";

const XIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 50 50"
    aria-hidden="true"
  >
    <path d="M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 50 50"
    aria-hidden="true"
  >
    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
  </svg>
);

export function Footer() {
  const { resetConsent } = useConsent();

  const handleCookieSettings = () => {
    resetConsent();
  };

  return (
    <footer className="bg-card text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start justify-between h-25">
          {/* Logo - Left */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo.svg"
                alt="Robotics Collective Logo"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <Image
                src="/logotext.svg"
                alt="Robotics Collective Text Logo"
                width={140}
                height={42}
                className="hidden md:block h-10 w-auto ml-4"
              />
            </Link>
          </div>

          {/* Navigation - Right */}
          <div className="text-right">
            <ul className="space-y-2 mt-2">
              <li>
                <Link
                  href="/about"
                  className="text-4xl hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-4xl hover:text-white transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/meetup"
                  className="text-4xl hover:text-white transition-colors"
                >
                  Meetup
                </Link>
              </li>
              <li>
                <Link
                  href="/positions"
                  className="text-4xl hover:text-white transition-colors"
                >
                  Positions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Icons - Bottom Left */}
          <div className="flex space-x-3 mb-4 md:mb-0">
            <a
              href="https://x.com/robocollectiv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full"
              aria-label="X (formerly Twitter)"
            >
              <XIcon />
            </a>
            <a
              href="https://www.instagram.com/roboticscollective/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/openroboticmetaverse"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/roboticscollective/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Robotics Collective | All rights
            reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/imprint"
              className="text-sm hover:text-white transition-colors"
            >
              Imprint
            </Link>
            <button
              onClick={handleCookieSettings}
              className="text-sm hover:text-white transition-colors"
            >
              Cookie Settings
            </button>
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-white transition-colors"
            >
              Powered by Netlify
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
