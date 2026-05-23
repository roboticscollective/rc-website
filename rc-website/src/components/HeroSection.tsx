"use client";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col justify-center items-center"
      style={{
        minHeight: "100dvh",
        padding:
          "clamp(7rem, 16vh, 14rem) clamp(1.5rem, 7vh, 6rem) clamp(4rem, 8vh, 8rem)",
        backgroundColor: "#0d0d0d",
        borderBottomLeftRadius: "4vh",
        borderBottomRightRadius: "4vh",
      }}
    >
      {/* Looped video — centered card behind the hero content */}
      <div
        aria-hidden="true"
        className="hidden md:block pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "min(88%, 160vh)",
          height: "min(80%, 80vh)",
          borderRadius: "3vh",
          overflow: "hidden",
          boxShadow:
            "inset 0 0 0 1px #ffffff14, 0 0 80px -20px #47A8BD33",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/teleoperation-ur5-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.32 }}
        >
          <source src="/videos/teleoperation-ur5-web.webm" type="video/webm" />
          <source src="/videos/teleoperation-ur5-web.mp4" type="video/mp4" />
        </video>
        {/* Dark gradient overlay for text legibility on the left */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #0d0d0de6 0%, #0d0d0db3 40%, #0d0d0d66 100%), radial-gradient(120% 100% at 20% 30%, transparent 0%, #0d0d0dcc 80%)",
          }}
        />
        {/* Subtle brand-tinted vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 85% 100%, #47A8BD22 0%, transparent 60%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[140vh] pointer-events-none text-left">
        <h1
          className="text-white"
          style={{
            fontSize: "clamp(3rem, min(9vh, 11vw), 6.5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            marginBottom: "3vh",
          }}
        >
          Together, we shape the{" "}
          <span className="text-brand">future of robotics</span>.
        </h1>
        <p
          style={{
            fontSize: "clamp(1.15rem, min(2.5vh, 4.4vw), 1.75rem)",
            fontWeight: 500,
            lineHeight: 1.4,
            maxWidth: "70vh",
            marginBottom: "4vh",
            color: "#ffffffcc",
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
            fontSize: "clamp(0.65rem, 1.5vh, 0.95rem)",
            fontWeight: 800,
            padding:
              "clamp(0.5rem, 1.6vh, 1rem) clamp(1.1rem, 3.5vh, 2.25rem)",
          }}
        >
          Apply Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
