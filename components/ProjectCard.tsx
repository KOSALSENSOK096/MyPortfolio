
import React from 'react';
import { Project } from '../types';

const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);

const ArrowTopRightOnSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-700 text-primary-700 dark:text-primary-200 text-xs rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
            >
              <CodeBracketIcon className="w-4 h-4 mr-2" />
              GitHub
            </a>
          )}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors"
            >
             <ArrowTopRightOnSquareIcon className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
