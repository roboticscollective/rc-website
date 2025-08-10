'use client'

import React from "react";
import Image from "next/image";
import { buildImageUrl } from "@/lib/sanity";

interface Partner {
  _id: string;
  name: string;
  website?: string;
  logo?: any;
  logoUrl?: {
    url: string;
    alt?: string;
  };
  isActive?: boolean;
  partnershipType?: string;
}

interface LogoCarouselProps {
  partners: Partner[];
  title?: string;
  showOnlyActive?: boolean;
}

export function LogoCarousel({
  partners,
  title = "Partners",
  showOnlyActive = false,
}: LogoCarouselProps) {
  // Filter partners based on showOnlyActive prop
  const displayPartners = showOnlyActive
    ? partners.filter((partner) => partner.isActive === true)
    : partners;

  if (!displayPartners.length) {
    return null;
  }

  // helper
  const isSvg = (url: string) => url?.toLowerCase().endsWith(".svg");

  // Double the array for continuous loop
  const doubledPartners = [...displayPartners, ...displayPartners];

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">{title.split(" ")[0]}</span>
          {title.split(" ").slice(1).join(" ") && (
            <span className="text-white">
              {" "}
              {title.split(" ").slice(1).join(" ")}
            </span>
          )}
        </h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Masks for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex items-center">
            <div
              className="flex items-center animate-scroll hover:[animation-play-state:paused]"
              style={{
                animationDuration: `${displayPartners.length * 5}s`,
              }}
            >
              {doubledPartners.map((partner, index) => {
                const logoUrl =
                  partner.logoUrl?.url ||
                  (partner.logo ? buildImageUrl(partner.logo) : null);
                if (!logoUrl) return null;

                return (
                  <div
                    key={`${partner._id}-${index}`}
                    className="flex-shrink-0 px-4 sm:px-6 md:px-8 lg:px-10"
                  >
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                      aria-label={`Visit ${partner.name} website`}
                    >
                      <div className="relative w-32 h-14 sm:w-36 sm:h-16 md:w-44 md:h-18 lg:w-52 lg:h-20">
                        {isSvg(logoUrl) ? (
                          <img
                            src={logoUrl}
                            alt={partner.logoUrl?.alt || partner.name}
                            className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-110"
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <Image
                            src={logoUrl}
                            alt={partner.logoUrl?.alt || partner.name}
                            fill
                            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, (max-width: 1024px) 176px, 208px"
                            className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter group-hover:brightness-110"
                            priority={false}
                          />
                        )}
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
