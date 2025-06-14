
import React from 'react';
import { Testimonial } from '../types';

const ChatBubbleLeftRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.543-3.091A9.117 9.117 0 0 1 12 15.509Zm-15.015-1.194A9.022 9.022 0 0 1 12 5.509c1.624 0 3.14.391 4.492 1.052A9.003 9.003 0 0 0 12 3c-4.392 0-8 2.902-8 6.509v4.428c0 .283.023.562.068.836l-.068-.068A9.005 9.005 0 0 1 4.5 15.509Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12h-.008v.008H7.5V12Zm3.75 0h-.008v.008h.008V12Zm3.75 0h-.008v.008h.008V12Z" />
 </svg>
);

const UserCircleIconSolid: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15.75a7.486 7.486 0 0 1 5.855 2.062A8.25 8.25 0 0 1 12 20.25a8.25 8.25 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
  </svg>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const getInitials = (name: string) => {
    const names = name.split(' ');
    if (names.length === 1) return names[0][0]?.toUpperCase() || '';
    return (names[0][0]?.toUpperCase() || '') + (names[names.length - 1][0]?.toUpperCase() || '');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col p-6 md:p-8 h-full">
      <ChatBubbleLeftRightIcon className="w-10 h-10 text-primary-500 dark:text-primary-400 mb-4 flex-shrink-0" />
      <blockquote className="text-gray-600 dark:text-gray-300 italic text-lg leading-relaxed mb-6 flex-grow">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
        {testimonial.avatarUrl ? (
          <img
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover mr-4 flex-shrink-0"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-700 flex items-center justify-center text-primary-600 dark:text-primary-300 text-xl font-semibold mr-4 flex-shrink-0">
            {getInitials(testimonial.name)}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-800 dark:text-white text-md">{testimonial.name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {testimonial.title}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
