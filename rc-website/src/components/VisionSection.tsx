"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import type { OrgMarker } from "./NetworkMap";

// Loaded only on desktop, after mount — keeps the ~6k-node dotted map (and the
// `dotted-map` lib) out of the initial bundle and off the mobile main thread.
const NetworkMap = dynamic(() => import("./NetworkMap"), { ssr: false });

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return isDesktop;
}

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
  const isDesktop = useIsDesktop();

  return (
    <section
      id="network"
      className="relative bg-dark text-white overflow-hidden"
      style={{
        padding: "14svh 5svh",
        minHeight: "100svh",
        borderTopLeftRadius: "7svh",
        borderTopRightRadius: "7svh",
        borderBottomLeftRadius: "7svh",
        borderBottomRightRadius: "7svh",
        marginTop: "-7svh",
        marginBottom: "-7svh",
        zIndex: 2,
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-0 right-[5svh]"
        style={{
          fontSize: "40svh",
          fontWeight: 500,
          lineHeight: 1,
          color: "#ffffff14",
        }}
      >
        02
      </div>

      <div className="relative max-w-[170svh] mx-auto">
        <p
          className="uppercase mb-4"
          style={{
            letterSpacing: "0.3svh",
            color: "#ffffff99",
            fontSize: "1.8svh",
            fontWeight: 500,
          }}
        >
          02 · European Network
        </p>

        <h2
          className="mb-[3svh] max-w-[120svh]"
          style={{ fontSize: "8svh", fontWeight: 700, lineHeight: 1.05 }}
        >
          Building Europe&apos;s Robotics <span className="text-brand">Network</span>.
        </h2>
        <p
          className="mb-[8svh] max-w-[110svh]"
          style={{ fontSize: "2.5svh", color: "#ffffff99", lineHeight: 1.5 }}
        >
          Robotics Collective Aachen is a founding member of{" "}
          <strong className="text-brand">ESRA</strong>, the European Student
          Robotics Association. Europe doesn&apos;t have a talent problem; it has a
          fragmentation problem. Together with 10+ student robotics
          organizations across the continent, we&apos;re building a unified network
          for pan-European competitions, technical collaborations, and shared
          funding access.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[5svh] items-center">
          {isDesktop && <NetworkMap markers={markers} />}

          <div className="lg:col-span-3 flex flex-col gap-[2.5svh]">
            <h3
              style={{
                fontSize: "2.2svh",
                fontWeight: 700,
                color: "#fff",
                letterSpacing: "0.1svh",
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
                      padding: "1.1svh 0",
                      borderBottom: "1px solid #ffffff1f",
                      color: isHome ? "#ffffff" : "#ffffffb3",
                      fontSize: "1.7svh",
                      fontWeight: isHome ? 700 : 500,
                      letterSpacing: "0.02svh",
                    }}
                  >
                    <span className="flex items-center" style={{ gap: "1.4svh" }}>
                      <span
                        style={{
                          fontSize: "1.2svh",
                          fontWeight: 500,
                          color: isHome ? "#ffffff" : "#ffffff55",
                          fontVariantNumeric: "tabular-nums",
                          minWidth: "2.4svh",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex flex-col">
                        <span>{org.name}</span>
                        {org.city && (
                          <span
                            style={{
                              fontSize: "1.1svh",
                              fontWeight: 500,
                              color: "#ffffff66",
                              letterSpacing: "0.05svh",
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
                          width: "0.9svh",
                          height: "0.9svh",
                          borderRadius: "50%",
                          backgroundColor: "#22c55e",
                          boxShadow: "0 0 0 0.4svh #22c55e33",
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
              className="btn-outline-pill mt-[1svh] w-fit"
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
