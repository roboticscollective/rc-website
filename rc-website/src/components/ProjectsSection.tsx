const projects = [
  { id: "1", image: "/build-1.webp" },
  { id: "2", image: "/build-2.webp" },
  { id: "3", image: "/build-3.webp" },
  { id: "4", image: "/build-4.webp" },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-light text-dark"
      style={{ padding: "12svh 5svh", minHeight: "100svh" }}
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
        03
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
          03 · Behind the Build
        </p>
        <h2
          className="mb-[6svh] max-w-[100svh]"
          style={{ fontSize: "8svh", fontWeight: 700, lineHeight: 1.05 }}
        >
          Behind the <span className="text-brand">Build</span>.
        </h2>

        <div className="flex flex-col gap-[1svh]">
          <div className="flex flex-col md:flex-row gap-[1svh] md:h-[40svh]">
            {[projects[0], projects[1]].map((p) => (
              <ProjectCard key={p.id} image={p.image} />
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-[1svh] md:h-[40svh]">
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
        borderRadius: "3svh",
        backgroundImage: `linear-gradient(#00000040, #00000040), url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
}

export default ProjectsSection;
