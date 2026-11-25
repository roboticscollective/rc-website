import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { NextEventStrip } from "@/components/NextEventStrip";
import { CommunitySection } from "@/components/CommunitySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TeamSection } from "@/components/TeamSection";
import { languageAlternates, SITE_URL, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = getDictionary(locale).meta;
  return {
    title: t.homeTitle,
    description: t.siteDescription,
    alternates: languageAlternates(locale, "/"),
  };
}

/** Lets search engines recognise the club as an organisation (name, logo, socials). */
const organizationJsonLd = (description: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Robotics Collective Aachen",
  alternateName: "Robotics Collective",
  legalName: "open robotic metaverse e.V.",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/rc-logo-512.png`,
  email: "info@roboticscollective.org",
  description,
  address: { "@type": "PostalAddress", addressLocality: "Aachen", addressCountry: "DE" },
  sameAs: [
    "https://www.instagram.com/roboticscollective/",
    "https://www.linkedin.com/company/roboticscollective/",
    "https://github.com/roboticscollective",
    "https://x.com/robocollectiv",
    "https://luma.com/user/robocollective",
  ],
});

/** Tells Google which name to show for the site in search results. */
const websiteJsonLd = (locale: Locale) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Robotics Collective Aachen",
  alternateName: "Robotics Collective",
  url: SITE_URL,
  inLanguage: locale,
  publisher: { "@id": `${SITE_URL}/#organization` },
});

/**
 * The next-event strip is time-dependent, so the page needs re-rendering on a
 * schedule — otherwise a finished event would linger until the next deploy.
 */
export const revalidate = 3600;

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="bg-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(dict.meta.siteDescription)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd(locale)) }}
      />
      <HeroSection t={dict.hero} video={dict.video} />
      <NextEventStrip locale={locale} t={dict.nextEvent} />
      <CommunitySection t={dict.community} />
      <ProjectsSection t={dict.projects} />
      <TeamSection t={dict.team} />
    </div>
  );
}
