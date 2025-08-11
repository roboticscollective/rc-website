import type { Metadata } from "next";
import { Github, Linkedin, Mail, UserPlus } from "lucide-react";
import {
  getLeadershipMembers,
  getCoreTeamMembers,
  getCommunityMembers,
  getAlumniMembers,
  getAllPartners,
} from "@/lib/sanity-queries";
import { buildImageUrl } from "@/lib/sanity";
import { Button } from "@/components/ui/button";
import { LogoCarousel } from "@/components/LogoCarousel";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Robotics Collective",
  description: "Learn about the Robotics Collective team, mission, and vision",
  keywords: ["about us", "robotics team", "mission", "values", "history"],
};

export default async function AboutPage() {
  // Fetch data from Sanity
  const leadershipTeam = await getLeadershipMembers();
  const coreTeam = await getCoreTeamMembers();
  const communityMembers = await getCommunityMembers();
  const alumniMembers = await getAlumniMembers();
  const partners = await getAllPartners();

  return (
    <div className="min-h-screen bg-background">
      <div className="">
        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="text-primary">About</span>
            </h1>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-12">
                At the Robotics Collective, our mission is to accelerate
                robotics adoption and the development of intelligent robotic
                systems that harmoniously interact with humans and their
                environment. We believe in the power of collaborative innovation
                and open-source technologies to democratize robotics and create
                a future where advanced automation enhances human potential
                rather than replaces it.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We envision a world where robots are not just tools, but
                collaborative partners that augment human capabilities across
                all facets of life. By 2030, we aim to create a foundation for
                self-improving robotic systems that can adapt to their
                surroundings, learn from human interactions, and contribute
                meaningfully to solving some of humanity's most pressing
                challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-card p-6 rounded-lg">
                  <div className="text-yellow-secondary text-3xl font-bold mb-2">
                    2023
                  </div>
                  <div className="text-gray-200 font-medium">
                    Founded in Aachen
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <div className="text-primary text-3xl font-bold mb-2">
                    17+
                  </div>
                  <div className="text-gray-200 font-medium">
                    Research Partnerships
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto my-20 border-t border-primary/20"></div>
        {/* Leadership Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-primary">Leadership</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leadershipTeam.map((member) => (
                <div
                  key={member._id}
                  className="flex flex-col items-center group transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="w-40 h-40 mb-6 overflow-hidden rounded-full border-3 border-yellow-secondary group-hover:border-primary transition-colors duration-300 relative shadow-lg">
                    <Image
                      src={buildImageUrl(member.imageUrl || member.image)}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary text-lg mb-4">{member.role}</p>
                  <p className="text-gray-300 text-center max-w-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex mt-3 space-x-4">
                    {member.contact?.email && (
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    )}
                    {member.contact?.linkedin && (
                      <a
                        href={member.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    )}
                    {member.contact?.github && (
                      <a
                        href={member.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Join Leadership Team CTA */}
              <div className="flex items-center justify-center">
                <div className="bg-card/70 p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/5 h-full flex flex-col justify-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <UserPlus className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      Join Our Leadership
                    </h3>
                    <p className="text-gray-300 mb-4">
                      We're growing our team with visionary and passionate
                      leaders.
                    </p>
                    <Link href="/contact">
                      <Button variant="default">Get in Touch</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-primary">Core</span> Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeam.map((member) => (
                <div
                  key={member._id}
                  className="flex flex-col items-center group transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div
                    className={`w-32 h-32 mb-4 overflow-hidden rounded-full border-2 ${
                      member.isBoard
                        ? "border-yellow-secondary"
                        : "border-primary/30"
                    } group-hover:border-primary transition-colors duration-300 relative`}
                  >
                    <Image
                      src={buildImageUrl(member.imageUrl || member.image)}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {member.isBoard && (
                      <div
                        className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-secondary rounded-full flex items-center justify-center shadow-md"
                        title="Board Member"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-black"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary">{member.role}</p>
                  <div className="flex mt-3 space-x-4">
                    {member.contact?.email && (
                      <a
                        href={`mailto:${member.contact.email}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.contact?.linkedin && (
                      <a
                        href={member.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.contact?.github && (
                      <a
                        href={member.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Join Us */}
              <div className="flex flex-col items-center group transition-all duration-300 hover:translate-y-[-4px]">
                <div className="bg-card/70 p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/5 h-full flex flex-col justify-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <UserPlus className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Join Our Team</h3>
                    <p className="text-gray-300 mb-4">
                      Become part of our core team and help shape the future of
                      robotics.
                    </p>
                    <Link href="/positions">
                      <Button variant="default">Apply Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual separator between core team and community members */}
            <div className="max-w-3xl mx-auto my-20 border-t border-primary/20"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-primary">Community</span> Members
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {communityMembers.map((member) => (
                <div
                  key={member._id}
                  className="flex flex-col items-center group transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <a
                    href={member.contact?.linkedin || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <div className="w-24 h-24 mb-3 overflow-hidden rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
                      <Image
                        src={buildImageUrl(member.imageUrl || member.image)}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-center text-white group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Section */}
        {alumniMembers.length > 0 && (
          <>
            <div className="max-w-3xl mx-auto my-12 border-t border-primary/20"></div>
            <section className="py-8 md:py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                  <span className="text-primary">Alumni</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                  {alumniMembers.map((member) => (
                    <div
                      key={member._id}
                      className="flex flex-col items-center group transition-all duration-300 hover:scale-110"
                    >
                      <a
                        href={member.contact?.linkedin || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <div className="w-16 h-16 mb-2 overflow-hidden rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-primary/20">
                          <Image
                            src={buildImageUrl(member.imageUrl || member.image)}
                            alt={member.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <p className="text-xs font-medium text-center text-gray-300 group-hover:text-white transition-colors">
                          {member.name.split(" ")[0]}
                        </p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        <div className="max-w-3xl mx-auto my-20 border-t border-primary/20"></div>

        {/* Partner Organizations Section */}
        <LogoCarousel
          partners={partners}
          title="Partner Organizations"
          showOnlyActive={true}
        />

        {/* Join as Organization CTA */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-card/70 p-8 rounded-lg border border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-3">
                  Become a Partner Organization
                </h3>
                <p className="text-gray-300 mb-6">
                  Interested in collaborating with Robotics Collective? We just
                  started onboarding our first partners and are looking for
                  organizations and individuals with forward-thinking
                  organizations in academia, research, and industry to advance
                  robotics innovation.
                </p>
                <Link href="/contact">
                  <Button
                    variant="default"
                    className="px-8 py-6 text-lg rounded-3xl"
                    size="lg"
                  >
                    Get in Touch{" "}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
