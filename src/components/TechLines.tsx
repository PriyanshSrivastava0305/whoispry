
import React, { useRef, useEffect } from 'react';

interface TechLinesProps {
  className?: string;
}

const TechLines: React.FC<TechLinesProps> = ({ className = '' }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, 
      { threshold: 0.1 }
    );
    
    if (svgRef.current) {
      observer.observe(svgRef.current);
    }
    
    return () => {
      if (svgRef.current) observer.unobserve(svgRef.current);
    };
  }, []);

  return (
    <svg 
      ref={svgRef}
      className={`absolute pointer-events-none z-0 opacity-25 ${className}`}
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid Lines */}
      <line x1="0" y1="200" x2="800" y2="200" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5,5" className="animate-draw-line" style={{ animationDelay: '0s' }} />
      <line x1="0" y1="400" x2="800" y2="400" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5,5" className="animate-draw-line" style={{ animationDelay: '0.2s' }} />
      <line x1="0" y1="600" x2="800" y2="600" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5,5" className="animate-draw-line" style={{ animationDelay: '0.4s' }} />
      
      <line x1="200" y1="0" x2="200" y2="800" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5,5" className="animate-draw-line" style={{ animationDelay: '0.6s' }} />
      <line x1="400" y1="0" x2="400" y2="800" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5,5" className="animate-draw-line" style={{ animationDelay: '0.8s' }} />
      <line x1="600" y1="0" x2="600" y2="800" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5,5" className="animate-draw-line" style={{ animationDelay: '1s' }} />
      
      {/* Circles */}
      <circle cx="400" cy="400" r="150" stroke="#8B5CF6" fill="none" strokeWidth="0.5" className="animate-draw-line" style={{ animationDelay: '1.2s' }} />
      <circle cx="400" cy="400" r="250" stroke="#8B5CF6" fill="none" strokeWidth="0.5" className="animate-draw-line" style={{ animationDelay: '1.4s' }} />
      <circle cx="400" cy="400" r="350" stroke="#8B5CF6" fill="none" strokeWidth="0.5" className="animate-draw-line" style={{ animationDelay: '1.6s' }} />
      
      {/* Decorative dots */}
      <circle cx="200" cy="200" r="4" fill="#EAB308" className="animate-pulse-slow" />
      <circle cx="600" cy="300" r="4" fill="#10B981" className="animate-pulse-slow" />
      <circle cx="300" cy="600" r="4" fill="#8B5CF6" className="animate-pulse-slow" />
      <circle cx="700" cy="500" r="4" fill="#0EA5E9" className="animate-pulse-slow" />
      
      {/* Diagonal lines */}
      <line x1="200" y1="200" x2="600" y2="600" stroke="#8B5CF6" strokeWidth="1" className="animate-draw-line" style={{ animationDelay: '1.8s' }} />
      <line x1="600" y1="200" x2="200" y2="600" stroke="#0EA5E9" strokeWidth="1" className="animate-draw-line" style={{ animationDelay: '2s' }} />
    </svg>
  );
};

export default TechLines;
