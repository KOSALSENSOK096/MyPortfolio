import React, { useState } from 'react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface DownloadButtonProps {
  fileUrl: string;
  fileName?: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  fileUrl, 
  fileName = 'CV.pdf',
  className = ''
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      
      // Create a link element
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset state after a brief delay to show animation
      setTimeout(() => setIsDownloading(false), 1000);
    } catch (error) {
      console.error('Download failed:', error);
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`
        inline-flex items-center gap-2 px-6 py-3 rounded-lg
        bg-primary-600 hover:bg-primary-700 
        dark:bg-primary-500 dark:hover:bg-primary-600
        text-white font-medium
        transform transition-all duration-200
        ${isDownloading ? 'scale-95' : 'hover:scale-105'}
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        disabled:opacity-75 disabled:cursor-not-allowed
        shadow-lg hover:shadow-xl
        ${className}
      `}
    >
      <ArrowDownTrayIcon className={`w-5 h-5 ${isDownloading ? 'animate-bounce' : ''}`} />
      <span>Download CV</span>
    </button>
  );
};

export default DownloadButton; 