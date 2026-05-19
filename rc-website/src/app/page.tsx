import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
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

export default function Home() {
  return (
    <main className="bg-light">
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <ProjectsSection />
      <FAQSection />
      <TeamSection />
    </main>
  );
}
