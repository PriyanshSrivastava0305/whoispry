
import React from 'react';
import { Link } from 'react-router-dom';

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  delay?: number;
  link: string;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ 
  title, 
  excerpt,
  image,
  category,
  delay = 0,
  link
}) => {
  return (
    <Link 
      to={link} 
      className="group relative overflow-hidden rounded-md animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div>
      
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-neon-purple/20 backdrop-blur-sm text-neon-purple rounded-full">
            {category}
          </span>
        </div>
        
        <h3 className="font-playfair font-semibold text-xl md:text-2xl mb-2 text-white group-hover:text-glow transition-all">
          {title}
        </h3>
        
        <p className="text-white/70 text-sm line-clamp-2">
          {excerpt}
        </p>
        
        <div className="mt-4 overflow-hidden h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-neon-blue via-neon-purple to-transparent transition-all duration-700"></div>
      </div>
    </Link>
  );
};

export default FeaturedPost;
