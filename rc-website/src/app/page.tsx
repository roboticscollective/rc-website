import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { NextEventStrip } from "@/components/NextEventStrip";
import { CommunitySection } from "@/components/CommunitySection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TeamSection } from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Robotics Collective Aachen | Home",
  description:
    "Robotics Collective Aachen is a robotics club for students from RWTH Aachen and FH Aachen.",
  alternates: { canonical: "/" },
};

/** Lets search engines recognise the club as an organisation (name, logo, socials). */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Robotics Collective Aachen",
  url: "https://roboticscollective.org",
  logo: "https://roboticscollective.org/brand/rc-logo-512.png",
  description:
    "Robotics Collective Aachen is a robotics club for students from RWTH Aachen and FH Aachen.",
  address: { "@type": "PostalAddress", addressLocality: "Aachen", addressCountry: "DE" },
  sameAs: [
    "https://www.instagram.com/roboticscollective/",
    "https://www.linkedin.com/company/roboticscollective/",
    "https://github.com/roboticscollective",
    "https://x.com/robocollectiv",
  ],
};

/**
 * The next-event strip is time-dependent, so the page needs re-rendering on a
 * schedule — otherwise a finished event would linger until the next deploy.
 */
export const revalidate = 3600;

export default function Home() {
  return (
    <main className="bg-light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <HeroSection />
      <NextEventStrip />
      <CommunitySection />
      <ProjectsSection />
      <TeamSection />
    </main>
  );
}
