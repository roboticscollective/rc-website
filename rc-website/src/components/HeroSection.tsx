import Image from "next/image";
import { LabVideo } from "@/components/LabVideo";
import { partners } from "@/lib/team";
import { JOIN_FORM_URL } from "@/lib/links";


/** Renders any logo as a white silhouette so mixed brand colors read as one row. */
const WHITE = { filter: "brightness(0) invert(1)" } as const;

/**
 * Wide wordmarks look bigger than compact logos at the same height, so size
 * each logo by visual area: height ∝ aspect^-0.45 (a softened equal-area rule).
 */
const logoHeight = (aspect: number, scale = 1) =>
  `calc(var(--logo-k) * ${(Math.pow(aspect, -0.45) * scale).toFixed(3)})`;

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden rounded-b-[2rem] bg-dark text-white lg:rounded-b-[4svh]"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col px-5 pb-6 pt-[5.5rem] sm:px-8 lg:min-h-[100svh] lg:px-12 lg:pb-8 lg:pt-[calc(8svh+1.5rem)]">
        {/* Universities — first thing under the nav */}
        <div className="flex items-center gap-4 py-3 sm:gap-8">
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
            Students from
          </span>
          <Image
            src="/universities/rwth-aachen.png"
            alt="RWTH Aachen University"
            width={103}
            height={28}
            priority
            className="h-4 w-auto min-[380px]:h-5 sm:h-7"
            style={WHITE}
          />
          <Image
            src="/universities/fh-aachen.png"
            alt="FH Aachen University of Applied Sciences"
            width={123}
            height={36}
            priority
            className="h-6 w-auto min-[380px]:h-7 sm:h-9"
          />
        </div>

        <div className="grid flex-1 grid-cols-1 items-center gap-8 py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-14 lg:py-10">
          {/* Who we are — as few words as possible */}
          <div>
            <h1 className="text-[clamp(2.6rem,11.5vw,6.25rem)] font-extrabold leading-[0.95] tracking-tight">
              We are the Robotics Collective Aachen<span className="text-brand">.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-snug text-white/70 sm:text-xl">
              A student robotics club. Open to anyone who wants to work on robots.
            </p>

            <a
              href={JOIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-lg font-medium text-white transition-colors hover:border-brand hover:text-brand"
            >
              Join us
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Lab cameras — real footage, full color */}
          <div className="grid min-w-0 grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-2 sm:gap-3">
            <LabVideo
              clips={[{ src: "/videos/so100-stacking-nuts.mp4", poster: "/videos/posters/so100-stacking-nuts.jpg" }]}
              priority
              className="aspect-[4/3]"
            />
            <LabVideo
              clips={[
                { src: "/videos/voice-ai-arm-control-sound.mp4", poster: "/videos/posters/voice-ai-arm-control-sound.jpg", sound: true },
                { src: "/videos/vr-teleoperation.mp4", poster: "/videos/posters/vr-teleoperation.jpg" },
              ]}
              priority
              className="row-span-2"
            />
            <LabVideo
              clips={[{ src: "/videos/piper-vla-pick-place.mp4", poster: "/videos/posters/piper-vla-pick-place.jpg" }]}
              className="aspect-[4/3]"
            />
          </div>
        </div>

        {/* Partners — endless logo strip */}
        <div className="flex items-center gap-5 pt-5 sm:gap-8">
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50 sm:text-xs">
            Partners
          </span>
          <div className="marquee-mask relative min-w-0 flex-1 overflow-hidden">
            <ul className="marquee flex w-max items-center [--logo-k:2.4rem] sm:[--logo-k:2.9rem]">
              {[...partners, ...partners].map((p, i) => (
                <li
                  key={`${p.name}-${i}`}
                  className="flex shrink-0 items-center pr-10 sm:pr-14"
                  aria-hidden={i >= partners.length}
                >
                  {p.wordmark ? (
                    <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {p.name}
                    </span>
                  ) : (
                    <Image
                      src={p.logo!}
                      alt={i < partners.length ? p.name : ""}
                      width={Math.round(36 * (p.aspect ?? 4))}
                      height={36}
                      className="w-auto"
                      style={{
                        ...WHITE,
                        height: logoHeight(p.aspect ?? 4, p.scale),
                        transform: p.offsetY ? `translateY(${p.offsetY * 100}%)` : undefined,
                      }}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
