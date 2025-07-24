import PositionsPageContent from "./PositionsPageContent";
import { getAllPositions } from "@/lib/sanity-queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team | Robotics Collective",
  description:
    "Join our student-led robotics collective. Open volunteer positions in finance, marketing, partnerships, and more.",
};

export default async function PositionsPage() {
  // Fetch positions data at build time (SSG)
  const positions = await getAllPositions();
  
  return <PositionsPageContent positions={positions} />;
}