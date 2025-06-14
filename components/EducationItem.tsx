
import React from 'react';
import { Education } from '../types';

const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
);


const EducationItem: React.FC<{ edu: Education }> = ({ edu }) => {
  return (
    <div className="relative pl-12 pb-10 border-l-2 border-secondary-500 dark:border-secondary-400 last:border-l-transparent last:pb-0">
      <div className="absolute -left-[17px] top-0 w-8 h-8 bg-secondary-500 dark:bg-secondary-400 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-gray-900"> {/* Adjusted left position */}
        <AcademicCapIcon className="w-4 h-4 text-white" />
      </div>
      <div className="ml-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start sm:items-center mb-2 flex-col sm:flex-row">
            {edu.logoUrl && (
                <img src={edu.logoUrl} alt={`${edu.institution} logo`} className="w-12 h-12 rounded-full mr-0 mb-3 sm:mr-4 sm:mb-0 object-contain flex-shrink-0"/>
            )}
            <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                <p className="text-md text-secondary-600 dark:text-secondary-400">{edu.institution}</p>
            </div>
             <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 sm:ml-auto flex-shrink-0">Grad: {edu.graduationDate}</p>
        </div>
       
        <div>
            <h4 className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2 mt-3">Key Skills/Coursework:</h4>
            <div className="flex flex-wrap gap-2">
            {edu.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-200 text-xs rounded-full font-medium">
                {skill}
                </span>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default EducationItem;
