
import React from 'react';
import Section from './Section';
import BlogCard from './BlogCard';
import { BlogPostMapping } from '../types';

interface BlogSectionProps {
  posts: BlogPostMapping[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <Section id="blog" title="From My Blog" className="bg-gray-100 dark:bg-gray-900">
      {posts && posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">No blog posts to display yet. Check back soon!</p>
      )}
    </Section>
  );
};

export default BlogSection;
