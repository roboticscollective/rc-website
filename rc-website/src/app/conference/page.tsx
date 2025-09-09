import { Calendar, MapPin, Clock, Users, Target, Handshake, Lightbulb, Building, UserPlus } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conference | Robotics Collective",
  description:
    "Join the first Robotics Conference in the region - Connect, innovate, and shape the future of robotics together",
  keywords: [
    "robotics conference",
    "regional event",
    "innovation",
    "networking",
    "partnerships",
    "recruitment",
    "Aachen",
    "Netherlands",
    "Belgium",
    "Luxembourg",
  ],
};

export default function ConferencePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background backdrop-blur-[1px] z-10"></div>
          {/* Fallback gradient background */}
          <div className="absolute w-full h-full bg-gradient-to-br from-primary/10 via-background to-accent/10 z-0"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              First Robotics <span className="text-primary">Conference</span> in the Region
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join us as we bring together the regional robotics community for an 
              unprecedented conference focused on innovation, collaboration, and 
              the future of robotics.
            </p>

            <Link href="/contact">
              <Button
                variant="default"
                className="px-8 py-6 text-lg rounded-3xl"
                size="lg"
              >
                Be Part of the First Robotics Conference
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Success Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Regional <span className="text-primary">Success</span>
            </h2>

            <div className="bg-card/50 p-8 rounded-lg mb-12">
              <p className="text-lg text-gray-300 mb-6 text-center">
                Beside big traction in Aachen, we had visitors from across the region 
                joining our meetups and hackathons, showing us the strong demand 
                for robotics collaboration beyond city borders.
              </p>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Participants joined us from:
                </h3>
                <div className="flex flex-wrap justify-center gap-4 text-gray-300">
                  <span className="bg-card px-4 py-2 rounded-full">Dortmund</span>
                  <span className="bg-card px-4 py-2 rounded-full">Bochum</span>
                  <span className="bg-card px-4 py-2 rounded-full">Bonn</span>
                  <span className="bg-card px-4 py-2 rounded-full">Luxembourg</span>
                  <span className="bg-card px-4 py-2 rounded-full">Netherlands</span>
                  <span className="bg-card px-4 py-2 rounded-full">Belgium</span>
                </div>
              </div>
            </div>

            <div className="bg-card/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                The Need for a Regional <span className="text-primary">Conference</span>
              </h3>
              <p className="text-lg text-gray-300 text-center">
                Seeing the enthusiasm and cross-border participation in our events, 
                we envision organizing the first dedicated Robotics Conference in the region 
                together with our growing community. It's time to create a flagship event 
                that brings together the best minds in robotics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 md:py-24 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Be <span className="text-primary">Part of It</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <UserPlus className="w-8 h-8" />,
                  title: "Recruit Top Talent",
                  description: "Connect with skilled robotics professionals, engineers, and researchers looking for new opportunities."
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Access Innovation",
                  description: "Discover cutting-edge technologies, research breakthroughs, and emerging trends in robotics."
                },
                {
                  icon: <Handshake className="w-8 h-8" />,
                  title: "Find Partners",
                  description: "Build strategic partnerships with companies, institutions, and researchers in the robotics ecosystem."
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Position as Innovator",
                  description: "Establish your brand as a leader and innovator in the robotics space through thought leadership."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Find Customers",
                  description: "Connect with potential clients and customers who are actively seeking robotics solutions."
                },
                {
                  icon: <Building className="w-8 h-8" />,
                  title: "Regional Leadership",
                  description: "Be part of establishing the region as a key hub for robotics innovation and collaboration."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-lg">
                  <div className="text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Shape the Future of <span className="text-primary">Robotics</span> in Our Region
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Join us in creating the premier robotics conference that brings together 
              innovators, researchers, and industry leaders from across the region. 
              Together, we can build something extraordinary.
            </p>
            
            <Link href="/contact">
              <Button
                variant="default"
                className="px-10 py-6 text-xl rounded-3xl"
                size="lg"
              >
                Be Part of the First Robotics Conference
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}