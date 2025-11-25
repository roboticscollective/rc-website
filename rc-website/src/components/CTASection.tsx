"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getCldVideoUrl } from 'next-cloudinary';
import { trackDonationClick, trackEngagement, ENGAGEMENT_EVENTS } from "@/lib/analytics";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useRef, useEffect } from "react";

const CTASection = () => {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="cta" className="py-20 md:py-32 relative">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/80 z-10 backdrop-blur-[3px]"></div>
        {isInView ? (
          <>
            {/* Image placeholder */}
            <div 
              className={`absolute w-full h-full object-cover z-0 transition-opacity duration-500 ${
                videoLoaded ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                backgroundImage: `url(${getCldVideoUrl({
                  src: "ctavideo_galdsa",
                  format: "jpg",
                  quality: "auto",
                  width: isMobile ? 800 : 1200,
                  height: isMobile ? 600 : 800,
                })})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            
            {/* Optimized video */}
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className={`absolute w-full h-full object-cover z-0 transition-opacity duration-500 ${
                videoLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoadedData={() => setVideoLoaded(true)}
              onCanPlay={() => setVideoLoaded(true)}
              onError={() => setVideoLoaded(false)}
            >
              <source
                src={getCldVideoUrl({
                  src: "ctavideo_galdsa",
                  format: "webm",
                  quality: isMobile ? "70" : "auto",
                  width: isMobile ? 1280 : 1920,
                  height: isMobile ? 720 : 1080,
                })}
                type="video/webm"
              />
              <source
                src={getCldVideoUrl({
                  src: "ctavideo_galdsa",
                  format: "mp4",
                  quality: isMobile ? "70" : "auto",
                  width: isMobile ? 1280 : 1920,
                  height: isMobile ? 720 : 1080,
                })}
                type="video/mp4"
              />
            </video>
          </>
        ) : (
          // Placeholder while not in view
          <div className="w-full h-full bg-secondary/50" />
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Ready</span> to Join Forces?
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We're always looking for passionate individuals and organizations to
            collaborate with on cutting-edge robotics projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/positions">
              <Button
                variant="default"
                className="px-8 py-6 text-lg rounded-3xl"
                size="lg"
                onClick={() => trackEngagement(ENGAGEMENT_EVENTS.CTA_BUTTON_CLICK, {
                  button_text: 'Join Us',
                  destination: '/positions',
                  section: 'cta'
                })}
              >
                Join Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                className="px-8 py-6 text-lg rounded-3xl border-gray-300 text-gray-300 hover:bg-gray-300/10"
                size="lg"
                onClick={() => trackEngagement(ENGAGEMENT_EVENTS.CTA_BUTTON_CLICK, {
                  button_text: 'Get in Touch',
                  destination: '/contact',
                  section: 'cta'
                })}
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link
              href="https://donate.stripe.com/14k8zdbTm965h0c4gg"
              target="_blank"
            >
              <Button
                variant="secondary"
                className=" text-lg px-8 py-6 rounded-3xl"
                size="lg"
                onClick={() => trackDonationClick()}
              >
                Donate
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
