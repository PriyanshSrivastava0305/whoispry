
import React from 'react';
import TechLines from './TechLines';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black z-0">
        <TechLines className="w-full h-full" />
      </div>
      
      {/* Colored gradient */}
      <div className="absolute top-0 right-0 w-1/4 h-screen bg-gradient-to-b from-neon-purple/20 via-neon-blue/10 to-transparent z-0 blur-3xl"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-playfair font-bold mb-4">
            <span className="text-outline inline-block animate-fade-in" style={{ animationDelay: '0.3s' }}>THE</span>
            <br />
            <span className="text-gradient inline-block animate-fade-in" style={{ animationDelay: '0.6s' }}>FUTURE</span>
            <br />
            <span className="text-white inline-block animate-fade-in" style={{ animationDelay: '0.9s' }}>
              IS <span className="text-neon-purple">NOW</span>
            </span>
          </h1>
          
          <div className="w-20 h-px bg-gradient-to-r from-neon-blue to-neon-purple mx-auto my-8"></div>
          
          <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            Exploring the intersection of humanity and technology through immersive stories and visual experiences.
          </p>
          
          <div className="animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <button className="group relative inline-flex items-center justify-center px-8 py-3 border border-white/20 hover:border-neon-purple rounded-full overflow-hidden transition-colors duration-300">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></span>
              <span className="absolute inset-0 w-full h-full bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
              <span className="relative font-medium text-white group-hover:text-neon-purple">EXPLORE ARTICLES</span>
            </button>
          </div>
          
          {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1.8s' }}>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce"></div>
            </div>
            <p className="text-white/50 text-xs mt-2 uppercase tracking-widest">Scroll</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
