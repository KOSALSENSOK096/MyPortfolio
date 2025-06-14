import React, { useState } from 'react';
import Section from './Section';
import RecordingCard from './RecordingCard';
import { Recording } from '../types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface RecordingsSectionProps {
  recordings: Recording[];
}

const RecordingsSection: React.FC<RecordingsSectionProps> = ({ recordings }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get unique tags from all recordings
  const allTags = Array.from(new Set(recordings.flatMap(r => r.tags)));

  // Filter recordings based on search term and selected tag
  const filteredRecordings = recordings.filter(recording => {
    const matchesSearch = recording.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recording.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || recording.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <Section id="recordings" title="Video Recordings" className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search recordings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                       focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${!selectedTag 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                  ${selectedTag === tag 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid of Recordings */}
        {filteredRecordings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRecordings.map((recording, index) => (
              <div
                key={recording.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <RecordingCard recording={recording} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No recordings found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default RecordingsSection; 