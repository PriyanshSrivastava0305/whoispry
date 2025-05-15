
import React from 'react';
import { Link } from 'react-router-dom';

interface AltGridPostProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  delay?: number;
  index: number;
}

const AltGridPost: React.FC<AltGridPostProps> = ({
  title,
  excerpt,
  category,
  image,
  delay = 0,
  index
}) => {
  return (
    <Link 
      to="/article" 
      className="group flex flex-col animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative aspect-[16/9] overflow-hidden mb-3 border border-white/10">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
        
        <div className="absolute bottom-3 left-3 font-mono text-xs text-white/80">
          {`SPECIMEN ${index.toString().padStart(2, '0')}`}
        </div>
        
        <div className="absolute top-3 right-3">
          <span className="inline-block px-2 py-1 text-[10px] font-mono tracking-wider text-white/80 border border-white/20">
            {category}
          </span>
        </div>
      </div>
      
      <h3 className="font-serif text-lg mb-1 text-white group-hover:text-gray-300 transition-colors">
        {title}
      </h3>
      
      <p className="font-mono text-xs text-white/60 line-clamp-2">
        {excerpt}
      </p>
      
      <div className="mt-3 font-mono text-[10px] text-white/40 flex justify-between">
        <span>03.17.25</span>
        <span>→ VIEW CASE</span>
      </div>
    </Link>
  );
};

export default AltGridPost;
