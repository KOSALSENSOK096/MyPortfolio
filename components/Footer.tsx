
import React from 'react';

interface FooterProps {
    name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {currentYear} {name}. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
          Designed & Developed with <span className="text-red-500 animate-pulse">&hearts;</span> using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
