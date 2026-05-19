"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { DottedMap, type Marker } from "@/components/ui/dotted-map";

type FlagOverlay = { type: "flag"; countryCode: string; label: string };
type DotOverlay = { type: "dot"; label: string };
type OrgMarker = Marker & { overlay: FlagOverlay | DotOverlay };

type Org = {
  name: string;
  city?: string;
  lat?: number;
  lng?: number;
};

const orgs: Org[] = [
  { name: "ETH Robotics Club", city: "Zurich", lat: 47.3769, lng: 8.5417 },
  { name: "AI Team", city: "Lausanne", lat: 46.5197, lng: 6.6323 },
  { name: "RoboTUM", city: "Munich", lat: 48.1351, lng: 11.582 },
  { name: "Team Polar", city: "Eindhoven", lat: 51.4416, lng: 5.4697 },
  { name: "Unaite", city: "Paris", lat: 48.8566, lng: 2.3522 },
  { name: "TU Wien Robotics Club", city: "Vienna", lat: 48.2082, lng: 16.3738 },
  {
    name: "Robotics Collective Aachen",
    city: "Aachen",
    lat: 50.775,
    lng: 6.084,
  },
  { name: "KTH AI Society", city: "Stockholm", lat: 59.3293, lng: 18.0686 },
  { name: "Delft RSA", city: "Delft", lat: 52.0116, lng: 4.3571 },
  { name: "KN CybAiR", city: "Konstanz", lat: 47.6952, lng: 9.1307 },
  { name: "AEA Polimi", city: "Milan", lat: 45.4781, lng: 9.2272 },
];

const markers: OrgMarker[] = orgs
  .filter((o): o is Required<Org> => o.lat !== undefined && o.lng !== undefined)
  .map((o) => {
    if (o.name === "Robotics Collective Aachen") {
      return {
        lat: o.lat,
        lng: o.lng,
        size: 1.7,
        overlay: { type: "flag", countryCode: "de", label: o.city },
      };
    }
    return {
      lat: o.lat,
      lng: o.lng,
      size: 0.9,
      overlay: { type: "dot", label: o.city },
    };
  });

export const VisionSection = () => {
  const id = useId();

  return (
    <section
      id="network"
      className="relative bg-dark text-white overflow-hidden"
      style={{
        padding: "14vh 5vh",
        minHeight: "100vh",
        borderTopLeftRadius: "7vh",
        borderTopRightRadius: "7vh",
        borderBottomLeftRadius: "7vh",
        borderBottomRightRadius: "7vh",
        marginTop: "-7vh",
        marginBottom: "-7vh",
        zIndex: 2,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-[5vh]"
        style={{
          fontSize: "40vh",
          fontWeight: 500,
          lineHeight: 1,
          color: "#ffffff14",
        }}
      >
        02
      </div>

      <div className="relative max-w-[170vh] mx-auto">
        <p
          className="uppercase mb-4"
          style={{
            letterSpacing: "0.3vh",
            color: "#ffffff99",
            fontSize: "1.8vh",
            fontWeight: 500,
          }}
        >
          02 — European Network
        </p>

        <h2
          className="mb-[3vh] max-w-[120vh]"
          style={{ fontSize: "8vh", fontWeight: 700, lineHeight: 1.05 }}
        >
          Building Europe&apos;s Robotics Network.
        </h2>
        <p
          className="mb-[8vh] max-w-[110vh]"
          style={{ fontSize: "2.5vh", color: "#ffffff99", lineHeight: 1.5 }}
        >
          Robotics Collective Aachen is a founding member of{" "}
          <strong style={{ color: "#fff" }}>ESRA</strong> — the European Student
          Robotics Association. Europe doesn&apos;t have a talent problem; it has a
          fragmentation problem. Together with 10+ student robotics
          organizations across the continent, we&apos;re building a unified network
          for pan-European competitions, technical collaborations, and shared
          funding access.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[5vh] items-center">
          <div className="hidden md:block lg:col-span-9 relative overflow-hidden rounded-vh-md">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background:
                  "radial-gradient(ellipse 75% 70% at center, transparent 65%, #212121 100%)",
              }}
            />
            <DottedMap<OrgMarker>
              markers={markers}
              className="aspect-[2/1] lg:aspect-[20/10]"
              renderMarkerOverlay={({ marker, x, y, r, index }) => {
                if (marker.overlay.type === "dot") {
                  return (
                    <g style={{ pointerEvents: "none" }}>
                      <circle
                        cx={x}
                        cy={y}
                        r={r * 1.6}
                        fill="rgba(255,255,255,0.18)"
                      />
                      <circle cx={x} cy={y} r={r} fill="#ffffff" />
                    </g>
                  );
                }

                const { countryCode, label } = marker.overlay;
                const href = `https://flagcdn.com/w80/${countryCode}.webp`;
                const clipId = `${id}-flag-${index}`.replace(/:/g, "-");
                const imgR = r * 0.75;
                const fontSize = r * 0.9;
                const pillH = r * 1.5;
                const pillW = label.length * (fontSize * 0.62) + r * 1.4;
                const pillX = x + r + r * 0.6;
                const pillY = y - pillH / 2;

                return (
                  <g style={{ pointerEvents: "none" }}>
                    <clipPath id={clipId}>
                      <circle cx={x} cy={y} r={imgR} />
                    </clipPath>
                    <circle
                      cx={x}
                      cy={y}
                      r={imgR + 0.15}
                      fill="rgba(255,255,255,0.9)"
                    />
                    <image
                      href={href}
                      x={x - imgR}
                      y={y - imgR}
                      width={imgR * 2}
                      height={imgR * 2}
                      preserveAspectRatio="xMidYMid slice"
                      clipPath={`url(#${clipId})`}
                    />
                    <rect
                      x={pillX}
                      y={pillY}
                      width={pillW}
                      height={pillH}
                      rx={pillH / 2}
                      fill="rgba(0,0,0,0.65)"
                    />
                    <text
                      x={pillX + r * 0.7}
                      y={y + fontSize * 0.35}
                      fontSize={fontSize}
                      fill="white"
                      fontWeight={600}
                    >
                      {label}
                    </text>
                  </g>
                );
              }}
            />
          </div>

          <div className="lg:col-span-3 flex flex-col gap-[2.5vh]">
            <h3
              style={{
                fontSize: "2.2vh",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "0.1vh",
              }}
            >
              Founding Members
            </h3>
            <motion.ul
              className="flex flex-col"
              style={{ borderTop: "1px solid #ffffff1f" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.04 } },
              }}
            >
              {orgs.map((org, i) => {
                const isHome = org.name === "Robotics Collective Aachen";
                return (
                  <motion.li
                    key={org.name}
                    variants={{
                      hidden: { opacity: 0, y: 6 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: [0.23, 1, 0.32, 1],
                        },
                      },
                    }}
                    className="flex items-center justify-between"
                    style={{
                      padding: "1.1vh 0",
                      borderBottom: "1px solid #ffffff1f",
                      color: isHome ? "#ffffff" : "#ffffffb3",
                      fontSize: "1.7vh",
                      fontWeight: isHome ? 700 : 500,
                      letterSpacing: "0.02vh",
                    }}
                  >
                    <span className="flex items-center" style={{ gap: "1.4vh" }}>
                      <span
                        style={{
                          fontSize: "1.2vh",
                          fontWeight: 500,
                          color: isHome ? "#ffffff" : "#ffffff55",
                          fontVariantNumeric: "tabular-nums",
                          minWidth: "2.4vh",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex flex-col">
                        <span>{org.name}</span>
                        {org.city && (
                          <span
                            style={{
                              fontSize: "1.1vh",
                              fontWeight: 500,
                              color: "#ffffff66",
                              letterSpacing: "0.05vh",
                              textTransform: "uppercase",
                            }}
                          >
                            {org.city}
                          </span>
                        )}
                      </span>
                    </span>
                    {isHome && (
                      <span
                        aria-label="Your organization"
                        style={{
                          width: "0.9vh",
                          height: "0.9vh",
                          borderRadius: "50%",
                          backgroundColor: "#22c55e",
                          boxShadow: "0 0 0 0.4vh #22c55e33",
                        }}
                      />
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>

            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:7385056010165448704"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-pill mt-[1vh] w-fit"
            >
              Read the launch announcement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
