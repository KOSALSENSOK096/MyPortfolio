
import React from 'react';
import Section from './Section';
import ExperienceItem from './ExperienceItem';
import { Experience } from '../types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <Section id="experience" title="Work Experience" className="bg-white dark:bg-gray-800">
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
           <div key={exp.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s`}}>
            <ExperienceItem experience={exp} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ExperienceSection;
