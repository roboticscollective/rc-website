const projects = [
  { id: "1", image: "/More%20-%201.jpeg" },
  { id: "2", image: "/More%20-%202.jpg" },
  { id: "3", image: "/More%20-3.png" },
  { id: "4", image: "/More%20-%204.jpeg" },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-light text-dark"
      style={{ padding: "12vh 5vh", minHeight: "100vh" }}
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
        03
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
          03 — Behind the Build
        </p>
        <h2
          className="mb-[6vh] max-w-[100vh]"
          style={{ fontSize: "8vh", fontWeight: 700, lineHeight: 1.05 }}
        >
          Behind the Build.
        </h2>

        <div className="flex flex-col gap-[1vh]">
          <div className="flex flex-col md:flex-row gap-[1vh] md:h-[40vh]">
            {[projects[0], projects[1]].map((p) => (
              <ProjectCard key={p.id} image={p.image} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-[1vh] md:h-[40vh]">
            {[projects[2], projects[3]].map((p) => (
              <ProjectCard key={p.id} image={p.image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ image }: { image: string }) {
  return (
    <div
      className="md:flex-1 overflow-hidden bg-dark aspect-video md:aspect-auto"
      style={{
        borderRadius: "3vh",
        backgroundImage: `linear-gradient(#00000040, #00000040), url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export default ProjectsSection;
