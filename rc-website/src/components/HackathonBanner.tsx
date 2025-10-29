"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function HackathonBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("hackathon-banner-dismissed-2025");
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("hackathon-banner-dismissed-2025", "true");
  };

  if (!isVisible) return null;

  return (
    <div>
      <div className="h-[52px]"></div>
      <div className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-red-accent/20 via-primary/20 to-yellow-secondary/20 border-b border-primary/30 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3">
            <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-accent rounded-full animate-pulse"></div>
                <span className="text-sm sm:text-base font-semibold text-white">
                  AI+Robotics Hackathon • November 20-21, 2025
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://luma.com/wfw8i9r5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="bg-red-accent hover:bg-red-accent/90 text-white font-semibold px-4 py-1 h-8 text-sm rounded-full"
                  >
                    Register Now
                  </Button>
                </a>
                <Link href="/hackathon">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-primary hover:text-primary/80 hover:bg-primary/10 font-semibold px-4 py-1 h-8 text-sm"
                  >
                    Learn More →
                  </Button>
                </Link>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="flex-shrink-0 text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
