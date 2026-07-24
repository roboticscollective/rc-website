"use client";

import { useId } from "react";
import { DottedMap, type Marker } from "@/components/ui/dotted-map";

export type FlagOverlay = { type: "flag"; countryCode: string; label: string };
export type DotOverlay = { type: "dot"; label: string };
export type OrgMarker = Marker & { overlay: FlagOverlay | DotOverlay };

export default function NetworkMap({ markers }: { markers: OrgMarker[] }) {
  const id = useId();

  return (
    <div className="lg:col-span-9 relative overflow-hidden rounded-vh-md">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 75% 70% at center, transparent 65%, #0d0d0d 100%)",
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
  );
}
