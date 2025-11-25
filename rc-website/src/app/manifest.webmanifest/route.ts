import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    id: "/",
    scope: "/",
    name: "Robotics Collective",
    short_name: "rc",
    description: "Together, we shape the future of robotics",
    start_url: "/",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone"],
    background_color: "#0D0D0D",
    theme_color: "#FFFFFF",
    lang: "en",
    dir: "ltr",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["robotics", "simulation", "community"],
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/manifest+json',
    },
  });
}