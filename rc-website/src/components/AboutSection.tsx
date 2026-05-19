export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-light text-dark"
      style={{ padding: "14vh 5vh", minHeight: "100vh" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-[5vh]"
        style={{
          fontSize: "40vh",
          fontWeight: 500,
          lineHeight: 1,
          color: "#d8d8d8",
        }}
      >
        01
      </div>

      <div className="relative max-w-[150vh] mx-auto">
        <p
          className="uppercase mb-4"
          style={{
            letterSpacing: "0.3vh",
            color: "#666",
            fontSize: "1.8vh",
            fontWeight: 500,
          }}
        >
          01 — About the Collective
        </p>
        <h2
          className="mb-[6vh] max-w-[100vh]"
          style={{ fontSize: "8vh", fontWeight: 700, lineHeight: 1.05 }}
        >
          Bridging Aachen's Robotics Scene.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vh] items-stretch">
          <div
            className="relative overflow-hidden bg-dark text-white"
            style={{
              borderRadius: "3vh",
              padding: "5vh",
              minHeight: "55vh",
            }}
          >
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage:
                  "linear-gradient(transparent 40%, #212121e6 100%), url('/1%20-%20About.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <p
                style={{
                  fontSize: "3vh",
                  fontWeight: 500,
                  lineHeight: 1.3,
                  color: "#fff",
                  maxWidth: "40vh",
                }}
              >
                Since 2023, uniting passionate minds to shape the future of
                robotics.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-[3vh]">
            <p style={{ fontSize: "2.4vh", lineHeight: 1.5 }}>
              Founded in 2023 as <strong>open robotic metaverse</strong>, we
              quickly spotted a critical gap: Aachen's vibrant robotics
              community was booming, yet efforts remained scattered — research
              institutes, startups, companies, and student teams often tackling
              the same challenges in parallel, reinventing the wheel.
            </p>
            <p style={{ fontSize: "2.4vh", lineHeight: 1.5 }}>
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
