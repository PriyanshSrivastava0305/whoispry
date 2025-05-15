
import React from 'react';
import { Link } from 'react-router-dom';

interface GridPostProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  delay?: number;
  link: string;
}

const GridPost: React.FC<GridPostProps> = ({
  title,
  excerpt,
  category,
  image,
  delay = 0,
  link
}) => {
  return (
    <Link 
      to={link} 
      className="group flex flex-col overflow-hidden animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-md mb-3">
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 z-20">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-black/50 backdrop-blur-sm text-white rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <h3 className="font-playfair font-semibold text-lg mb-1 transition-colors group-hover:text-neon-purple">
        {title}
      </h3>
      
      <p className="text-white/70 text-sm line-clamp-2">
        {excerpt}
      </p>
      
      <div className="mt-3 text-xs text-white/50">
        <span>3 min read</span>
        <span className="mx-2">•</span>
        <span>Apr 5, 2025</span>
      </div>
    </Link>
  );
};

export default GridPost;
