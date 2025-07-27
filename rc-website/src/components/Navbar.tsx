"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { EventNotification } from "@/components/EventNotification";
import type { EventData } from "@/components/EventNotification";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  // Sample event data - this could be fetched from your CMS
  const nextEvent: EventData = {
    id: "meetup-2025-04-23",
    title: "Robotics Community Meetup",
    date: new Date("2025-08-23T18:30:00"),
    time: {
      start: "6:30 PM",
      end: "9:00 PM",
    },
    location: {
      name: "Digital Church",
      city: "Aachen",
      country: "Germany",
      mapUrl: "https://maps.google.com/maps?q=Digital+Church,+Aachen,+Germany",
    },
    registrationUrl: "https://lu.ma/e61lkaj1",
    description:
      "Join us for an evening of robotics presentations, networking, and collaboration.",
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActivePath = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobile
          ? "backdrop-blur-md"
          : isScrolled
          ? "backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Robotics Collective Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src="/logotext.svg"
                alt="Robotics Collective"
                width={150}
                height={30}
                className={`h-8 w-auto transition-opacity duration-300ms ${
                  isScrolled || mobileMenuOpen
                    ? "opacity-0 max-w-[150-px]"
                    : "opacity-100 max-w-[150px]"
                }`}
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActivePath("/")
                  ? "text-white font-medium glow"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${
                isActivePath("/about")
                  ? "text-white font-medium glow"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`transition-colors ${
                isActivePath("/projects")
                  ? "text-white font-medium glow"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Projects
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/meetup"
                className={`transition-colors ${
                  isActivePath("/meetup")
                    ? "text-white font-medium glow"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Meetup
              </Link>
              <EventNotification
                event={nextEvent}
                variant="badge"
                showDaysThreshold={30}
              />
            </div>
            <Link
              href="/contact"
              className={`transition-colors ${
                isActivePath("/contact")
                  ? "text-white font-medium glow"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Link href="/positions">
              <Button variant="default">Join Us</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-md">
          <div className="container mx-auto px-4 pt-2 pb-4 space-y-4">
            <Link
              href="/"
              className={`block py-2 transition-colors ${
                isActivePath("/")
                  ? "text-white font-medium glow"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block py-2 transition-colors ${
                isActivePath("/about")
                  ? "text-white font-medium glow"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={`block py-2 transition-colors ${
                isActivePath("/projects")
                  ? "text-white font-medium glow"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <div className="flex items-center justify-between py-2">
              <Link
                href="/meetup"
                className={`transition-colors ${
                  isActivePath("/meetup")
                    ? "text-white font-medium glow"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Meetup
              </Link>
              <EventNotification
                event={nextEvent}
                variant="badge"
                showDaysThreshold={30}
              />
            </div>
            <Link
              href="/contact"
              className={`block py-2 transition-colors ${
                isActivePath("/contact")
                  ? "text-white font-medium glow"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/positions" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="default">Join Us</Button>
            </Link>
          </div>
        </div>
      )}

      {/* Event Banner integrated into navbar */}
      <EventNotification 
        event={nextEvent}
        variant="banner"
        showDaysThreshold={365}
      />
    </nav>
  );
}
