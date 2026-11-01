import Image from "next/image";
import { leadership } from "@/lib/team";
import { JOIN_FORM_URL } from "@/lib/links";


/**
 * Compact contact-sheet grid. Scales from a handful of people to the whole
 * club: add members to `leadership` (or a fuller list) in `lib/team.ts`.
 */
export const TeamSection = () => {
  return (
    <section id="team" className="bg-light text-dark">
      <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-28">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#666] sm:text-xs">
          0.4/ Founders &amp; leads
        </p>

        <ul className="grid grid-cols-3 gap-x-2 gap-y-6 sm:gap-x-3 lg:grid-cols-6">
          {leadership.map((m) => (
            <li key={m.name} className="group">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-mid">
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover grayscale transition duration-300 group-hover:grayscale-0"
                />
              </div>
              <p className="mt-3 text-sm font-semibold leading-tight sm:text-base">{m.name}</p>
              <p className="mt-1 font-mono text-[10px] uppercase leading-tight tracking-[0.12em] text-[#666] sm:text-[11px]">
                {m.role}
              </p>
            </li>
          ))}

          {/* These are only the leads — the collective is much bigger. */}
          <li>
            <a
              href={JOIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="flex aspect-square items-center justify-center rounded-2xl border-2 border-dashed border-dark/20 text-4xl font-light text-dark/40 transition-colors group-hover:border-brand group-hover:text-brand sm:text-5xl">
                +
              </div>
              <p className="mt-3 text-sm font-semibold leading-tight sm:text-base">And many more</p>
              <p className="mt-1 font-mono text-[10px] uppercase leading-tight tracking-[0.12em] text-[#666] transition-colors group-hover:text-brand sm:text-[11px]">
                Join the team →
              </p>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TeamSection;
