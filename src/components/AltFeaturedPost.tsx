
import React from 'react';
import { Link } from 'react-router-dom';

interface AltFeaturedPostProps {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  delay?: number;
  index: number;
}

const AltFeaturedPost: React.FC<AltFeaturedPostProps> = ({ 
  title, 
  excerpt,
  image,
  category,
  delay = 0,
  index
}) => {
  return (
    <Link 
      to="/article" 
      className="group relative overflow-hidden border border-white/10 animate-fade-in bg-black"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-30 mix-blend-overlay z-10">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover grayscale"
        />
      </div>
      
      <div className="relative z-20 p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="inline-block font-mono text-xs text-white/70">
              {category}
            </span>
          </div>
          <span className="font-mono text-xs text-white/50 tracking-widest">{`0${index}`}</span>
        </div>
        
        <div className="flex-grow"></div>
        
        <h3 className="font-serif text-xl text-white mb-2 group-hover:text-gray-300 transition-colors">
          {title}
        </h3>
        
        <p className="font-mono text-xs text-white/60 mb-4 line-clamp-2">
          {excerpt}
        </p>
        
        <div className="w-full h-px bg-white/10 mb-4"></div>
        
        <div className="flex justify-between items-center">
          <span className="font-mono text-[10px] text-white/40">SPECIMEN</span>
          <span className="font-mono text-[10px] text-white/40">VIEW ANALYSIS →</span>
        </div>
      </div>
    </Link>
  );
};

export default AltFeaturedPost;
