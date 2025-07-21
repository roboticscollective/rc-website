"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Mail,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { positions } from "@/data/positions";
import Link from "next/link";

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

export default function CareersPageContent() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-secondary/10 via-background to-red-accent/10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Shape the <span className="text-primary">Future</span> of Robotics
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join us in shaping the future of robotics!
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Badge
                variant="outline"
                className="px-6 py-3 text-lg border-yellow-secondary text-yellow-secondary rounded-full"
              >
                <Users className="mr-2 h-5 w-5" />
                50+ Active Members
              </Badge>
              <Badge
                variant="outline"
                className="px-6 py-3 text-lg border-red-accent text-red-accent rounded-full"
              >
                <Award className="mr-2 h-5 w-5" />
                Student Initiative
              </Badge>
              <Badge
                variant="outline"
                className="px-6 py-3 text-lg border-primary text-primary rounded-full"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Growing Impact
              </Badge>
            </div>
          </motion.div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div variants={itemVariants}>
                <Card className="h-full border-yellow-secondary/20 bg-yellow-secondary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-secondary">
                      <TrendingUp className="mr-3 h-6 w-6" />
                      Real Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-300">
                      • Manage real budgets and partnerships
                      <br />
                      • Impact 50+ active members daily
                      <br />• Portfolio projects that stand out
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full border-red-accent/20 bg-red-accent/5">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-accent">
                      <Award className="mr-3 h-6 w-6" />
                      Skill Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-300">
                      • Industry-standard tools and processes
                      <br />
                      • Direct mentorship from experienced members
                      <br />• Skills that enhance your career prospects
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full border-primary/20 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Users className="mr-3 h-6 w-6" />
                      Network Access
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-gray-300">
                      • Connect with industry professionals
                      <br />
                      • Access our partner ecosystem
                      <br />• References from people who matter
                    </p>
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
              {positions.map((position, index) => (
                <motion.div key={position.id} variants={itemVariants}>
                  <Card className="h-full hover:border-primary/50 transition-colors duration-300">
                    <CardHeader>
                      <CardTitle className="text-2xl mb-2">
                        {position.title}
                      </CardTitle>
                      <p className="text-gray-400">{position.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-yellow-secondary">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {position.responsibilities
                            .slice(0, 3)
                            .map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-gray-300"
                              >
                                <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {resp}
                              </li>
                            ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-red-accent">
                          Key Deliverables
                        </h4>
                        <ul className="space-y-2">
                          {position.deliverables
                            .slice(0, 2)
                            .map((deliverable, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-sm text-gray-300"
                              >
                                <CheckCircle2 className="mr-2 h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {deliverable}
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
