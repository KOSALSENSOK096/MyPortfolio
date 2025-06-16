import React, { useState, useEffect, createContext, useMemo, useCallback } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import CertificatesSection from './components/CertificatesSection';
import BlogSection from './components/BlogSection';
import TestimonialsSection from './components/TestimonialsSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import RecordingsSection from './components/RecordingsSection';
import Footer from './components/Footer';
import { Project, Experience, Education, Certificate, TechStackItem, Skill, BlogPostMapping, Testimonial, Recording } from './types';

// Define and export ThemeContextType
export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Define and export ThemeContext
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Placeholder for actual SVG icons if needed, e.g. for TechStackItem.icon
const PlaceholderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

const personalInfo = {
    name: "KOSAL SENSOK",
    tagline: "A Passionate Backend Developer Frontend Developer & UI / UX Enthusiast",
    bio: `Hello! I'm KOSAL SENSOK, a versatile developer with a strong passion for creating efficient backend systems, intuitive frontend interfaces, and engaging user experiences. With a solid foundation in both backend and frontend technologies, I enjoy tackling complex challenges and building scalable, high-performance applications.

My journey in tech has been driven by a curiosity to learn and adapt. I thrive in collaborative environments, leveraging my skills to contribute to innovative projects. I'm always eager to explore new tools and methodologies to enhance my development process and deliver exceptional results. Whether it's architecting robust APIs, crafting pixel-perfect UIs, or optimizing application performance, I am committed to excellence in every aspect of software development.

Beyond coding, I'm an advocate for clean code, user-centric design, and continuous improvement. I believe that the best products are built when technical expertise meets a deep understanding of user needs.`,
    country: "Cambodia",
    languages: ["Khmer (Native)", "English (Fluent)"],
    email: "kosalsensok065@gmail.com",
    linkedin: "https://linkedin.com/in/kosalsensokdev",
    github: "https://github.com/KOSALSENSOK096",
    cvUrl: "/assets/kosal_sensok_cv.pdf"
};


const sampleProjects: Project[] = [
  { id: '1', title: 'Banking Management System', description: 'A comprehensive banking system with features for account management, transactions, and financial reporting. Built with a focus on security and data integrity.', imageUrl: '/images/banking-project.jpg', technologies: ['Python', 'Database Management', 'Security Protocols', 'Financial APIs'], githubUrl: 'https://github.com/KOSALSENSOK096/Banking-Management-System.rar', liveDemoUrl: '#' },
  { id: '2', title: 'EDC System', description: 'Electricite du Cambodge Management System for efficient utility management and customer service.', imageUrl: '/images/edc-project.jpg', technologies: ['Laravel', 'MySQL', 'REST APIs', 'Payment Integration'], githubUrl: 'https://github.com/KOSALSENSOK096/EDC-System', liveDemoUrl: '#' },
  { id: '3', title: 'Trivia Question Game', description: 'An interactive trivia game application built with vanilla JavaScript, featuring dynamic question loading, score tracking, and responsive design. Implements modern web development practices and clean code architecture.', imageUrl: '/images/trivia-project.jpg', technologies: ['JavaScript', 'HTML5', 'CSS3', 'Web APIs', 'Responsive Design'], githubUrl: 'https://github.com/KOSALSENSOK096/Trivia-Question', liveDemoUrl: 'https://trivia-question.vercel.app/' },
  { id: '4', title: 'Mart Management System', description: 'A comprehensive point of sale and inventory management system for retail stores.', imageUrl: '/images/mart-project.jpg', technologies: ['Python', 'GUI Development', 'Database Design', 'Inventory Management'], githubUrl: 'https://github.com/KOSALSENSOK096/Mart-system', liveDemoUrl: '#' },
];

const sampleExperience: Experience[] = [
  { 
    id: '1', 
    role: 'AI Developer & Project Lead',
    company: 'AI Plus Khmer Chat',
    date: '2023 - Present',
    responsibilities: [
      'Developed and launched an innovative AI-powered Khmer language chatbot',
      'Implemented advanced natural language processing for Khmer language understanding',
      'Built and optimized custom language models for Khmer text processing',
      'Designed modern web interface with React.js and real-time WebSocket chat',
      'Created robust backend API system with Python FastAPI',
      'Integrated OpenAI GPT models with custom Khmer language training',
      'Implemented secure user authentication and data management',
      'Led the complete project lifecycle from conception to deployment',
      'Designed project branding and user interface for optimal user experience'
    ],
    logoUrl: '/images/ai-plus-chat-logo.jpg'
  },
  {
    id: '2',
    role: 'Laravel Developer',
    company: 'THAVY CARE JEWELRY',
    date: '2023 - Present',
    responsibilities: [
      'Developed and maintained e-commerce platform using Laravel framework',
      'Implemented secure payment gateway integration for online transactions',
      'Created RESTful APIs for mobile app integration',
      'Designed and optimized MySQL database schema for jewelry inventory management',
      'Implemented user authentication and authorization systems',
      'Built admin dashboard for inventory, orders, and customer management',
      'Integrated social media APIs for automated content sharing',
      'Implemented real-time notifications for order updates and inventory alerts'
    ],
    logoUrl: '/images/thavy-care-logo.jpg'
  },
  { 
    id: '3', 
    role: 'Full Stack Developer',
    company: 'Saint Paul Institute',
    date: '2021 - Present',
    responsibilities: [
      'Led development of Banking System using FastAPI and MongoDB',
      'Implemented AI/ML systems with Python for data analysis',
      'Developed Car System POS application using Laravel',
      'Built Electricite du Cambodge Management System (Web & Mobile)',
      'Created Mart Management System with Python GUI and Database',
      'Developed School Website using React.js and modern frontend technologies',
      'Built cross-platform mobile app using Flutter and React Native',
      'Designed and implemented user interfaces and graphics for multiple projects'
    ],
    logoUrl: '/images/saint-paul-logo.jpg'
  },
  {
    id: '4',
    role: 'Self-Learning Developer',
    company: 'Uddom Pang Learning',
    date: '2023-10-01 - 2023-12-30',
    responsibilities: [
      'Mastered full-stack web development fundamentals:',
      'Advanced JavaScript programming and modern ES6+ features',
      'HTML5 and semantic markup best practices',
      'CSS3, responsive design, and modern layouts',
      'MySQL database design and optimization',
      'PHP backend development and best practices',
      'Laravel framework for enterprise applications',
      'Completed practical projects for each technology'
    ],
    logoUrl: '/images/uddom-pang-logo.jpg'
  }
];

const sampleEducation: Education[] = [
  { id: '1', institution: 'Saint Paul Institute', degree: 'BACHELOR OF IT', skills: ['Software Engineering', 'Data Structures & Algorithms', 'Web Development', 'Operating Systems'], graduationDate: '2021-2025', logoUrl: '/images/saint-paul-logo.jpg' },
  { id: '2', institution: 'Chom Roeun Vechea', degree: 'HIGHT SCHOOL', skills: ['Mathematics', 'Physics', 'Chemistry', 'Biology'], graduationDate: '2018-2021', logoUrl: '/images/chom-roeun-logo.jpg' },
  { id: '3', institution: 'Hun Sen Yeay Yol', degree: 'SECONDARY SCHOOL', skills: ['Mathematics', 'Science', 'Language Arts', 'Social Studies'], graduationDate: '2015-2018', logoUrl: '/images/hun-sen-logo.jpg' },
  { id: '4', institution: 'Po Rieng Cheung', degree: 'PRIMARY SCHOOL', skills: ['Basic Mathematics', 'Basic Science', 'Reading', 'Writing'], graduationDate: '2009-2015', logoUrl: '/images/po-rieng-logo.jpg' },
];

const sampleCertificates: Certificate[] = [
  { 
    id: '1', 
    name: 'Outstanding Student Achievement - 2nd Place', 
    issuer: 'Saint Paul Institute', 
    date: '2023-2024', 
    credentialUrl: '#', 
    imageUrl: '/images/spi-cert-logo.jpg',
    skills: [
      'Bachelor of Information Technology - Year 3',
      'Batch 13 Outstanding Academic Performance',
      'Demonstrated excellence in IT coursework',
      'Recognition for academic achievement',
      'Leadership in student projects',
      'Strong technical and analytical skills',
      'Consistent high academic performance',
      'Active participation in academic activities',
      'Contribution to university community'
    ]
  },
  { 
    id: '2', 
    name: 'JavaScript Algorithms and Data Structures', 
    issuer: 'freeCodeCamp', 
    date: 'Feb 12, 2023', 
    credentialUrl: 'https://freecodecamp.org/certification/sensok/javascript-algorithms-and-data-structures',
    imageUrl: '/images/freecodecamp-logo.jpg',
    skills: [
      'Advanced JavaScript programming concepts',
      'Data structures implementation and manipulation',
      'Algorithm design and problem-solving',
      'Functional programming principles',
      'Object-oriented programming in JavaScript',
      'Regular expressions and pattern matching',
      'ES6+ features and modern JavaScript',
      '300 hours of coursework completion',
      'Practical coding challenges and projects'
    ]
  },
  { 
    id: '3', 
    name: 'Certified Kubernetes Administrator (CKA)', 
    issuer: 'Cloud Native Computing Foundation', 
    date: '2023', 
    credentialUrl: '#', 
    imageUrl: '/images/kubernetes-cert-logo.jpg' 
  },
];

const sampleSkills: Skill[] = [
    { name: 'Java (Spring Boot)', level: 'Expert' },
    { name: 'Python (Flask/Django)', level: 'Advanced' },
    { name: 'Node.js (Express/NestJS)', level: 'Advanced' },
    { name: 'Go', level: 'Intermediate' },
    { name: 'React/Next.js', level: 'Advanced' },
    { name: 'Angular', level: 'Intermediate' },
    { name: 'Microservices Architecture', level: 'Expert' },
    { name: 'Docker & Kubernetes', level: 'Advanced' },
    { name: 'SQL (PostgreSQL, MySQL)', level: 'Expert' },
    { name: 'NoSQL (MongoDB, Redis)', level: 'Advanced' },
    { name: 'CI/CD (Jenkins, GitLab CI)', level: 'Advanced' },
    { name: 'API Design (REST, GraphQL)', level: 'Expert' },
    { name: 'System Design', level: 'Advanced' },
    { name: 'UI/UX Principles', level: 'Intermediate' },
];

const sampleTechStack: TechStackItem[] = [
    { name: 'Python', icon: <PlaceholderIcon />, category: 'Backend' },
    { name: 'HTML,CSS Bootstrap', icon: <PlaceholderIcon />, category: 'Frontend' },
    { name: 'Java Script, jQuery', icon: <PlaceholderIcon />, category: 'Frontend' },
    { name: 'C Programming, C++', icon: <PlaceholderIcon />, category: 'Backend' },
    { name: 'Basic Python OOP', icon: <PlaceholderIcon />, category: 'Backend' },
    { name: 'Flutter(android,ios)', icon: <PlaceholderIcon />, category: 'Frontend' },
    { name: 'React Native', icon: <PlaceholderIcon />, category: 'Frontend' },
    { name: 'PHP Laravel', icon: <PlaceholderIcon />, category: 'Backend' },
    { name: 'Cisco', icon: <PlaceholderIcon />, category: 'DevOps' },
    { name: 'AWS', icon: <PlaceholderIcon />, category: 'DevOps' },
    { name: 'Team Work', icon: <PlaceholderIcon />, category: 'Other' }
];

const sampleBlogPosts: BlogPostMapping[] = [
  { id: 'blog1', title: 'Scaling Microservices: Challenges and Solutions', summary: 'An in-depth look at common challenges in scaling microservice architectures and practical strategies to overcome them, including load balancing, data consistency, and service discovery.', imageUrl: 'https://picsum.photos/seed/blogMicroservices/600/400', publishDate: 'Nov 15, 2023', readMoreUrl: '#', tags: ['Backend', 'Microservices', 'Scalability', 'Architecture'], author: 'KOSAL SENSOK' },
  { id: 'blog2', title: 'The Evolution of Frontend Development: SSR vs CSR vs SSG', summary: 'Exploring the differences, pros, and cons of Server-Side Rendering, Client-Side Rendering, and Static Site Generation in modern web development.', imageUrl: 'https://picsum.photos/seed/blogFrontendArch/600/400', publishDate: 'Sep 02, 2023', readMoreUrl: '#', tags: ['Frontend', 'WebDev', 'React', 'Performance'], author: 'KOSAL SENSOK' },
  { id: 'blog3', title: 'Effective Data Modeling for NoSQL Databases', summary: 'Best practices and patterns for designing data models in NoSQL databases like MongoDB, focusing on performance and scalability considerations.', imageUrl: 'https://picsum.photos/seed/blogNoSQL/600/400', publishDate: 'Jul 21, 2023', readMoreUrl: '#', tags: ['Database', 'NoSQL', 'MongoDB', 'Data Modeling'], author: 'KOSAL SENSOK' },
];

const sampleTestimonials: Testimonial[] = [
    { 
      id: 'test1', 
      quote: "KOSAL SENSOK has demonstrated exceptional skills in both frontend and backend development during his time at Saint Paul Institute. His dedication to learning and ability to tackle complex technical challenges is remarkable.", 
      name: 'Bee Bean', 
      title: 'Instructor', 
      company: 'Saint Paul Institute', 
      avatarUrl: 'https://picsum.photos/seed/avatarBee/100/100' 
    },
    { 
      id: 'test2', 
      quote: "As a Laravel Developer at THAVY CARE JEWELRY, KOSAL has shown great proficiency in developing our e-commerce platform. His attention to detail and problem-solving abilities have significantly improved our online presence.", 
      name: 'Thavy Care', 
      title: 'CEO', 
      company: 'THAVY CARE JEWELRY', 
      avatarUrl: 'https://picsum.photos/seed/avatarThavy/100/100' 
    },
    { 
      id: 'test3', 
      quote: "KOSAL's innovative work on the AI Plus Khmer Chat project showcases his ability to combine technical expertise with practical solutions. His contribution to making AI accessible in the Khmer language is commendable.", 
      name: 'Tech Community', 
      title: 'Project Review', 
      company: 'AI Plus Khmer Chat', 
      avatarUrl: 'https://picsum.photos/seed/avatarAI/100/100' 
    }
];

const sampleRecordings: Recording[] = [
  {
    id: '1',
    title: 'Building a Modern React Application',
    description: 'A comprehensive guide to building scalable React applications with modern best practices, including hooks, context, and performance optimization.',
    thumbnailUrl: 'https://picsum.photos/seed/react/600/400',
    videoUrl: '#',
    date: 'Jan 15, 2024',
    duration: '45:20',
    tags: ['React', 'Frontend', 'Web Development']
  },
  {
    id: '2',
    title: 'Laravel API Development',
    description: 'Deep dive into building robust RESTful APIs with Laravel, covering authentication, validation, and best practices for API design.',
    thumbnailUrl: 'https://picsum.photos/seed/laravel/600/400',
    videoUrl: '#',
    date: 'Dec 28, 2023',
    duration: '38:15',
    tags: ['Laravel', 'PHP', 'Backend', 'API']
  },
  {
    id: '3',
    title: 'AI Integration in Web Apps',
    description: 'Learn how to integrate AI capabilities into your web applications using Python and modern AI frameworks.',
    thumbnailUrl: 'https://picsum.photos/seed/ai/600/400',
    videoUrl: '#',
    date: 'Dec 10, 2023',
    duration: '52:45',
    tags: ['AI', 'Python', 'Machine Learning']
  }
];

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const themeContextValue = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <div className={`app ${theme} font-sans transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        <Navbar />
        <main>
          <HeroSection 
            name={personalInfo.name} 
            tagline={personalInfo.tagline} 
            cvUrl={personalInfo.cvUrl}
            profileImage="/images/kosalsensok.jpg"
          />
          <AboutSection 
            bio={personalInfo.bio} 
            skills={sampleSkills} 
            country={personalInfo.country}
            languages={personalInfo.languages}
          />
          <ProjectsSection projects={sampleProjects} />
          <ExperienceSection experiences={sampleExperience} />
          <EducationSection educationHistory={sampleEducation} />
          <CertificatesSection certificates={sampleCertificates} />
          <TechStackSection techStack={sampleTechStack} />
          <BlogSection posts={sampleBlogPosts} />
          <TestimonialsSection testimonials={sampleTestimonials} />
          <RecordingsSection recordings={sampleRecordings} />
          <ContactSection 
            email={personalInfo.email}
            linkedin={personalInfo.linkedin}
            github={personalInfo.github}
          />
        </main>
        <Footer name={personalInfo.name} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
