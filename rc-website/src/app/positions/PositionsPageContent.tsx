"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Award, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { type Position } from "@/lib/sanity";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

interface PositionsPageContentProps {
  positions: Position[];
}

export default function PositionsPageContent({
  positions,
}: PositionsPageContentProps) {
  const [isPositionsExpanded, setIsPositionsExpanded] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e6af2e]/12 via-background to-[#C03221]/12">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Join</span> Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help shape the future of robotics one responsibility at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Creative Team Section */}
      <section className="py-20 relative overflow-hidden ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                This Could Be <span className="text-primary">You</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                This is where we began, now it's your turn to take it further,
                shape its future, and leave your mark on the Robotics
                Collective.
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>20+ Active Members</span>
                </div>
              </div>
            </div>

            {/* Simplified Image Layout */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <div className="overflow-hidden rounded-2xl border border-primary/20">
                  <CldImage
                    width="600"
                    height="400"
                    src="openroboverse/group_foto_2_bqdglp"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    alt="Robotics Collective Team"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Why This <span className="text-primary">Matters</span> For Your
              Future
            </motion.h2>

            <div className="mx-auto grid max-w-6xl items-stretch gap-8 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
              <motion.div variants={itemVariants}>
                <Card className="h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[320px] border-t-4 border-t-[#e6af2e]">
                  <CardHeader className="flex flex-col items-center gap-4 pb-4">
                    <div className="p-4 rounded-full bg-[#e6af2e]/10 text-[#e6af2e]">
                      <TrendingUp className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">
                      Real Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex-grow flex items-center justify-center text-center px-6">
                    <ul className="text-base text-muted-foreground space-y-2 text-left">
                      <li>• Manage real projects and partnerships</li>
                      <li>• Impact 20+ active members daily</li>
                      <li>• Build portfolio projects that stand out</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[320px] border-t-4 border-t-[#C03221]">
                  <CardHeader className="flex flex-col items-center gap-4 pb-4">
                    <div className="p-4 rounded-full bg-[#C03221]/10 text-[#C03221]">
                      <Award className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">
                      Skill Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex-grow flex items-center justify-center text-center px-6">
                    <ul className="text-base text-muted-foreground space-y-2 text-left">
                      <li>• Industry-standard tools and processes</li>
                      <li>• Direct mentorship from experienced members</li>
                      <li>• Skills that enhance your career prospects</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[320px] border-t-4 border-t-primary">
                  <CardHeader className="flex flex-col items-center gap-4 pb-4">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                      <Users className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">
                      Network Access
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 flex-grow flex items-center justify-center text-center px-6">
                    <ul className="text-base text-muted-foreground space-y-2 text-left">
                      <li>• Connect with industry professionals</li>
                      <li>• Access our partner ecosystem</li>
                      <li>• References from people who matter</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Membership Options Section */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Choose Your <span className="text-primary">Membership</span> Level
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Whether you want to lead, contribute actively, or stay connected to the robotics community, 
                we have the perfect membership level for you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Management and Active Members */}
              <motion.div variants={itemVariants} className="flex">
                <Card className="h-full flex flex-col border-2 border-red-accent/20 hover:border-red-accent/50 transition-all duration-300 group relative overflow-hidden w-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-accent to-red-accent/70"></div>
                  <CardHeader className="text-center pb-4 min-h-[10rem] flex flex-col justify-center">
                    <div className="mx-auto mb-4 p-4 bg-red-accent/10 rounded-full w-fit">
                      <Award className="w-8 h-8 text-red-accent" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-red-accent">
                      Management & Active Members
                    </CardTitle>
                    <p className="text-gray-400 text-sm">
                      Drive the collective through leadership and contribution
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div className="flex-grow space-y-4">
                      {/* Management responsibilities */}
                      <div className="bg-card/30 rounded-lg p-4 border border-gray-700/50">
                        <h4 className="font-semibold text-red-accent mb-3 flex items-center gap-2 min-h-[2rem]">
                          <Award className="w-4 h-4" />
                          Management Level
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                            <span className="text-xs">Strategic decision making & leadership</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                            <span className="text-xs">Partner relationship management</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                            <span className="text-xs">Event planning & execution</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Active Members */}
                      <div className="bg-card/30 rounded-lg p-4 border border-gray-700/50">
                        <h4 className="font-semibold text-red-accent mb-3 flex items-center gap-2 min-h-[2rem]">
                          <Users className="w-4 h-4" />
                          Active Contributors
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                            <span className="text-xs">Hands-on project work</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                            <span className="text-xs">Skill development & mentoring</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                            <span className="text-xs">Direct impact on initiatives</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Supporting Community Member */}
              <motion.div variants={itemVariants} className="flex">
                <Card className="h-full flex flex-col border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden w-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/70"></div>
                  <CardHeader className="text-center pb-4 min-h-[10rem] flex flex-col justify-center">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">
                      Supporting Community Member
                    </CardTitle>
                    <p className="text-gray-400 text-sm">
                      Stay connected & benefit from the network
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div className="flex-grow space-y-4">
                      <div className="bg-card/30 rounded-lg p-4 border border-gray-700/50">
                        <h4 className="font-semibold text-primary mb-3 flex items-center gap-2 min-h-[2rem]">
                          <Users className="w-4 h-4" />
                          For Individuals
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs">Free Meetup and Hackathon participation</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs">Priority event registration</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs">Robotics news & updates</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs">Community networking access</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-xs">Access to our working sessions</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Spacer to balance height with other cards */}
                      <div className="bg-transparent rounded-lg p-4 opacity-0">
                        <h4 className="font-semibold mb-3 flex items-center gap-2 opacity-0">
                          <Users className="w-4 h-4" />
                          Spacer Section
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 opacity-0">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                            <span className="text-xs">Invisible spacer content</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Community Sponsors */}
              <motion.div variants={itemVariants} className="flex">
                <Card className="h-full flex flex-col border-2 border-yellow-secondary/20 hover:border-yellow-secondary/50 transition-all duration-300 group relative overflow-hidden w-full">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-secondary to-yellow-secondary/70"></div>
                  <CardHeader className="text-center pb-4 min-h-[10rem] flex flex-col justify-center">
                    <div className="mx-auto mb-4 p-4 bg-yellow-secondary/10 rounded-full w-fit">
                      <Award className="w-8 h-8 text-yellow-secondary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-yellow-secondary">
                      Community Sponsors
                    </CardTitle>
                    <p className="text-gray-400 text-sm">
                      Access talent and build partnerships
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-grow flex flex-col">
                    <div className="flex-grow space-y-4">
                      <div className="bg-card/30 rounded-lg p-4 border border-gray-700/50">
                        <h4 className="font-semibold text-yellow-secondary mb-3 flex items-center gap-2 min-h-[2rem]">
                          <Award className="w-4 h-4" />
                          Corporate Benefits
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-yellow-secondary flex-shrink-0" />
                            <span className="text-xs">Access to top talent</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-yellow-secondary flex-shrink-0" />
                            <span className="text-xs">Research institute partnerships</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-yellow-secondary flex-shrink-0" />
                            <span className="text-xs">Exclusive network access</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-yellow-secondary flex-shrink-0" />
                            <span className="text-xs">Showcase yourself as regional automation leader</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-yellow-secondary flex-shrink-0" />
                            <span className="text-xs">Be a proud contributor to the Robotics Community</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Spacer to balance height with other cards */}
                      <div className="bg-transparent rounded-lg p-4 opacity-0">
                        <h4 className="font-semibold mb-3 flex items-center gap-2 opacity-0">
                          <Award className="w-4 h-4" />
                          Spacer Section
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 opacity-0">
                            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                            <span className="text-xs">Invisible spacer content</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* CTA Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col text-center h-full">
                <div className="flex-grow">
                  <h3 className="font-semibold text-red-accent mb-2 min-h-[3rem] flex items-center justify-center">Ready to Lead and contribute?</h3>
                  <p className="text-sm text-gray-400 mb-6 min-h-[2.5rem] flex items-center justify-center">Apply for the positions below or let us know how you want to contribute</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-auto">
                  <Button
                    variant="outline"
                    className="border-red-accent/30 bg-red-accent/10 text-red-accent hover:bg-red-accent hover:text-black rounded-full px-6"
                    onClick={() => {
                      setIsPositionsExpanded(true);
                      setTimeout(() => {
                        document.querySelector('#volunteer-positions')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    See Open Positions
                  </Button>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-red-accent/30 bg-red-accent/10 text-red-accent hover:bg-red-accent hover:text-black rounded-full px-6"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="flex flex-col text-center h-full">
                <div className="flex-grow">
                  <h3 className="font-semibold text-primary mb-2 min-h-[3rem] flex items-center justify-center">Shape the future with us</h3>
                  <p className="text-sm text-gray-400 mb-6 min-h-[2.5rem] flex items-center justify-center">Be part of the Robotics Community</p>
                </div>
                <div className="mt-auto">
                  <a
                    href="https://donate.stripe.com/14A5kEek40ekeFLbXtabK01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-black rounded-full px-6"
                    >
                      Join the Community
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col text-center h-full">
                <div className="flex-grow">
                  <h3 className="font-semibold text-yellow-secondary mb-2 min-h-[3rem] flex items-center justify-center">Become a Sponsor</h3>
                  <p className="text-sm text-gray-400 mb-6 min-h-[2.5rem] flex items-center justify-center">Partner with us for mutual growth</p>
                </div>
                <div className="mt-auto">
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-yellow-secondary/30 bg-yellow-secondary/10 text-yellow-secondary hover:bg-yellow-secondary hover:text-black rounded-full px-6"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20" id="volunteer-positions">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="text-center mb-8">
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Open <span className="text-primary">Volunteer</span> Positions
              </motion.h2>
              <Button
                variant="outline"
                onClick={() => setIsPositionsExpanded(!isPositionsExpanded)}
                className="border-primary/30 bg-primary/10 text-primary hover:bg-primary hover:text-black rounded-full px-6 py-3"
              >
                {isPositionsExpanded ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" />
                    Hide Positions
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" />
                    View All Open Positions ({positions.length})
                  </>
                )}
              </Button>
            </div>

            {isPositionsExpanded && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
              >
              {positions.map((position) => (
                <motion.div key={position._id} variants={itemVariants}>
                  <Card className="h-full border-yellow-secondary/20 hover:border-yellow-secondary/35 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group relative overflow-hidden hover:bg-gradient-to-r hover:from-yellow-secondary/15 hover:via-yellow-secondary/10 hover:to-yellow-secondary/15">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge
                          variant={position.isOpen ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {position.isOpen ? "Open" : "Filled"}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-3 group-hover:text-yellow-secondary transition-colors">
                        {position.title}
                      </CardTitle>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {position.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-3 text-yellow-secondary">
                          Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {position.responsibilities
                            .slice(0, 3)
                            .map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-gray-300"
                              >
                                <span className="text-yellow-secondary mr-2 mt-1">
                                  •
                                </span>
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to <span className="text-primary">Apply</span>?
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-10 py-6 rounded-full bg-primary/20 hover:bg-primary border border-primary/30 text-primary hover:text-black">
                  Apply Now
                </Button>
              </Link>

              <div className="flex flex-col items-center gap-4 text-sm text-gray-400">
                <div className="text-center max-w-md">
                  <p className="text-gray-400">
                    We welcome everyone regardless of gender, background,
                    experience level, or field of study. We believe in equality
                    and diversity as drivers of innovation.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
