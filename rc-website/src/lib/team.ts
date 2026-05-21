export interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

// TODO: Replace placeholder image paths with real photos in /public/team/
const PLACEHOLDER = "/logo.png";

export const leadership: TeamMember[] = [
  { name: "Amine Kharrat", role: "Co-founder", image: PLACEHOLDER },
  { name: "Karim Siala", role: "Co-founder", image: PLACEHOLDER },
  { name: "Jan Strehl", role: "Co-founder", image: PLACEHOLDER },
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
