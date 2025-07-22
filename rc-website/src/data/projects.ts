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
	    {type: "image", src: "/orom_title-image.webp"},
    ],
    links: {
      github: "https://github.com/openroboticmetaverse/mvp-webapp",
      website: "https://openroboticmetaverse.org",
    },
  },
  {
    id: "aosh",
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
    pointOfContactId: 5,
    galleryImages: [
	    {type: "image", src: "/bimbot-bare2-crop.png"},
    ],
    links: {
      github:
        "https://github.com/roboticscollective/AOSH",
      website:
        "https://roboticscollective.org/projects/aachen-open-source-humanoid",
    },
  },
  {
    id: "bimbot",
    slug: "3d-printed-robot-arms",
    title: "Building and training a bimanual robot using imitation learning",
    description:
      "Custom-designed robotic arms fabricated through advanced 3D printing techniques, integrated with our open-source LeRobot software library for intuitive control and programming.",
    image:
	    "/project-bimbot/bimbot-bare.webp",
    tags: ["3D Printing", "Open Source", "Control Systems"],
    content:
      "The 3D Printed Arms project combines affordable manufacturing techniques with sophisticated control systems. By leveraging modern 3D printing capabilities, we've created customizable robotic arms that can be produced at a fraction of the cost of commercial alternatives.\n\nThese arms are powered by our LeRobot library, an open-source software package that simplifies the programming and control of robotic limbs. The library features inverse kinematics solvers, trajectory planning, and a user-friendly API that makes advanced robotics accessible to programmers of various skill levels.\n\n We will explore the construction of the Robotics Collective’s Aachen Open-Source Humanoid and its machine learning pipeline that enable it to perform precise object manipulation, using state-of-the-art machine learning frameworks for robotics.\n\n Building and deploying AI systems for robotic tasks involves complex engineering, large datasets, and intensive training procedures. This complexity makes it difficult for individual researchers or small teams to experiment with robotics in a meaningful way. The objective of this project is to addresses the high barrier to entry in robotics. We aims to lower these barriers using open source projects like LeRobot and So100 arms. The https://github.com/huggingface/lerobot platform by Hugging Face provides a suite of models, datasets, and tools built on the PyTorch framework for imitation and reinforcement learning. You can read more this project under https://robotics-collective-initiative.notion.site/Building-Affordable-Home-Robots-Training-a-bimanual-robot-using-imitation-learning-1eee42e86b8a80779dbcf4dbbb2078ae", status: "ongoing",
    pointOfContactId: 5,
    galleryImages: [
	    {type: "image", src: "/project-bimbot/bimbot-bare.webp"},
	    {type: "video", src: "/bimbot-teleoperation.mp4", poster: "/bimbot-teleoperation.mp4" }
    ],
    links: {
      github: "https://github.com/roboticscollective/AOSH",
      website: "https://robotics-collective-initiative.notion.site/Building-Affordable-Home-Robots-Training-a-bimanual-robot-using-imitation-learning-1eee42e86b8a80779dbcf4dbbb2078ae",
      documentation: "https://robotics-collective-initiative.notion.site/Building-Affordable-Home-Robots-Training-a-bimanual-robot-using-imitation-learning-1eee42e86b8a80779dbcf4dbbb2078ae",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
