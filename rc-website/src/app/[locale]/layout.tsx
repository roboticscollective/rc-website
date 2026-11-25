import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "../providers";
import { ConsentProvider } from "@/contexts/ConsentContext";
import { notFound } from "next/navigation";
import { isLocale, locales, ogLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const satoshi = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi-Variable.ttf",
      style: "normal",
      weight: "300 900",
    },
    {
      path: "../../../public/fonts/Satoshi-VariableItalic.ttf",
      style: "italic",
      weight: "300 900",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale).meta;

  return {
    title: "Robotics Collective Aachen",
    description: t.siteDescription,
    keywords: t.keywords,
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
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      title: "Robotics Collective Aachen",
      description: t.siteDescription,
      images: [{ url: "/social/og-default.jpg", width: 1200, height: 630, alt: t.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@robocollectiv",
      images: ["/social/og-default.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale as Locale);

  return (
    <html lang={locale} className={satoshi.variable}>
      <body className="font-satoshi">
        <ConsentProvider>
          <Providers>
            <Navbar locale={locale} t={dict.nav} />
            <main>{children}</main>
            <Footer locale={locale} t={dict.nav} f={dict.footer} />
          </Providers>
        </ConsentProvider>
      </body>
    </html>
  );
}
