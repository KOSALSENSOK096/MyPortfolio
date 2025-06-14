import React from 'react';
import { Recording } from '../types';
import { PlayIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline';

interface RecordingCardProps {
  recording: Recording;
}

const RecordingCard: React.FC<RecordingCardProps> = ({ recording }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      {/* Thumbnail Container */}
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={recording.thumbnailUrl}
          alt={recording.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <PlayIcon className="w-16 h-16 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {recording.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {recording.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <ClockIcon className="w-4 h-4 mr-1" />
            {recording.duration}
          </div>
          <div className="flex items-center">
            <TagIcon className="w-4 h-4 mr-1" />
            {recording.tags.slice(0, 2).join(', ')}
            {recording.tags.length > 2 && ' ...'}
          </div>
        </div>

        {/* Date */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-75 text-white text-sm px-3 py-1 rounded-full">
          {recording.date}
        </div>
      </div>
    </div>
  );
};

export default RecordingCard; 