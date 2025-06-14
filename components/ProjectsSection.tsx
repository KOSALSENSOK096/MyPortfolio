
import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { Project } from '../types';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <Section id="projects" title="My Projects" className="bg-gray-100 dark:bg-gray-900">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`}}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
