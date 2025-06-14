
import React from 'react';
import { Experience } from '../types';

const BriefcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.05c0 .621-.504 1.125-1.125 1.125h-13.5c-.621 0-1.125-.504-1.125-1.125v-4.05m15.75 0v-4.05a2.25 2.25 0 0 0-2.25-2.25h-11.25a2.25 2.25 0 0 0-2.25 2.25v4.05m15.75 0h-15.75M12 19.5h.008v.008H12v-.008Z" />
  </svg>
);


const ExperienceItem: React.FC<{ experience: Experience }> = ({ experience }) => {
  return (
    <div className="relative pl-12 pb-10 border-l-2 border-primary-500 dark:border-primary-400 last:border-l-transparent last:pb-0">
       <div className="absolute -left-[17px] top-0 w-8 h-8 bg-primary-500 dark:bg-primary-400 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-gray-800"> {/* Adjusted left position */}
         <BriefcaseIcon className="w-4 h-4 text-white" />
       </div>
      <div className="ml-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-start sm:items-center mb-2 flex-col sm:flex-row">
            {experience.logoUrl && (
                <img src={experience.logoUrl} alt={`${experience.company} logo`} className="w-12 h-12 rounded-full mr-0 mb-3 sm:mr-4 sm:mb-0 object-contain flex-shrink-0"/>
            )}
            <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{experience.role}</h3>
                <p className="text-md text-primary-600 dark:text-primary-400">{experience.company}</p>
            </div>
             <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 sm:ml-auto flex-shrink-0">{experience.date}</p>
        </div>
       
        <ul className="list-disc list-inside space-y-1.5 text-gray-600 dark:text-gray-300 text-sm pl-1">
          {experience.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceItem;
