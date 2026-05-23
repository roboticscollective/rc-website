import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Robotics Collective Aachen",
  description: "The page you're looking for couldn't be found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 style={{ fontSize: "20vh", fontWeight: 500, lineHeight: 1 }}>404</h1>
      <p className="text-h5 mb-8">This page doesn't exist.</p>
      <Link href="/" className="btn-outline-pill-dark">
        Return Home
      </Link>
    </div>
  );
}
