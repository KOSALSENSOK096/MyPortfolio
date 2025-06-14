import React from 'react';
import DownloadButton from './DownloadButton';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface HeroSectionProps {
  name: string;
  tagline: string;
  cvUrl: string;
  profileImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  tagline,
  cvUrl,
  profileImage
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 bg-gradient-to-br from-blue-600 to-purple-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src={profileImage}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Tagline */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            {name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <DownloadButton 
              fileUrl={cvUrl} 
              fileName="kosal_sensok_cv.pdf"
              className="w-full sm:w-auto"
            />
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                bg-white hover:bg-gray-100 
                dark:bg-gray-800 dark:hover:bg-gray-700
                text-gray-900 dark:text-white font-medium
                transform transition-all duration-200 hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2
                shadow-lg hover:shadow-xl
                w-full sm:w-auto"
            >
              Contact Me
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
