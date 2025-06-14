import React from 'react';
import { BlogPostMapping } from '../types';

const CalendarDaysIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-3.75h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
  </svg>
);

const UserCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

const ArrowRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

const TagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
  </svg>
);


const BlogCard: React.FC<{ post: BlogPostMapping }> = ({ post }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full">
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-56 object-cover"
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">{post.title}</h3>
        
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3 space-x-3">
          <div className="flex items-center">
            <CalendarDaysIcon className="w-4 h-4 mr-1.5" />
            <span>{post.publishDate}</span>
          </div>
          {post.author && (
            <div className="flex items-center">
              <UserCircleIcon className="w-4 h-4 mr-1.5" />
              <span>{post.author}</span>
            </div>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow leading-relaxed">{post.summary}</p>
        
        {post.tags && post.tags.length > 0 && (
          <div className="mb-4">
             <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-200 text-xs rounded-full font-medium flex items-center">
                  <TagIcon className="w-3 h-3 mr-1 opacity-70" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={post.readMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
          >
            Read More
            <ArrowRightIcon className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;