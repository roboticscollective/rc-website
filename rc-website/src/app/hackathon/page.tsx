import { Calendar, MapPin, Clock, Users } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hackathon | Robotics Collective",
  description:
    "Join our AI+Robotics Hackathon - Build innovative solutions with cutting-edge robotics hardware and AI",
  keywords: [
    "robotics hackathon",
    "AI",
    "embodied AI",
    "teleoperation",
    "open source",
    "machine learning",
    "Aachen",
  ],
};

export default function HackathonPage() {
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
              AI+Robotics <span className="text-primary">Hackathon</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join us for an innovative hackathon where AI meets robotics. 
              Build the future of embodied AI with cutting-edge hardware 
              and collaborate with the global robotics community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                <Calendar className="text-primary h-8 w-8 mb-3" />
                <h3 className="text-lg font-semibold mb-1">Date</h3>
                <p className="text-gray-300">
                  November 20-21, 2025
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                <Clock className="text-primary h-8 w-8 mb-3" />
                <h3 className="text-lg font-semibold mb-1">Duration</h3>
                <p className="text-gray-300">
                  2 Days
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                <MapPin className="text-primary h-8 w-8 mb-3" />
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p className="text-gray-300">
                  Aachen, Germany
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <a
                href="https://luma.com/wfw8i9r5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="secondary"
                  className="px-8 py-6 text-lg rounded-3xl bg-gradient-to-r from-red-accent to-red-accent/90 text-white font-bold hover:shadow-xl hover:shadow-red-accent/30 transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  Register Now
                </Button>
              </a>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg rounded-3xl border-primary text-primary hover:bg-primary hover:text-black"
                  size="lg"
                >
                  Partner with Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              The <span className="text-primary">Challenge</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg text-center">
                <div className="text-primary text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-semibold mb-2">Integrate Robots</h3>
                <p className="text-gray-300 text-sm">
                  Work with diverse robot platforms from open-source to industrial-grade systems
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg text-center">
                <div className="text-primary text-4xl mb-4">📊</div>
                <h3 className="text-lg font-semibold mb-2">Collect Data</h3>
                <p className="text-gray-300 text-sm">
                  Gather teleoperation data in standardized formats for AI training
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg text-center">
                <div className="text-primary text-4xl mb-4">🧠</div>
                <h3 className="text-lg font-semibold mb-2">Train AI</h3>
                <p className="text-gray-300 text-sm">
                  Develop AI models that can autonomously control robotic systems
                </p>
              </div>
            </div>

            <div className="bg-card/50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                <span className="text-primary">Embodied AI</span> Focus
              </h3>
              <p className="text-lg text-gray-300 text-center">
                This hackathon focuses on the complete Embodied AI stack: hardware integration, 
                communication protocols, data pipelines, and model training to push the 
                robotics field forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Work With */}
      <section className="py-16 md:py-24 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What You'll <span className="text-primary">Work With</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">Hardware</h3>
                <p className="text-gray-300">
                  Access to diverse robot lineup including open-source arms, 
                  research platforms, and industrial-grade robotic systems.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">AI Stack</h3>
                <p className="text-gray-300">
                  Work with the complete Embodied AI pipeline from data collection 
                  to model deployment and real-time control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Success */}
      <section className="py-16 md:py-24 bg-card/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Previous <span className="text-primary">Success</span>
            </h2>
            
            <div className="bg-card/50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                First AI+Robotics Hackathon in <span className="text-primary">Aachen</span>
                <span className="block text-sm text-gray-400 font-normal mt-2">June 2025</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6 text-center">
                We successfully hosted our inaugural AI+Robotics Hackathon as part of the 
                global #LeRobot initiative initiated by Hugging Face, bringing together 
                the robotics community to work on embodied AI solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-primary text-3xl mb-3">🤝</div>
                  <h4 className="text-lg font-semibold mb-2">Diverse Robots</h4>
                  <p className="text-gray-400 text-sm">
                    From open-source arms to industrial-grade systems
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-primary text-3xl mb-3">🔬</div>
                  <h4 className="text-lg font-semibold mb-2">Full AI Stack</h4>
                  <p className="text-gray-400 text-sm">
                    Hardware, communication, data pipelines, model training
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-primary text-3xl mb-3">🌍</div>
                  <h4 className="text-lg font-semibold mb-2">Global Initiative</h4>
                  <p className="text-gray-400 text-sm">
                    Part of worldwide #LeRobot hackathon series
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-gray-400 italic">
              Building on this success, we're excited to bring you our next hackathon with even more innovation and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              Our <span className="text-primary">Partners</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 items-center justify-items-center opacity-70">
              {[
                "Foundabot",
                "Vectioneer", 
                "MYBOTSHOP GmbH",
                "AgileX Robotics",
                "Uniklinik RWTH Aachen",
                "Hanwha Robotics",
                "Hugging Face"
              ].map((partner, index) => (
                <div 
                  key={index}
                  className="text-gray-400 text-sm font-medium hover:text-primary transition-colors"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}