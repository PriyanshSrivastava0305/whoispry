
import React from 'react';
import AnatomicalVisual from './AnatomicalVisual';

const AltHero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background visuals */}
      <div className="absolute inset-0 z-0">
        <AnatomicalVisual className="w-full h-full opacity-30" />
      </div>
      
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-transparent to-black z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-xs font-mono text-gray-500 tracking-widest mb-1">SPECIMEN 217.364</div>
            <div className="w-12 h-px bg-white/20 mb-1"></div>
            <div className="text-xs font-mono text-gray-500 tracking-widest">MENTAL ARCHITECTURE</div>
          </div>
          
          <h1 className="font-serif text-5xl md:text-8xl text-center font-bold mb-8 leading-none tracking-tighter">
            <span className="block text-white animate-fade-in" style={{ animationDelay: '0.6s' }}>WHERE</span>
            <span className="block text-white animate-fade-in" style={{ animationDelay: '0.9s' }}>IS MY</span>
            <span className="block text-white animate-fade-in" style={{ animationDelay: '1.2s' }}>MIND</span>
          </h1>
          
          <div className="w-full max-w-lg mx-auto overflow-hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10 animate-fade-in" style={{ animationDelay: '1.5s' }}></div>
          
          <p className="font-mono text-gray-400 text-sm md:text-base text-center mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '1.8s' }}>
            Exploring the architecture of consciousness through anatomical reference and philosophical inquiry. The physical structure of thought and the ephemeral nature of awareness.
          </p>
          
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '2.1s' }}>
            <div className="inline-flex items-center font-mono text-xs tracking-wider text-white/70 border border-white/20 px-4 py-2">
              <span>ENTER THE ARCHITECTURE</span>
              <svg className="w-4 h-4 ml-2 animate-pulse-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Anatomical reference numbers */}
      <div className="absolute bottom-6 left-0 w-full flex justify-between px-6 z-20 opacity-40">
        <div className="flex items-center">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="text-xs font-mono text-white ml-2">07.24.2025</div>
        </div>
        <div className="text-xs font-mono text-white">FIG.214</div>
      </div>
    </div>
  );
};

export default AltHero;
