
import React from 'react';
import AltGridPost from '../AltGridPost';
import { ALT_GRID_POSTS } from '../../data/gridPosts';

const GridSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <span className="font-mono text-xs text-white/50 tracking-wider">002/</span>
            <h2 className="font-serif text-2xl md:text-3xl font-medium ml-3">
              Research Cases
            </h2>
          </div>
          
          <a href="#" className="hidden md:flex items-center group">
            <span className="font-mono text-xs text-white/50 tracking-wider group-hover:text-white transition-colors">VIEW ALL SPECIMENS</span>
            <svg className="w-4 h-4 ml-2 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {ALT_GRID_POSTS.map((post, index) => (
            <AltGridPost
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              category={post.category}
              image={post.image}
              delay={0.1 * index}
              index={index + 1}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <button className="relative inline-flex items-center justify-center px-8 py-3 border border-white/20 font-mono text-xs tracking-wider">
            <span className="relative">LOAD MORE SPECIMENS</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GridSection;
