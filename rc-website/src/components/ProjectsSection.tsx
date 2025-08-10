"use client";

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { buildImageUrl } from '@/lib/sanity';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getFeaturedProjects } from '@/lib/sanity-queries';
import type { Project } from '@/lib/sanity';
import { trackEngagement, ENGAGEMENT_EVENTS } from '@/lib/analytics';

const ProjectCard = ({ project }: { project: Project }) => {
  const imageUrl = buildImageUrl(project.image || project.imageUrl);
  
  return (
    <div className="bg-card rounded-3xl overflow-hidden group transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <Image 
          src={imageUrl} 
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="mt-auto">
          <Link href={`/projects/${project.slug.current}`}>
            <Button 
              variant="ghost" 
              className="text-primary p-0 group hover:bg-transparent hover:no-underline"
              onClick={() => trackEngagement(ENGAGEMENT_EVENTS.PROJECT_VIEW, {
                project_title: project.title,
                project_slug: project.slug.current,
                source: 'homepage_featured'
              })}
            >
              Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface ProjectsSectionProps {
  projects?: Project[];
}

const ProjectsSection = ({ projects: propProjects }: ProjectsSectionProps = {}) => {
  const [displayProjects, setDisplayProjects] = useState<Project[]>(propProjects || []);
  const [loading, setLoading] = useState(!propProjects);

  useEffect(() => {
    // Only fetch if no projects were provided as props
    if (!propProjects) {
      const fetchProjects = async () => {
        try {
          const featuredProjects = await getFeaturedProjects();
          // If we have featured projects, use them; otherwise fallback to empty array
          setDisplayProjects(featuredProjects.slice(0, 4));
        } catch (error) {
          console.error('Failed to fetch featured projects:', error);
          setDisplayProjects([]);
        } finally {
          setLoading(false);
        }
      };

      fetchProjects();
    } else {
      // Use provided projects and slice to max 4
      setDisplayProjects(propProjects.slice(0, 4));
    }
  }, [propProjects]);

  if (loading) {
    return (
      <section id="projects" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-primary">Core</span> Projects
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Our flagship initiatives pushing the boundaries of what's possible in robotics and artificial intelligence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card rounded-3xl overflow-hidden h-80 animate-pulse">
                <div className="h-48 bg-gray-700"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Core</span> Projects
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Our flagship initiatives pushing the boundaries of what's possible in robotics and artificial intelligence.
        </p>
        
        {displayProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {displayProjects.map(project => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 mb-4">No featured projects available at the moment.</p>
            <Link href="/projects">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background">
                View All Projects
              </Button>
            </Link>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Link href="/projects">
              <Button 
                variant="default" 
                className="px-8 py-6 text-lg rounded-3xl"
                size="lg"
                onClick={() => trackEngagement(ENGAGEMENT_EVENTS.CTA_BUTTON_CLICK, {
                  button_text: 'View All Projects',
                  destination: '/projects',
                  section: 'homepage_projects'
                })}
              >
                View All Projects<ArrowRight className="ml-2 h-4 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
