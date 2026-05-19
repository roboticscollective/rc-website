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

// TODO: Replace placeholders with real partner logos in /public/partners/
export const partners: Partner[] = [
  { name: "Partner 1", logo: "/logo.png" },
  { name: "Partner 2", logo: "/logo.png" },
  { name: "Partner 3", logo: "/logo.png" },
  { name: "Partner 4", logo: "/logo.png" },
  { name: "Partner 5", logo: "/logo.png" },
  { name: "Partner 6", logo: "/logo.png" },
];
