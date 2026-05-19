import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { ConsentProvider } from "@/contexts/ConsentContext";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Variable.ttf",
      style: "normal",
      weight: "300 900",
    },
    {
      path: "../../public/fonts/Satoshi-VariableItalic.ttf",
      style: "italic",
      weight: "300 900",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Robotics Collective Aachen",
  description: "Together, we shape the future of robotics. Founding member of ESRA.",
  keywords: ["robotics", "community", "tech", "projects", "meetups", "aachen", "esra"],
  authors: [{ name: "Robotics Collective Aachen Team" }],
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
  return (
    <html lang="en" className={satoshi.variable}>
      <head>
        {GA_MEASUREMENT_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="font-satoshi bg-light text-dark">
        <ConsentProvider>
          <Providers>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <CookieConsentBanner />
          </Providers>
        </ConsentProvider>
      </body>
    </html>
  );
}
