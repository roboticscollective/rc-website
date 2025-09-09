"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Award, Mail, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { type Position } from "@/lib/sanity";

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
              {/* Management Level */}
              <motion.div variants={itemVariants}>
                <Card className="h-full border-2 border-yellow-secondary/20 hover:border-yellow-secondary/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-secondary to-yellow-secondary/70"></div>
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-yellow-secondary/10 rounded-full w-fit">
                      <Award className="w-8 h-8 text-yellow-secondary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-yellow-secondary">
                      Management
                    </CardTitle>
                    <p className="text-gray-400 text-sm">
                      Lead the collective and shape its future
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm">Strategic decision making</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm">Partner relationship management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm">Team leadership & mentoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-yellow-secondary flex-shrink-0" />
                        <span className="text-sm">Event planning & execution</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-xs text-gray-400 italic">
                        High commitment, high impact leadership roles
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Active Members */}
              <motion.div variants={itemVariants}>
                <Card className="h-full border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/70"></div>
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-primary">
                      Active Members
                    </CardTitle>
                    <p className="text-gray-400 text-sm">
                      Volunteers driving day-to-day operations
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Hands-on project work</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Skill development & mentoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Direct impact on initiatives</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">Portfolio building opportunities</span>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-xs text-gray-400 italic">
                        Perfect for building experience and making real impact
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Community Members */}
              <motion.div variants={itemVariants}>
                <Card className="h-full border-2 border-red-accent/20 hover:border-red-accent/50 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-accent to-red-accent/70"></div>
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 p-4 bg-red-accent/10 rounded-full w-fit">
                      <TrendingUp className="w-8 h-8 text-red-accent" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-red-accent">
                      Community Members
                    </CardTitle>
                    <p className="text-gray-400 text-sm">
                      Stay connected & benefit from the network
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Individual Membership Tab */}
                    <div className="bg-card/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-red-accent mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        For Individuals
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                          <span className="text-xs">Priority event registration</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                          <span className="text-xs">Robotics news & updates</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                          <span className="text-xs">Community networking access</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Company Membership Tab */}
                    <div className="bg-card/30 rounded-lg p-4 border border-gray-700/50">
                      <h4 className="font-semibold text-red-accent mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        For Companies
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                          <span className="text-xs">Access to top talent</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                          <span className="text-xs">Research institute partnerships</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-red-accent flex-shrink-0" />
                          <span className="text-xs">Exclusive network access</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* CTA Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold text-yellow-secondary mb-2">Ready to Lead?</h3>
                <p className="text-sm text-gray-400 mb-4">Apply for management positions below</p>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="border-yellow-secondary text-yellow-secondary hover:bg-yellow-secondary hover:text-black"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-primary mb-2">Want to Contribute?</h3>
                <p className="text-sm text-gray-400 mb-4">Join our active volunteer team</p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-black"
                  onClick={() => document.querySelector('#volunteer-positions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See Volunteer Positions
                </Button>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-red-accent mb-2">Stay Connected?</h3>
                <p className="text-sm text-gray-400 mb-4">Join our community network</p>
                <Link href="/contact">
                  <Button 
                    variant="outline" 
                    className="border-red-accent text-red-accent hover:bg-red-accent hover:text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
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
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Open <span className="text-primary">Volunteer</span> Positions
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trial Process Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              The <span className="text-primary">3-Week</span> Trial Process
            </motion.h2>

            <div className="space-y-8">
              <motion.div
                variants={itemVariants}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-secondary/20 border border-yellow-secondary rounded-full flex items-center justify-center">
                  <span className="text-yellow-secondary font-bold">1-2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-secondary mb-2">
                    Deep Dive Weeks
                  </h3>
                  <p className="text-gray-300">
                    Shadow current processes, access all internal tools and
                    documents, attend weekly meetings and work sessions, and get
                    1:1 mentorship.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-accent/20 border border-red-accent rounded-full flex items-center justify-center">
                  <span className="text-red-accent font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-accent mb-2">
                    Prove It Week
                  </h3>
                  <p className="text-gray-300">
                    Analyze current processes, research best practices, and
                    present your 15-minute pitch: "Here's how I'd transform this
                    function."
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 border border-primary rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Decision Point
                  </h3>
                  <p className="text-gray-300">
                    Both sides decide if it's a match. No hard feelings if not.
                  </p>
                </div>
              </motion.div>
            </div>
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

            <motion.div
              variants={itemVariants}
              className="bg-card/30 border border-primary/20 rounded-lg p-8 mb-8"
            >
              <h3 className="text-xl font-bold mb-4 text-yellow-secondary">
                Send us 3 things (max 500 words total):
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span className="text-gray-300">
                    Why this specific role excites you more than others
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span className="text-gray-300">
                    One example of when you took ownership of something messy
                    and made it better
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span className="text-gray-300">
                    What you want to learn that you can't learn in a university
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <Link href="mailto:info@roboticscollective.org">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                  <Mail className="mr-2 h-5 w-5" />
                  info@roboticscollective.org
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
