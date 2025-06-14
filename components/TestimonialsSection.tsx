
import React from 'react';
import Section from './Section';
import TestimonialCard from './TestimonialCard';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <Section id="testimonials" title="What People Say" className="bg-white dark:bg-gray-800">
      {testimonials && testimonials.length > 0 ? (
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      ) : (
         <p className="text-center text-gray-600 dark:text-gray-400">No testimonials to display yet.</p>
      )}
    </Section>
  );
};

export default TestimonialsSection;
