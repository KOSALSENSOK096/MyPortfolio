import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  date: string;
  responsibilities: string[];
  logoUrl?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  skills: string[];
  graduationDate: string;
  logoUrl?: string;
}

export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  imageUrl?: string;
  skills?: string[];
}

export interface Skill {
  name: string;
  icon?: React.ReactNode; 
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface TechStackItem {
  name: string;
  icon?: React.ReactNode; // Can be SVG component or img tag
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps' | 'Design' | 'Other';
}

export interface BlogPostMapping {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
  publishDate: string;
  readMoreUrl: string;
  tags?: string[];
  author?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
  company?: string;
}

export interface Recording {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  date: string;
  duration: string;
  tags: string[];
}
