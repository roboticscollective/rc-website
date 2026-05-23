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
    image: "/team/Amine.webp",
  },
  { name: "Karim Siala", role: "Co-Founder", image: "/team/Karim.webp" },
  {
    name: "Siddarth S. Pillai",
    role: "Technical Projects Lead",
    image: "/team/Sid.webp",
  },
];

export interface Partner {
  name: string;
  logo: string;
  url?: string;
}

export const partners: Partner[] = [
  { name: "Vorwerk", logo: "/partners/vorwerk.png" },
  { name: "Hugging Face", logo: "/partners/huggingface.png" },
  { name: "Partner 3", logo: "/partners/partner-03.svg" },
  { name: "Partner 4", logo: "/partners/partner-04.png" },
  { name: "Partner 5", logo: "/partners/partner-05.png" },
];
