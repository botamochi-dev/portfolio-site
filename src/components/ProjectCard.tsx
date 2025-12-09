import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-image-placeholder">
        {/* <Image src={project.image} alt={project.name} width={400} height={300} /> */}
      </div>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-technologies">{project.technologies}</p>
      <p className="project-description">{project.description}</p>
    </div>
  );
}
