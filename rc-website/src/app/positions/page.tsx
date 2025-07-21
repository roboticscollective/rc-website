import PositionsPageContent from "./PositionsPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Our Team | Robotics Collective",
  description:
    "Join our student-led robotics collective. Open volunteer positions in finance, marketing, partnerships, and more.",
};

export default function PositionsPage() {
  return <PositionsPageContent />;
}