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
import { EventNotification } from "@/components/EventNotification";
import { RecruitingToast } from "@/components/RecruitingToast";
import { ConsentProvider } from "@/contexts/ConsentContext";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { PageViewTracker } from "@/components/PageViewTracker";
import { ScrollTracker } from "@/components/ScrollTracker";
import type { EventData } from "@/components/EventNotification";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Sample event data - this could be fetched from your CMS
  const nextEvent: EventData = {
    id: "meetup-2025-08-23",
    title: "Robotics Community Meetup",
    date: new Date("2025-08-15T18:30:00"),
    time: {
      start: "6:30 PM",
      end: "9:00 PM"
    },
    location: {
      name: "Digital Church",
      city: "Aachen",
      country: "Germany",
      mapUrl: "https://maps.google.com/maps?q=Digital+Church,+Aachen,+Germany"
    },
    registrationUrl: "https://lu.ma/e61lkaj1",
    description: "Join us for an evening of robotics presentations, networking, and collaboration."
  };

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
            <TooltipProvider>
              <PageViewTracker />
              <ScrollTracker />
              {/* Event Banner - positioned above navbar */}
              <EventNotification 
                event={nextEvent}
                variant="banner"
                showDaysThreshold={365}
              />
              <Navbar />
              <main>{children}</main>
              <Footer />
              <RecruitingToast />
              <CookieConsentBanner />
              <Toaster />
              <Sonner />
            </TooltipProvider>
          </Providers>
        </ConsentProvider>
      </body>
    </html>
  );
}
