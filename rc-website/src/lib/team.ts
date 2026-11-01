export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

export const leadership: TeamMember[] = [
  {
    name: "Amine Kharrat",
    role: "Initiator and Co-Founder",
    image: "/team/amine-kharrat.webp",
  },
  { name: "Karim Siala", role: "Co-Founder", image: "/team/karim-siala.webp" },
  {
    name: "Siddarth S. Pillai",
    role: "Technical Projects Lead",
    image: "/team/siddarth-pillai.webp",
  },
];

export interface Partner {
  name: string;
  /** Logo trimmed to its content (no padding), 120px tall. */
  logo?: string;
  /** Width / height of the trimmed logo — used to balance visual size. */
  aspect?: number;
  /** Optical correction for unusually heavy (<1) or light (>1) logos. */
  scale?: number;
  /** Nudge down (fraction of its height) when descenders make it sit high. */
  offsetY?: number;
  /** Render the name as a styled text wordmark instead of an image logo. */
  wordmark?: boolean;
  url?: string;
}

export const partners: Partner[] = [
  { name: "Vorwerk", logo: "/partners/vorwerk.png", aspect: 2.62, scale: 1.15 },
  { name: "Hugging Face", logo: "/partners/huggingface-mono.png", aspect: 4.47, scale: 1.1 },
  { name: "WZL RWTH Aachen", logo: "/partners/wzl.png", aspect: 7.24 },
  { name: "TechLabs Aachen", logo: "/partners/techlabs.png", aspect: 4.22 },
  { name: "Foundabot", logo: "/partners/foundabot.png", aspect: 4.28 },
  { name: "Gateway Factory", logo: "/partners/gateway-factory.png", aspect: 10.03, offsetY: 0.12 },
  { name: "INFORM", logo: "/partners/inform.png", aspect: 6.54, scale: 0.82 },
  { name: "Vectioneer", logo: "/partners/vectioneer.png", aspect: 8.38, scale: 0.82 },
  { name: "Birdwave", wordmark: true },
];
