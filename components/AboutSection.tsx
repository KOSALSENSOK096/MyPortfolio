
import React from 'react';
import Section from './Section';
import { Skill } from '../types';

interface AboutSectionProps {
  bio: string;
  skills: Skill[];
  country: string;
  languages: string[];
}

const GlobeAltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A11.978 11.978 0 0 1 12 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686-5.834A8.959 8.959 0 0 0 3 12c0 .778.099 1.533.284 2.253m0 0A11.978 11.978 0 0 0 12 16.5c2.998 0 5.74 1.1 7.843-2.918" />
    </svg>
);

const LanguageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 0 12.758M3 18.379a48.46 48.46 0 0 0 0-12.758m0 12.758h16.5M16.5 18.379V5.621L12 3.5M16.5 5.621L9.75 3.5m0 0L3 5.621M3 5.621V18.38m0-12.758c0-1.02.527-1.944 1.359-2.497M3 18.38c0 .245.02.486.06.721m13.44-13.44c.54-.261 1.13-.404 1.74-.404a2.625 2.625 0 0 1 2.625 2.625c0 .61-.143 1.2-.404 1.74m-14.132 0c.261.54.404 1.13.404 1.74a2.625 2.625 0 0 0-2.625 2.625c-.61 0-1.2.143-1.74.404M3.28 15.061A2.625 2.625 0 0 0 .655 17.686c0 .61.143 1.2.404 1.74m0 0c.261.54.404 1.13.404 1.74a2.625 2.625 0 0 0 2.625 2.625c.61 0 1.2-.143 1.74-.404m11.513-14.132c.261-.54.404-1.13.404-1.74a2.625 2.625 0 0 0-2.625-2.625c-.61 0-1.2.143-1.74.404" />
    </svg>
);


const AboutSection: React.FC<AboutSectionProps> = ({ bio, skills, country, languages }) => {
  return (
    <Section id="about" title="About Me" className="bg-white dark:bg-gray-800">
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 animate-slide-in-left">
          <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {bio}
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <GlobeAltIcon className="w-6 h-6 mr-3 text-primary-500 dark:text-primary-400 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Based in: {country}</span>
            </div>
            <div className="flex items-center">
              <LanguageIcon className="w-6 h-6 mr-3 text-primary-500 dark:text-primary-400 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">Languages: {languages.join(', ')}</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.slice(0, 8).map((skill) => ( // Show top skills, adjust as needed
              <div
                key={skill.name}
                className="bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-200 px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-transform hover:scale-105"
              >
                {skill.name} {skill.level && <span className="text-xs opacity-75 ml-1">({skill.level.substring(0,3).toUpperCase()})</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
