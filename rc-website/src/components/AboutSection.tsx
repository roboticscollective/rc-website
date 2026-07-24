export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-light text-dark"
      style={{ padding: "14svh 5svh", minHeight: "100svh" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-[5svh]"
        style={{
          fontSize: "40svh",
          fontWeight: 500,
          lineHeight: 1,
          color: "#d8d8d8",
        }}
      >
        01
      </div>

      <div className="relative max-w-[150svh] mx-auto">
        <p
          className="uppercase mb-4"
          style={{
            letterSpacing: "0.3svh",
            color: "#666",
            fontSize: "1.8svh",
            fontWeight: 500,
          }}
        >
          01 · About the Collective
        </p>
        <h2
          className="mb-[6svh] max-w-[100svh]"
          style={{ fontSize: "8svh", fontWeight: 700, lineHeight: 1.05 }}
        >
          Bridging Aachen&apos;s <span className="text-brand">Robotics</span> Scene.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5svh] items-stretch">
          <div
            className="relative overflow-hidden bg-dark text-white"
            style={{
              borderRadius: "3svh",
              padding: "5svh",
              minHeight: "55svh",
            }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "linear-gradient(transparent 40%, #0d0d0de6 100%), url('/about.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <p
                style={{
                  fontSize: "3svh",
                  fontWeight: 500,
                  lineHeight: 1.3,
                  color: "#fff",
                  maxWidth: "40svh",
                }}
              >
                Since 2023, uniting passionate minds to shape the{" "}
                <span className="text-brand">future of robotics</span>.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-start gap-[3svh]">
            <p style={{ fontSize: "2.4svh", lineHeight: 1.5 }}>
              Founded in 2023 as <strong>open robotic metaverse</strong>, we
              quickly spotted a critical gap: Aachen's vibrant robotics
              community was booming, yet efforts remained scattered: research
              institutes, startups, companies, and student teams often tackling
              the same challenges in parallel, reinventing the wheel.
            </p>
            <p style={{ fontSize: "2.4svh", lineHeight: 1.5 }}>
              Robotics Collective was reborn to bridge that gap by uniting
              academic groups, industry experts, and passionate individuals in
              an open, collaborative ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
