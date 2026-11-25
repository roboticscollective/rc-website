"use client";

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/dictionaries";

/** not-found pages get no route params, so the language comes from the URL. */
export function NotFoundText() {
  const t = getDictionary(usePathname()?.startsWith("/en") ? "en" : "de").notFound;

  return (
    <>
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
        {t.eyebrow}
      </p>
      <h1 className="text-[clamp(5rem,26vw,14rem)] font-extrabold leading-[0.9] tracking-tight">
        4<span className="text-brand">0</span>4
      </h1>
      <p className="mt-6 max-w-xl text-[clamp(1.15rem,5vw,1.9rem)] font-semibold leading-snug">
        {t.text}
      </p>
    </>
  );
}
