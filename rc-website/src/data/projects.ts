export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  content?: string;
  featured?: boolean;
  status: "ongoing" | "finished" | "planned";
  pointOfContactId: number; // References a team member ID (numeric)
  galleryImages?: string[];
  links?: {
    github?: string;
    website?: string;
    documentation?: string;
  };
}

export const projects: Project[] = [
  {
    id: "orom",
    slug: "open-robotic-metaverse",
    title: "Open Robotic Metaverse",
    description:
      "A browser-based collaborative platform enabling interactive exploration, visualization, and real-time simulation of robotics projects.",
    image:
	    "/orom_title-image.webp",
    tags: ["Browser-based Simulation", "Collaborative Robotics", "Open-source"],
    content:
      "The Open Robotic Metaverse (orom) creates an accessible digital environment for collaboratively visualizing and interacting with robotic simulations in real-time. By leveraging web-based technologies such as React Three Fiber, Three.js, and WebGPU, orom enables seamless exploration and modification of virtual robotic scenarios directly in-browser.\n\nKey features include interactive real-time simulations, support for multiple robotic simulation tools (MuJoCo, ROS, Drake), community-driven contributions, and advanced visual fidelity essential for sim-to-real robotics applications.",
    featured: true,
    status: "ongoing",
    pointOfContactId: 2, // Karim Siala
    galleryImages: [
	    "/orom_title-image.webp",
    ],
    links: {
      github: "https://github.com/openroboticmetaverse/mvp-webapp",
      website: "https://openroboticmetaverse.org",
    },
  },
  {
    id: "aoh",
    slug: "aachen-open-source-humanoid",
    title: "Aachen Open‑Source Humanoid",
    description:
      "A collaborative effort to build the first fully open-source humanoid robot in Aachen, bringing together academia, industry, and makers to shape the future of robotics as a shared community project.",
    image:
	    "/bimbot-bare2-crop.png",
    tags: ["Humanoid Robotics", "Open Source", "Cross‑Disciplinary"],
    content:
      "What if an entire ecosystem joined forces to create a human‑scale robot anyone could study, remix, and improve?  The Aachen Open Source Humanoid initiative merges mechanical ingenuity, high‑density power systems, advanced sensing, and cutting‑edge AI control into a single, open hardware & software stack.  Companies contribute real‑world expertise, research institutes supply breakthrough science, and students inject fearless creativity—each discipline weaving its module into a shared blueprint ready for the global community.\n\nFrom carbon‑fiber limbs and torque‑controlled joints to vision‑enabled perception and battery‑smart powertrains, every component is transparent, modular, and hackable.  Join us as we turn sketches into silicon and put Aachen on the map as a cradle of open humanoid innovation.",
    featured: false,
    status: "ongoing",
    pointOfContactId: 1,
    galleryImages: [
	    "/bimbot-bare2-crop.png",
    ],
    links: {
      github:
        "https://github.com/robotics-collective/aachen-open-source-humanoid",
      website:
        "https://robotics-collective.de/projects/aachen-open-source-humanoid",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
