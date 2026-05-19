"use client";

import DottedMapLib from "dotted-map";
import { useMemo, type ReactNode } from "react";

export interface Marker {
  lat: number;
  lng: number;
  size?: number;
}

interface DottedMapProps<T extends Marker> {
  markers: T[];
  renderMarkerOverlay?: (args: {
    marker: T;
    x: number;
    y: number;
    r: number;
    index: number;
  }) => ReactNode;
  dotColor?: string;
  bgColor?: string;
  aspectRatio?: string;
  className?: string;
}

const REGION = {
  lat: { min: 40, max: 60 },
  lng: { min: -12, max: 30 },
};

export function DottedMap<T extends Marker>({
  markers,
  renderMarkerOverlay,
  dotColor = "#ffffff45",
  bgColor = "transparent",
  aspectRatio = "4 / 3",
  className,
}: DottedMapProps<T>) {
  const { svgInner, viewBox, positions } = useMemo(() => {
    const map = new DottedMapLib({
      height: 80,
      grid: "diagonal",
      region: REGION,
    });

    markers.forEach((m, i) => {
      map.addPin({
        lat: m.lat,
        lng: m.lng,
        svgOptions: { color: "transparent", radius: 0 },
        data: { __markerIndex: i },
      });
    });

    const svgString = map.getSVG({
      radius: 0.35,
      color: dotColor,
      shape: "circle",
      backgroundColor: bgColor,
    });

    const viewBoxMatch = svgString.match(/viewBox="([^"]+)"/);
    const vb = viewBoxMatch ? viewBoxMatch[1] : "0 0 100 100";
    const innerMatch = svgString.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
    const inner = innerMatch ? innerMatch[1] : "";

    const pts = map.getPoints();
    const pos: Array<{ x: number; y: number } | null> = markers.map(() => null);
    pts.forEach((p) => {
      const data = p.data as { __markerIndex?: number } | undefined;
      const idx = data?.__markerIndex;
      if (typeof idx === "number") {
        pos[idx] = { x: p.x, y: p.y };
      }
    });

    return { svgInner: inner, viewBox: vb, positions: pos };
  }, [markers, dotColor, bgColor]);

  return (
    <div
      className={`relative w-full ${className ?? ""}`}
      style={className ? undefined : { aspectRatio }}
    >
      <svg
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full select-none"
        aria-hidden="true"
      >
        <g dangerouslySetInnerHTML={{ __html: svgInner }} />
        {renderMarkerOverlay &&
          positions.map((p, i) => {
            if (!p) return null;
            const marker = markers[i];
            const r = marker.size ?? 2.8;
            return (
              <g key={i}>
                {renderMarkerOverlay({ marker, x: p.x, y: p.y, r, index: i })}
              </g>
            );
          })}
      </svg>
    </div>
  );
}

export default DottedMap;
