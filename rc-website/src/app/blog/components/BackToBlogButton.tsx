"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBanner } from "@/contexts/BannerContext";

export function BackToBlogButton() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { bannerDismissed } = useBanner();
  const pathname = usePathname();

  // Check if banner should be visible (similar logic to Navbar)
  const shouldShowBanner = !bannerDismissed && pathname !== "/meetup";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate top padding based on navbar state
  const getTopPadding = () => {
    if (isScrolled) {
      return "pt-24"; // Fixed navbar height + padding
    } else if (shouldShowBanner) {
      return "pt-32 sm:pt-28"; // Banner height + navbar height + padding
    } else {
      return "pt-24"; // Just navbar height + padding
    }
  };

  return (
    <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${getTopPadding()}`}>
      <Link href="/blog">
        <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>
      </Link>
    </div>
  );
}