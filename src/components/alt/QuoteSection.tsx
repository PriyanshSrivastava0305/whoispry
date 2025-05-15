
import React from 'react';

const QuoteSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="font-mono text-xs text-white/50 uppercase tracking-widest mb-2">THEORY 07.4</div>
            <div className="w-10 h-px bg-white/20 mx-auto"></div>
          </div>
          
          <blockquote className="font-serif text-2xl md:text-3xl mb-6 text-center leading-relaxed">
            "Consciousness is what makes the mind-body problem really intractable. Without consciousness the mind-body problem would be much less interesting. With consciousness it seems hopeless."
          </blockquote>
          
          <div className="flex flex-col items-center">
            <cite className="text-white/60 not-italic text-sm">— Thomas Nagel</cite>
            <div className="w-10 h-px bg-white/20 my-3"></div>
            <span className="font-mono text-[10px] tracking-wider text-white/40">PHILOSOPHY OF MIND</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
