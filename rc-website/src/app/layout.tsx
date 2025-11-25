import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { TooltipProvider } from "./tooltip-provider";
import { BannerWrapper } from "@/components/BannerWrapper";
import { RecruitingToast } from "@/components/RecruitingToast";
import { ConsentProvider } from "@/contexts/ConsentContext";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { BannerProvider } from "@/contexts/BannerContext";
import { PageViewTracker } from "@/components/PageViewTracker";
import { ScrollTracker } from "@/components/ScrollTracker";
import type { EventData } from "@/components/EventNotification";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";
import { getWebsiteSettings, getNextUpcomingEvent } from "@/lib/sanity-queries";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Robotics Collective",
  description: "Together, we shape the future of robotics",
  keywords: ["robotics", "community", "tech", "projects", "meetups"],
  authors: [{ name: "Robotics Collective Team" }],
  metadataBase: new URL("https://roboticscollective.org"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch global data at build time
  const [websiteSettings, sanityEvent] = await Promise.all([
    getWebsiteSettings(),
    getNextUpcomingEvent()
  ]);

  // Transform Sanity Event to EventData format for components
  const nextEvent: EventData | null = sanityEvent ? {
    id: sanityEvent._id,
    title: sanityEvent.title,
    date: new Date(sanityEvent.eventDate),
    time: {
      start: sanityEvent.location?.isOnline ? "Online" : "6:30 PM", // Could be dynamic from Sanity
      end: sanityEvent.endDate ? new Date(sanityEvent.endDate).toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit' 
      }) : "9:00 PM"
    },
    location: {
      name: sanityEvent.location?.venue || "TBA",
      city: sanityEvent.location?.city || "Aachen",
      country: "Germany",
      mapUrl: sanityEvent.location?.venue ? 
        `https://maps.google.com/maps?q=${encodeURIComponent(sanityEvent.location.venue + ', ' + sanityEvent.location.city)}` : 
        undefined
    },
    registrationUrl: sanityEvent.registrationInfo?.registrationLink || "#",
    description: "Join us for an exciting robotics event!"
  } : null;

  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <head>
        {/* Google Analytics - Only load script, initialization handled by consent */}
        {GA_MEASUREMENT_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="font-spaceGrotesk">
        <ConsentProvider>
          <Providers>
            <BannerProvider>
              <TooltipProvider>
                <PageViewTracker />
                <ScrollTracker />
                {/* Event Banner - positioned above navbar */}
                <BannerWrapper
                  event={nextEvent}
                  settings={websiteSettings}
                  showDaysThreshold={websiteSettings?.eventControls?.bannerShowDaysThreshold || 365}
                />
                <Navbar
                  nextEvent={nextEvent}
                  settings={websiteSettings}
                />
              <main>{children}</main>
              <Footer />
              <RecruitingToast 
                settings={websiteSettings}
                delay={websiteSettings?.recruitingControls?.recruitingToastDelay || 3000}
              />
              <CookieConsentBanner />
              <Toaster />
              <Sonner />
              </TooltipProvider>
            </BannerProvider>
          </Providers>
        </ConsentProvider>
      </body>
    </html>
  );
}
