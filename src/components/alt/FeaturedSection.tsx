
import React from 'react';
import AltFeaturedPost from '../AltFeaturedPost';
import { ALT_FEATURED_POSTS } from '../../data/featuredPosts';

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <div className="w-10 h-px bg-white/50 mr-4"></div>
            <h2 className="font-serif text-2xl md:text-3xl font-medium uppercase tracking-tight">
              Featured Analysis
            </h2>
          </div>
          
          <div className="hidden md:flex items-center font-mono text-xs text-white/50 tracking-wider">
            <span>01</span>
            <div className="w-10 h-px bg-white/30 mx-2"></div>
            <span>03</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALT_FEATURED_POSTS.map((post, index) => (
            <AltFeaturedPost
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              image={post.image}
              category={post.category}
              delay={0.2 * index}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
