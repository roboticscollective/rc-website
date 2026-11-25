import type { Metadata } from "next";
import { NotFoundText } from "./NotFoundText";

export const metadata: Metadata = {
  title: "404 | Robotics Collective Aachen",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] w-full flex-col justify-center bg-dark text-white">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <NotFoundText />
      </div>
    </div>
  );
}
