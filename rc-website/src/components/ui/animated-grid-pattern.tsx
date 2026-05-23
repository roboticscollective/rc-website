"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

interface AnimatedGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  numSquares?: number;
  className?: string;
  maxOpacity?: number;
  duration?: number;
}

interface Square {
  id: number;
  cycle: number;
  x: number;
  y: number;
}

/**
 * AnimatedGridPattern — squares fade in/out and relocate on each cycle.
 * Runs continuously, independent of hover/focus.
 */
export function AnimatedGridPattern({
  width = 90,
  height = 90,
  numSquares = 30,
  className,
  maxOpacity = 0.2,
  duration = 4,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId();
  const ref = useRef<SVGSVGElement>(null);
  const [dim, setDim] = useState({ w: 0, h: 0 });
  const [squares, setSquares] = useState<Square[]>([]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setDim({ w: entry.contentRect.width, h: entry.contentRect.height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!dim.w || !dim.h) return;
    const cols = Math.max(1, Math.floor(dim.w / width));
    const rows = Math.max(1, Math.floor(dim.h / height));
    setSquares(
      Array.from({ length: numSquares }).map((_, i) => ({
        id: i,
        cycle: 0,
        x: Math.floor(Math.random() * cols) * width,
        y: Math.floor(Math.random() * rows) * height,
      }))
    );
  }, [dim, numSquares, width, height]);

  const reposition = useCallback(
    (i: number) => {
      if (!dim.w || !dim.h) return;
      const cols = Math.max(1, Math.floor(dim.w / width));
      const rows = Math.max(1, Math.floor(dim.h / height));
      setSquares((prev) =>
        prev.map((s, idx) =>
          idx === i
            ? {
                ...s,
                cycle: s.cycle + 1,
                x: Math.floor(Math.random() * cols) * width,
                y: Math.floor(Math.random() * rows) * height,
              }
            : s
        )
      );
    },
    [dim, width, height]
  );

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      {squares.map((s, i) => (
        <motion.rect
          key={`${s.id}-${s.cycle}`}
          x={s.x + 1}
          y={s.y + 1}
          width={width - 1}
          height={height - 1}
          fill="currentColor"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, maxOpacity, 0] }}
          transition={{
            duration,
            times: [0, 0.5, 1],
            delay: Math.random() * 0.8,
            ease: "easeInOut",
          }}
          onAnimationComplete={() => reposition(i)}
        />
      ))}
    </svg>
  );
}

export default AnimatedGridPattern;
