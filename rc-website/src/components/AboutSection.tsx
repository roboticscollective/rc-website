"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-primary">About</span> the Collective
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-lg">
            <div className="aspect-square bg-card rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src="https://res.cloudinary.com/dilan3qfq/image/upload/f_auto,q_auto/openroboverse/group_foto_ne6ngk.jpg"
                  alt="Robotics Collective"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 bg-card/80 backdrop-blur-sm rounded-lg">
              <p className="text-sm md:text-base text-primary font-medium">
                Since 2023, uniting passionate minds to shape the future of
                robotics.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300">
              Founded in 2023 as <b>open robotic metaverse</b>, we quickly
              spotted a critical gap: Aachen's vibrant robotics community was
              booming, yet efforts remained scattered: research institutes,
              startups, companies and student teams often tackling the same
              challenges in parallel, thus reinventing the wheel.
            </p>

            <p className="text-lg md:text-xl text-gray-300">
              Robotics Collective was reborn to bridge that gap by uniting
              academic groups, industry experts, and passionate individuals in
              an open, collaborative ecosystem.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-card p-6 rounded-lg">
                <div className="text-red-accent text-3xl font-bold mb-2">
                  7+
                </div>
                <div className="text-gray-400">Active Members</div>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <div className="text-primary text-3xl font-bold mb-2">3</div>
                <div className="text-gray-400">Ongoing Projects</div>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <div className="text-yellow-secondary text-3xl font-bold mb-2">
                  17+
                </div>
                <div className="text-gray-400">
                  Research & Industry Partners
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="px-8 py-6 rounded-3xl border-primary bg-primary/20 text-primary hover:bg-primary/90 hover:text-white"
                >
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
