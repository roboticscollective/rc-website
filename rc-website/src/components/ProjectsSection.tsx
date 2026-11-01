import Image from "next/image";

const photos = [
  { src: "/photos/build/build-01.webp", width: 2000, height: 1500 },
  { src: "/photos/build/build-02.webp", width: 2000, height: 1333 },
  { src: "/photos/build/build-03.webp", width: 2000, height: 1339 },
  { src: "/photos/build/build-04.webp", width: 1086, height: 724 },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-light text-dark">
      <div className="mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8 lg:px-12 lg:pb-24">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#666] sm:text-xs">
          0.3/ Behind the Build
        </p>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          {photos.map((p) => (
            <div
              key={p.src}
              className="relative overflow-hidden rounded-2xl bg-dark lg:rounded-[3svh]"
            >
              <Image
                src={p.src}
                alt="Robotics Collective Aachen members building and presenting robots"
                width={p.width}
                height={p.height}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="aspect-[3/2] h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
