
import React, { useState } from 'react';
import Section from './Section';

const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.65.65 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.96 3.36 4.42z"></path>
    </svg>
);

const GitHubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
    </svg>
);

interface ContactSectionProps {
  email: string;
  linkedin: string;
  github: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ email, linkedin, github }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitted(false);

    if (!formData.name || !formData.email || !formData.message) {
        setError('All fields are required.');
        return;
    }
    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
        setError('Please enter a valid email address.');
        return;
    }

    console.log('Form data submitted (simulated):', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => {
        setIsSubmitted(false);
        setError('');
    }, 5000);
  };

  return (
    <Section id="contact" title="Get In Touch" className="bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 animate-fade-in-up">
          Have a project in mind, a question, or just want to say hi? I'd love to hear from you!
        </p>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-left">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
              <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Your message..."></textarea>
            </div>
            <div>
              <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600 transition-colors duration-300">
                Send Message
              </button>
            </div>
            {error && (
              <p className="text-center text-red-600 dark:text-red-400 p-3 bg-red-100 dark:bg-red-700 dark:bg-opacity-50 rounded-md text-sm">
                {error}
              </p>
            )}
            {isSubmitted && (
              <p className="text-center text-green-600 dark:text-green-400 p-3 bg-green-100 dark:bg-green-700 dark:bg-opacity-50 rounded-md text-sm">
                Thank you! Your message has been sent (simulated).
              </p>
            )}
          </form>

          <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Or connect with me via:</h3>
            <a href={`mailto:${email}`} className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
              <EnvelopeIcon className="w-6 h-6 mr-4 text-primary-500 dark:text-primary-400 flex-shrink-0" />
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-200">Email</span>
                <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
              </div>
            </a>
             <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
              <LinkedInIcon className="w-6 h-6 mr-4 text-blue-600 dark:text-blue-500 flex-shrink-0" />
               <div>
                <span className="font-medium text-gray-700 dark:text-gray-200">LinkedIn</span>
                <p className="text-sm text-gray-500 dark:text-gray-400">View Profile</p>
              </div>
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
              <GitHubIcon className="w-6 h-6 mr-4 text-gray-800 dark:text-gray-200 flex-shrink-0" />
              <div>
                <span className="font-medium text-gray-700 dark:text-gray-200">GitHub</span>
                <p className="text-sm text-gray-500 dark:text-gray-400">View Profile</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
