import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { NextEventStrip } from "@/components/NextEventStrip";
import { AboutSection } from "@/components/AboutSection";
import { VisionSection } from "@/components/VisionSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FAQSection } from "@/components/FAQSection";
import { TeamSection } from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Robotics Collective Aachen | Home",
  description:
    "A collective of engineers and AI enthusiasts pushing the boundaries of robotic intelligence.",
};

/**
 * The next-event strip is time-dependent, so the page needs re-rendering on a
 * schedule — otherwise a finished event would linger until the next deploy.
 */
export const revalidate = 3600;

export default function Home() {
  return (
    <main className="bg-light">
      <HeroSection />
      <NextEventStrip />
      <AboutSection />
      <VisionSection />
      <ProjectsSection />
      <FAQSection />
      <TeamSection />
    </main>
  );
}
