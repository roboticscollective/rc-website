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
                Founded in 2023, our collective brings together the brightest
                minds in robotics.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300">
              Founded in 2023 as Open Robotic Metaverse, we quickly spotted a
              critical gap: Aachen's vibrant robotics community was booming, yet
              efforts remained scattered — labs, startups, and student teams
              often advancing the same problems in parallel, thus reinventing
              the wheels.
            </p>

            <p className="text-lg md:text-xl text-gray-300">
              Robotics Collective . was reborn to close that gap by uniting
              academic groups, industry experts, and passionate individuals in
              an open, collaborative ecosystem.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-card p-6 rounded-lg">
                <div className="text-red-accent text-3xl font-bold mb-2">7+</div>
                <div className="text-gray-400">Active Members</div>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <div className="text-primary text-3xl font-bold mb-2">3</div>
                <div className="text-gray-400">Ongoing Projects</div>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <div className="text-yellow-secondary text-3xl font-bold mb-2">17+</div>
                <div className="text-gray-400">
                  Research & Industry Partners
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link href="/about">
                <Button 
                  variant="outline" 
                  className="px-6 py-3 border-primary text-primary hover:bg-primary hover:text-background"
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
