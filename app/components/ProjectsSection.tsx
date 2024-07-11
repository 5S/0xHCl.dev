import ProjectCard, {
  type ProjectCardProps,
} from "@/app/components/ProjectCard";

type ProjectsSectionProps = {
  projects: ProjectCardProps[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="mb-8">
      <header className="mb-4">
        <h2>Popular projects</h2>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
