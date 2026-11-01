import Image from "next/image";

const tag =
  "absolute bottom-3 left-3 rounded-full bg-dark/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white backdrop-blur-sm sm:bottom-5 sm:left-5 sm:text-xs";
const INSTAGRAM = "https://www.instagram.com/roboticscollective/";

/** Instagram posts shown as plain links — nothing loads from Meta on our page. */
const instagramPosts = [
  {
    href: "https://www.instagram.com/reel/Db_asYqOj2W/",
    cover: "/social/instagram/reel-Db_asYqOj2W.jpg",
    label: "Instagram reel: Certified gentleman",
  },
];

const frame = "relative overflow-hidden rounded-2xl bg-dark lg:rounded-[3svh]";

export const CommunitySection = () => {
  return (
    <section id="community" className="bg-light text-dark">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-14 sm:px-8 lg:px-12 lg:py-24">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#666] sm:text-xs">
          0.2/ Community
        </p>

        {/* Phone: big photo, then two side by side. Desktop: big left, two stacked right. */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:grid-rows-2">
          <figure className={`${frame} col-span-2 lg:col-span-1 lg:row-span-2`}>
            <Image
              src="/photos/community/aachen-digitalhub.webp"
              alt="Robotics Collective Aachen community meetup in Aachen"
              width={2400}
              height={1600}
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="aspect-[3/2] h-full w-full object-cover"
            />
            <figcaption className={tag}>Aachen</figcaption>
          </figure>

          <figure className={frame}>
            <Image
              src="/photos/community/berlin-esra-2026-10.jpg"
              alt="Robotics Collective Aachen members in Berlin"
              width={1600}
              height={1070}
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
            />
            <figcaption className={tag}>Berlin</figcaption>
          </figure>

          <figure className={frame}>
            <Image
              src="/photos/community/juelich.jpg"
              alt="Club members working on robot arms at a hands-on session in Jülich"
              width={2000}
              height={1500}
              sizes="(min-width: 1024px) 33vw, 50vw"
              className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto"
            />
            <figcaption className={tag}>Jülich</figcaption>
          </figure>
        </div>

        {/* Instagram — links out, so sound plays where people expect it */}
        <div className="mt-6 flex items-center gap-4 border-t border-dark/15 pt-6 sm:gap-6">
          <ul className="flex shrink-0 gap-2">
            {instagramPosts.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={post.label}
                  className="group relative block aspect-[9/16] w-16 overflow-hidden rounded-xl bg-dark sm:w-20"
                >
                  <Image
                    src={post.cover}
                    alt=""
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="group min-w-0"
          >
            <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-[#666] sm:text-xs">
              Instagram
            </span>
            <span className="mt-1 block truncate text-xl font-semibold transition-colors group-hover:text-brand sm:text-2xl">
              @roboticscollective <span aria-hidden="true">↗</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
