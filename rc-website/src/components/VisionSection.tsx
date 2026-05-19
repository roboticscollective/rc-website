"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { DottedMap, type Marker } from "@/components/ui/dotted-map";

type AachenMarker = Marker & {
  overlay: {
    countryCode: string;
    label: string;
  };
};

const markers: AachenMarker[] = [
  {
    lat: 50.775,
    lng: 6.084,
    size: 2.8,
    overlay: { countryCode: "de", label: "Aachen" },
  },
];

const orgList = [
  "ETH Robotics Club",
  "AI Team",
  "RoboTUM",
  "Team Polar",
  "Unaite",
  "TU Wien Robotics Club",
  "Robotics Collective Aachen",
  "KTH AI Society",
  "Delft RSA",
  "KN CybAiR",
  "AEA Polimi",
];

export const VisionSection = () => {
  const id = useId();

  return (
    <section
      id="network"
      className="relative bg-dark text-white"
      style={{ padding: "14vh 5vh", minHeight: "100vh" }}
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

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-[5vh] items-center">
          <div className="lg:col-span-7 relative overflow-hidden rounded-vh-md">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-10"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 35%, #212121 95%)",
              }}
            />
            <DottedMap<AachenMarker>
              markers={markers}
              renderMarkerOverlay={({ marker, x, y, r, index }) => {
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
              className="grid grid-cols-2 gap-[1vh]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.04 } },
              }}
            >
              {orgList.map((org) => {
                const isHome = org === "Robotics Collective Aachen";
                return (
                  <motion.li
                    key={org}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: [0.23, 1, 0.32, 1],
                        },
                      },
                    }}
                    className="rounded-full text-center"
                    style={{
                      fontSize: "1.45vh",
                      fontWeight: isHome ? 700 : 500,
                      padding: "0.9vh 1.4vh",
                      color: isHome ? "#212121" : "#ffffffcc",
                      backgroundColor: isHome ? "#ffffff" : "transparent",
                      border: isHome
                        ? "1px solid #ffffff"
                        : "1px solid #ffffff33",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {org}
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
