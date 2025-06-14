import React from 'react';
import Section from './Section';
import { TechStackItem } from '../types';

const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
);
const ServerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 0 0-.12-1.03l-2.268-9.64a3.375 3.375 0 0 0-3.285-2.602H7.923a3.375 3.375 0 0 0-3.285 2.602l-2.268 9.64a4.5 4.5 0 0 0-.12 1.03v.228m19.5 0a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3m19.5 0a3 3 0 0 0-3-3H5.25a3 3 0 0 0-3 3m16.5 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Zm-3 0h.008v.008h-.008v-.008Z" />
  </svg>
);
const DatabaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.03 1.122 0 1.131.094 1.976 1.057 1.976 2.192V7.5M8.25 7.5h7.5M8.25 7.5V9a.75.75 0 0 1-.75.75H5.625a.75.75 0 0 1-.75-.75V7.5m10.5 0V9A.75.75 0 0 0 18.375 9.75h-1.5a.75.75 0 0 0-.75-.75V7.5m-7.5 0h7.5M12 16.5h.008v.008H12V16.5Zm-3.75 0h.008v.008H8.25V16.5Zm0 3h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008Zm3.75 0h.008v.008H12v-.008Zm0 3h.008v.008H12v-.008Zm0 3h.008v.008H12v-.008Zm3.75 0h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V19.5a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 19.5V8.25M3 8.25h18M3 8.25c0-1.02.598-1.888 1.455-2.253C5.64 5.66 7.027 5.25 8.508 5.25c1.48 0 2.868.41 4.053.997C13.74 6.362 14.402 7.23 14.402 8.25M8.508 5.25c1.48 0 2.867.41 4.053.997M8.508 5.25V3M14.402 5.25c.604.415 1.056.96 1.348 1.597M14.402 5.25V3" />
  </svg>
);
const PaintBrushIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.39m3.421 1.756a16.44 16.44 0 0 0 1.622-3.39m3.421 1.756a16.44 16.44 0 0 0 1.622-3.39m1.414 1.414a1.5 1.5 0 1 0-2.12-2.121l-1.128 1.127a1.5 1.5 0 0 0 2.121 2.121l1.127-1.127Zm-5.043-.025a15.998 15.998 0 0 0-1.622-3.39m5.043 1.622a15.998 15.998 0 0 0 3.388-1.62m0 0a15.998 15.998 0 0 0-3.388-1.62m-11.228 6.908a15.998 15.998 0 0 0 1.622 3.39m-1.622-3.39a15.998 15.998 0 0 0-1.622-3.39m0 0a15.995 15.995 0 0 0-3.128 0m3.128 0a15.995 15.995 0 0 1-3.128 0m7.078 3.421a15.998 15.998 0 0 0-1.622-3.39M14.072 13.93a15.998 15.998 0 0 0-1.622-3.39m0 0a15.998 15.998 0 0 0-3.388-1.62M10.684 10.552a15.998 15.998 0 0 0-3.388-1.62" />
  </svg>
);
const WrenchScrewdriverIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.495-2.495a1.5 1.5 0 0 1 2.122 0l.879.879a1.5 1.5 0 0 1 0 2.122L13.538 17.25M11.42 15.17 4.217 7.964a1.5 1.5 0 0 1 0-2.122l.879-.879a1.5 1.5 0 0 1 2.122 0L11.42 15.17Zm0 0L10.267 14.017l-6.405-6.405a1.125 1.125 0 0 1 0-1.591l.879-.879a1.125 1.125 0 0 1 1.591 0L14.017 10.267m-2.597 4.903L14.478 13.5M9.375 10.518l-3.348-3.348a1.125 1.125 0 0 1 0-1.591l.879-.879a1.125 1.125 0 0 1 1.591 0L12 8.168m-2.625 2.35L12 13.5m0 0 .736.736a.627.627 0 0 0 .886 0l1.415-1.415a.627.627 0 0 0 0-.886l-.736-.736M12 13.5Zm0 0-.368-.368a.627.627 0 0 0-.886 0l-1.415 1.415a.627.627 0 0 0 0 .886l.368.368M12 13.5Zm0 0-.736-.736a.627.627 0 0 0-.886 0L9.264 13.5a.627.627 0 0 0 0 .886l.736.736M12 13.5Z" />
    </svg>
);


const TechStackSection: React.FC<{ techStack: TechStackItem[] }> = ({ techStack }) => {
    
  const getIconForCategory = (category: TechStackItem['category']) => {
    switch (category) {
      case 'Frontend': return <CodeIcon className="text-blue-500 dark:text-blue-400" />;
      case 'Backend': return <ServerIcon className="text-green-500 dark:text-green-400" />;
      case 'Database': return <DatabaseIcon className="text-purple-500 dark:text-purple-400" />;
      case 'Design': return <PaintBrushIcon className="text-pink-500 dark:text-pink-400" />;
      case 'DevOps': return <WrenchScrewdriverIcon className="text-orange-500 dark:text-orange-400" />;
      case 'Other':
      default: return <CodeIcon className="text-gray-500 dark:text-gray-400" />; 
    }
  };

  return (
    <Section id="techstack" title="My Tech Stack" className="bg-gray-100 dark:bg-gray-900">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 text-center">
        {techStack.map((tech, index) => (
          <div 
            key={tech.name} 
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center aspect-square animate-fade-in-up"
            style={{ animationDelay: `${index * 0.05}s`}}
          >
            <div className="mb-3">
                {React.isValidElement(tech.icon) && React.Children.count((tech.icon.props as { children?: React.ReactNode }).children) > 0
                    ? React.cloneElement(tech.icon as React.ReactElement<{ className?: string }>, { className: 'w-10 h-10 text-primary-500 dark:text-primary-400' }) 
                    : getIconForCategory(tech.category)}
            </div>
            <h4 className="text-md font-semibold text-gray-700 dark:text-gray-200">{tech.name}</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">{tech.category}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechStackSection;