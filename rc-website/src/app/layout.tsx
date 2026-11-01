import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { ConsentProvider } from "@/contexts/ConsentContext";

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
  description: "Robotics Collective Aachen is a robotics club for students from RWTH Aachen and FH Aachen.",
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
  // Link previews (WhatsApp, LinkedIn, Slack, …). Pages that set their own
  // `openGraph` replace this whole object, so they must repeat `images`.
  openGraph: {
    type: "website",
    siteName: "Robotics Collective Aachen",
    locale: "en_GB",
    title: "Robotics Collective Aachen",
    description:
      "Robotics Collective Aachen is a robotics club for students from RWTH Aachen and FH Aachen.",
    images: [{ url: "/social/og-default.jpg", width: 1200, height: 630, alt: "Robotics Collective Aachen community meetup" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@robocollectiv",
    images: ["/social/og-default.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body className="font-satoshi">
        <ConsentProvider>
          <Providers>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </Providers>
        </ConsentProvider>
      </body>
    </html>
  );
}
