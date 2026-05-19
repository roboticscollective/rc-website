"use client";

import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col justify-center items-start"
      style={{
        minHeight: "100dvh",
        padding:
          "clamp(7rem, 16vh, 14rem) clamp(1.5rem, 7vh, 6rem) clamp(4rem, 8vh, 8rem)",
        backgroundColor: "#212121",
        borderBottomLeftRadius: "4vh",
        borderBottomRightRadius: "4vh",
      }}
    >
      <InteractiveGridPattern
        width={90}
        height={90}
        squares={[24, 18]}
        className={cn(
          "[mask-image:radial-gradient(110vh_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[140%] w-[120%] skew-y-12 border-0"
        )}
        squaresClassName="stroke-white/20 hover:fill-white/15"
      />

      <div className="relative z-10 max-w-[140vh] pointer-events-none">
        <h1
          className="text-white"
          style={{
            fontSize: "clamp(3rem, min(9vh, 11vw), 6.5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "3vh",
          }}
        >
          Together, we shape the future of robotics.
        </h1>
        <p
          style={{
            fontSize: "clamp(1.15rem, min(2.5vh, 4.4vw), 1.75rem)",
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: "70vh",
            marginBottom: "4vh",
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
          className="btn-ghost pointer-events-auto"
          style={{
            fontSize: "clamp(0.75rem, 2vh, 1.25rem)",
            fontWeight: 900,
            padding:
              "clamp(0.7rem, 2.5vh, 2rem) clamp(1.5rem, 6vh, 4rem)",
          }}
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
