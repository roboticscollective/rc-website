import { getAllProjects } from "@/lib/sanity-queries";
import { ProjectsClientPage } from "./projects-client";

// Metadata is now exported from metadata.ts file

export default async function ProjectsPage() {
  // Fetch projects data at build time (SSG)
  const projects = await getAllProjects();

  return <ProjectsClientPage projects={projects} />;
}
