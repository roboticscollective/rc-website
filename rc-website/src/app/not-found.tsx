import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Robotics Collective Aachen",
  description: "The page you're looking for couldn't be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] w-full flex-col justify-center bg-dark text-white">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
          Error 404
        </p>
        <h1 className="text-[clamp(5rem,26vw,14rem)] font-extrabold leading-[0.9] tracking-tight">
          4<span className="text-brand">0</span>4
        </h1>
        <p className="mt-6 max-w-xl text-[clamp(1.15rem,5vw,1.9rem)] font-semibold leading-snug">
          This page went off and joined another collective.
        </p>
      </div>
    </div>
  );
}
