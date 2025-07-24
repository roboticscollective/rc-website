// src/app/projects/[slug]/page.tsx

import { Button } from "@/components/ui/button";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { getTeamMemberById } from "@/data/team";
import {
  ArrowLeft,
  Github,
  Globe,
  FileText,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReactMarkDown from 'react-markdown';

// Define Promise-based types for props
type PageParams = Promise<{ slug: string }>;
type PageSearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Update generateMetadata signature and usage
export async function generateMetadata({
  params: paramsPromise,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const params = await paramsPromise; // Await the promise
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Robotics Collective`,
    description: project.description,
    keywords: [...project.tags, "robotics", "innovation", "project details"],
  };
}

const StatusBadge = ({ status }: { status: string }) => {
  const getBadgeClasses = () => {
    switch (status) {
      case "ongoing":
        return "bg-green-500/20 text-green-500 border-green-500";
      case "finished":
        return "bg-blue-500/20 text-blue-500 border-blue-500";
      case "planned":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500";
      default:
        return "bg-gray-500/20 text-gray-500 border-gray-500";
    }
  };

  return (
    <span
      className={`text-xs px-3 py-1 rounded-full border ${getBadgeClasses()} font-semibold uppercase tracking-wider`}
    >
      {status}
    </span>
  );
};

// Update Page component signature and usage
export default async function ProjectPage({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: {
  params: PageParams;
  searchParams: PageSearchParams;
}) {
  const params = await paramsPromise; // Await the promise
  const searchParams = await searchParamsPromise; // Await the promise
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const pointOfContact = getTeamMemberById(project.pointOfContactId);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section with full-width image */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background" />
        </div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
          <Link href="/projects">
            <Button
              variant="outline"
              className="mb-6 flex items-center gap-2 text-white border-white/20 bg-black/30 backdrop-blur-sm hover:bg-black/50 rounded-3xl"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Button>
          </Link>

          <div className="flex items-center gap-2 mb-3">
            <StatusBadge status={project.status} />
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content column */}
          <div className="md:col-span-2">
	      <div className="prose prose-invert max-w-none">
              {project.content?.split("\n\n").map((paragraph, idx) => (
                <p key={idx} className="mb-6 text-lg text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
	  {/*
	  <div ClassName="prose prose-invert max-w-none">
	    <ReactMarkDown>{project.content}</ReactMarkDown>
	  </div>
	   */}

            {/* Gallery Grid */}
	    {project.galleryImages && project.galleryImages.length > 0 && (
		    <div className="mt-12">
		    <h2 className="text-2xl font-bold mb-6">Gallery</h2>
		    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		    {project.galleryImages.map((item, idx) => (
			    <div
			    key={idx}
			    className="rounded-lg overflow-hidden"
			    >
			    {item.type == 'video' ? (
				    <video
				    controls
				    poster={item.poster}
				    className="w-full h-full object-cover"
				    >
				    <source src={item.src} type="video/mp4" />
				    Your browser does not support the video tag.
					    </video>

			    ) : (
			    <img
			    src={item.src}
			    alt={`${project.title} gallery image ${idx + 1}`}
			    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
			    />
			    )}
			    </div>
		    ))}
                </div>
              </div>
            )}

            <div className="mt-12 bg-card rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">
                Interested in this project?
              </h3>
              <p className="text-gray-300 mb-6">
                Want to learn more about this project or contribute to its
                development? We're always looking for collaborators and fresh
                perspectives.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button>Contact Us</Button>
                </Link>
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="secondary"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      View on GitHub
                    </Button>
                  </a>
                )}
                {project.links?.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="secondary"
                      className="flex items-center gap-2"
                    >
                      <Globe size={16} />
                      Visit Website
                    </Button>
                  </a>
                )}
                {project.links?.documentation && (
                  <a
                    href={project.links.documentation}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <FileText size={16} />
                      Documentation
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar info column */}
          <div className="md:col-span-1">
            {/* Project Info Card */}
            <div className="bg-card rounded-xl p-6 mb-8 sticky top-24">
              <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
                Project Details
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-400">Status</h4>
                  <StatusBadge status={project.status} />
                </div>

                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs bg-secondary px-2 py-1 rounded-full text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Point of Contact */}
                {pointOfContact && (
                  <div>
                    <h4 className="text-sm text-gray-400 mb-2">
                      Point of Contact
                    </h4>
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <img
                          src={pointOfContact.image}
                          alt={pointOfContact.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{pointOfContact.name}</p>
                        {/* Contact Links */}
                        <div className="flex items-center space-x-2 mt-2">
                          {pointOfContact.contact?.email && (
                            <a
                              href={`mailto:${pointOfContact.contact.email}`}
                              className="text-gray-400 hover:text-primary"
                            >
                              <Mail size={16} />
                            </a>
                          )}
                          {pointOfContact.contact?.github && (
                            <a
                              href={pointOfContact.contact.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-primary"
                            >
                              <Github size={16} />
                            </a>
                          )}
                          {pointOfContact.contact?.twitter && (
                            <a
                              href={pointOfContact.contact.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-primary"
                            >
                              <Twitter size={16} />
                            </a>
                          )}
                          {pointOfContact.contact?.linkedin && (
                            <a
                              href={pointOfContact.contact.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-primary"
                            >
                              <Linkedin size={16} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Links */}
                <div>
                  <h4 className="text-sm text-gray-400 mb-2">Resources</h4>
                  <div className="space-y-2">
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-primary"
                      >
                        <Github size={16} className="mr-2" />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                    {project.links?.website && (
                      <a
                        href={project.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-primary"
                      >
                        <Globe size={16} className="mr-2" />
                        <span>Project Website</span>
                      </a>
                    )}
                    {project.links?.documentation && (
                      <a
                        href={project.links.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-primary"
                      >
                        <FileText size={16} className="mr-2" />
                        <span>Documentation</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
