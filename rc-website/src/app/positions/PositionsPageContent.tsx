"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  TrendingUp,
  Award,
  Mail,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { CldImage } from 'next-cloudinary';
import { type Position } from "@/lib/sanity";
import { buildImageUrl } from "@/lib/sanity";

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

export default function PositionsPageContent({ positions }: PositionsPageContentProps) {
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
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 border border-primary/20">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-primary font-semibold text-sm">YOU COULD BE HERE</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                This Could Be <span className="text-primary">Your Story</span>
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Every person in this photo started exactly where you are now—curious, 
                ambitious, and ready to make an impact. They're not just colleagues; 
                they're innovators, problem-solvers, and the driving force behind 
                real robotics breakthroughs.
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>50+ Active Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Real Impact</span>
                </div>
              </div>
            </motion.div>

            {/* Creative Image Layout */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-red-accent/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-800/60">
                  <div className="overflow-hidden rounded-xl">
                    <CldImage
                      width="600"
                      height="400"
                      src="openroboverse/group_foto_2_bqdglp"
                      sizes="(max-width: 1024px) 100vw, 600px"
                      alt="Robotics Collective Team"
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-3 -right-3 bg-primary/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                  
                  <div className="absolute -bottom-2 -left-2 bg-yellow-secondary/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <span className="text-black font-semibold text-sm">Join Us!</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-primary/30 rounded-full -z-10 animate-pulse"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-red-accent/10 rounded-full -z-10 animate-pulse delay-1000"></div>
            </motion.div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(230,175,46,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(192,50,33,0.1),transparent_50%)]"></div>
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

            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
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
                      <li>• Manage real budgets and partnerships</li>
                      <li>• Impact 50+ active members daily</li>
                      <li>• Portfolio projects that stand out</li>
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

      {/* Open Positions Section */}
      <section className="py-20">
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {positions.map((position) => (
                <motion.div
                  key={position._id}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Card className="h-full bg-gradient-to-br from-card/50 via-card to-card/80 backdrop-blur-sm border-2 border-gray-800/60 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-secondary/5 via-transparent to-red-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                        <Badge
                          variant="outline"
                          className={`text-xs px-3 py-1 rounded-full ${
                            position.isOpen 
                              ? "border-primary/30 text-primary bg-primary/10" 
                              : "border-gray-500/30 text-gray-500 bg-gray-500/10"
                          }`}
                        >
                          {position.isOpen ? "Open" : "Filled"}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {position.title}
                      </CardTitle>
                      <p className="text-gray-400 leading-relaxed">
                        {position.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6 relative z-10">
                      <div className="bg-yellow-secondary/10 rounded-lg p-4 border border-yellow-secondary/20">
                        <h4 className="font-semibold text-lg mb-3 text-yellow-secondary flex items-center">
                          <div className="w-2 h-2 rounded-full bg-yellow-secondary mr-2"></div>
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-3">
                          {position.responsibilities
                            .slice(0, 3)
                            .map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-gray-300 hover:text-white transition-colors group"
                              >
                                <CheckCircle2 className="mr-3 h-4 w-4 text-yellow-secondary mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div className="bg-red-accent/10 rounded-lg p-4 border border-red-accent/20">
                        <h4 className="font-semibold text-lg mb-3 text-red-accent flex items-center">
                          <div className="w-2 h-2 rounded-full bg-red-accent mr-2"></div>
                          Key Deliverables
                        </h4>
                        <ul className="space-y-3">
                          {position.deliverables
                            .slice(0, 2)
                            .map((deliverable, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-gray-300 hover:text-white transition-colors group"
                              >
                                <CheckCircle2 className="mr-3 h-4 w-4 text-red-accent mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                                <span className="leading-relaxed">
                                  {deliverable}
                                </span>
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
              Our <span className="text-primary">3-Week</span> Trial Process
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
                    documents, attend team meetings, and get one-on-one
                    mentorship.
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
                    Analyze current systems, research best practices, and
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
                    Both sides decide if it's a match. No hard feelings if not –
                    we want the right fit for everyone.
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
                    What you want to learn that you can't learn in a classroom
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <Link href="mailto:apply@roboticscollective.org">
                <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                  <Mail className="mr-2 h-5 w-5" />
                  apply@roboticscollective.org
                </Button>
              </Link>

              <div className="flex flex-col items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Rolling Basis
                </div>
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
