
import React from 'react';
import AnatomicalVisual from '../AnatomicalVisual';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 opacity-100">
        <AnatomicalVisual className="w-full h-full" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <div className="font-mono text-xs text-white/50 uppercase tracking-widest mb-4">TRANSMISSION</div>
          
          <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">
            Subscribe to Neural Updates
          </h2>
          
          <p className="font-mono text-sm text-white/60 mb-8">
            Receive transmission alerts when new specimens are added to the archives.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
            <input 
              type="email" 
              placeholder="YOUR.MIND@DOMAIN.COM" 
              className="bg-black border border-white/20 px-6 py-3 flex-grow font-mono text-xs tracking-wider focus:outline-none focus:border-white"
            />
            <button className="bg-white text-black px-8 py-3 font-mono text-xs tracking-wider md:ml-0">
              SUBSCRIBE
            </button>
          </div>
          
          <div className="mt-6 font-mono text-[10px] text-white/40">
            ENCRYPTED TRANSMISSION · NO MENTAL SURVEILLANCE
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
