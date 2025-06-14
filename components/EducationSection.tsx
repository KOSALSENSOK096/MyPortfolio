
import React from 'react';
import Section from './Section';
import EducationItem from './EducationItem';
import { Education } from '../types';

interface EducationSectionProps {
  educationHistory: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ educationHistory }) => {
  return (
    <Section id="education" title="Education" className="bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        {educationHistory.map((edu, index) => (
            <div key={edu.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s`}}>
             <EducationItem edu={edu} />
           </div>
        ))}
      </div>
    </Section>
  );
};

export default EducationSection;
