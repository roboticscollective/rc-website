"use client";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col justify-center items-start"
      style={{
        minHeight: "100vh",
        padding: "16vh 7vh 8vh",
        backgroundColor: "#212121",
        borderBottomLeftRadius: "4vh",
        borderBottomRightRadius: "4vh",
      }}
    >
      <AnimatedGridPattern
        width={90}
        height={90}
        numSquares={30}
        maxOpacity={0.18}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(100vh_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[160%] skew-y-12 fill-white/25 stroke-white/20"
        )}
      />

      <div className="relative z-10 max-w-[140vh]">
        <h1
          className="text-white"
          style={{
            fontSize: "9vh",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "3vh",
          }}
        >
          Together, we shape the future of robotics.
        </h1>
        <p
          style={{
            fontSize: "2.5vh",
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: "70vh",
            marginBottom: "5vh",
            color: "#ffffff99",
          }}
        >
          We are a community-driven collective, empowering each other to
          explore, build, and innovate through open collaboration.
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSd366e4bzN3yZAiWgNSJgT9FlJfaVEv0H0nMyTe3JKrQVj00Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
          style={{
            fontSize: "2vh",
            fontWeight: 900,
            padding: "2.5vh 6vh",
          }}
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
