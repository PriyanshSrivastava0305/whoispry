import React from 'react';
// import AltHeader from '../components/AltHeader';
import AboutHeader from '../components/AboutHeader';
import Footer from '../components/Footer';
// import AnatomicalVisual from '/AnatomicalVisual.tsx';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
    <AboutHeader />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-16 text-center">
            <div className="flex flex-col items-center mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-xs font-mono text-gray-500 tracking-widest mb-1">SPECIMEN 382.147</div>
              <div className="w-12 h-px bg-white/20 mb-1"></div>
              <div className="text-xs font-mono text-gray-500 tracking-widest">SUBJECT PROFILE</div>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-8 tracking-tighter animate-fade-in" style={{ animationDelay: '0.6s' }}>
              ABOUT THE SUBJECT
            </h1>
            
            <div className="w-full max-w-lg mx-auto overflow-hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-10 animate-fade-in" style={{ animationDelay: '0.9s' }}></div>
          </div>
          
          {/* Profile Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
            <div className="md:col-span-1 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="border border-white/10 p-6 h-full">
                <div className="text-xs text-white/50 mb-4 uppercase tracking-widest">IDENTIFICATION</div>
                
               <div className="aspect-square bg-white/5 mb-6 flex items-center justify-center relative overflow-hidden">
                    <img 
                        src="/images/me.jpg" 
                        alt="Profile" 
                        className="object-cover w-full h-full opacity-40"
                        style={{ filter: 'blur(2px)' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0">
                        <span className="text-white/40 text-xs font-mono tracking-widest uppercase">CENSORED</span>
                    </div>
                </div>

                
                <div className="space-y-4">
                  <div>
                    <div className="text-[10px] text-white/30 uppercase">NAME</div>
                    <div className="text-sm">Priyansh Srivastava</div>
                  </div>
                  
                  <div>
                    <div className="text-[10px] text-white/30 uppercase">ROLE</div>
                    <div className="text-sm">Developer / Researcher</div>
                  </div>
                  
                  <div>
                    <div className="text-[10px] text-white/30 uppercase">LOCATION</div>
                    <div className="text-sm">Mars</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <div className="text-xs text-white/50 mb-4 uppercase tracking-widest">SUBJECT ANALYSIS</div>
              
              <h2 className="text-2xl font-serif mb-6">Background & Research Focus</h2>
              
              <div className="prose prose-invert prose-sm max-w-none">
                <p className="text-white/80 mb-6 leading-relaxed">
                  The subject is focused on exploring the edge where human cognition meets artificial intelligence 
                  — studying how digital systems can replicate or extend the way we process thought. 
                  His work involves designing and experimenting with intelligent agents, 
                  aiming to understand how synthetic processes might simulate elements of awareness,
                   decision-making, and memory.
                </p>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  Combining backgrounds in development, AI research, and systems thinking, 
                  he approaches consciousness not just as a biological function, but as an architecture — 
                  one that could, under the right conditions, emerge in machines. Rather than seeking grand
                   philosophical answers, his focus is on building, testing, and questioning what it truly
                    means for a system to “understand.”
                </p>
                
                <div className="my-8 border-l-2 border-white/20 pl-4 py-2">
                  <p className="text-white/60 italic">
                    "The mind exists at the intersection of physical structure and emergent pattern. 
                    Understanding this boundary is the key to comprehending consciousness itself."
                  </p>
                </div>
                
                <p className="text-white/80 leading-relaxed">
                  Current research focuses in space between intelligence and identity — 
                  where digital architectures mirror the neural pathways of the human mind. 
                  His focus lies in crafting autonomous agents, LLMs that don’t just answer — they reason.
                </p>
              </div>
                <div className="text-center my-10">
                    <a
                        href="/alt"
                        className="inline-block px-6 py-2 border border-white/10 text-white/60 text-xs tracking-widest uppercase hover:text-purple-400 hover:border-purple-400 transition-colors duration-200"
                    >
                        ▶ LOOK INSIDE THE SUBJECT'S BRAIN
                    </a>
                </div>
            </div>
          </div>
          
          {/* Publications Section */}
          <div className="mb-20 animate-fade-in" style={{ animationDelay: '1.8s' }}>
  <div className="text-xs text-white/50 mb-4 uppercase tracking-widest">NOTABLE WORK</div>
       
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[
        {
            title: "etna",
            date: "/// INITIALIZATION PENDING",
            excerpt: "A minimal-dependency open source neural network library designed for effortless tabular/text-based classification tasks.",
            url: "https://github.com/PriyanshSrivastava0305/etna"
        },
        {
            title: "Neural Networks & Human Consciousness",
            date: "05.16.2025",
            excerpt: "A myth-meets-machine reflection on AI’s fragile autonomy — exploring whether neural networks can truly awaken, or if they remain bound by scripts we can't yet transcend.",
            url: "/articles/nn_hc"
        },
        {
            title: "NeuroSeek",
            date: "02.17.2025",
            excerpt: "Open source Retrieval-Augmented Generation (RAG) system designed to scrape, index, and retrieve relevant information while leveraging AI-generated responses for seamless knowledge discovery.",
            url: "https://github.com/PriyanshSrivastava0305/NeuroSeek"
        },
        {
            title: "DataMind",
            date: "11.12.2024",
            excerpt: "Open source AI-powered agent that combines real-time data retrieval and document insights to generate context-aware responses and predictive analysis.",
            url: "https://github.com/PriyanshSrivastava0305/DataMind"
        },
    //   {
    //     title: "Neural Mapping Protocols",
    //     date: "06.22.2023",
    //     excerpt: "New methodologies for visualizing thought patterns as architectural structures.",
    //     url: "https://github.com/your-username/publication-3"
    //   },
    //   {
    //     title: "The Anatomy of Awareness",
    //     date: "02.15.2023",
    //     excerpt: "Deconstructing consciousness into its fundamental components and processes.",
    //     url: "https://github.com/your-username/publication-4"
    //   }
    ].map((pub, index) => (
      <a
        key={index}
        href={pub.url}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-white/10 p-6 hover:bg-white/5 hover:border-purple-500/30  transition-colors duration-200 block"
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-serif text-lg">{pub.title}</h3>
          <span className="text-xs text-white/40">{pub.date}</span>
        </div>
        <p className="text-sm text-white/60">{pub.excerpt}</p>
      </a>
    ))}
  </div>
</div>

          
          {/* Contact Section */}
          <div className="animate-fade-in" style={{ animationDelay: '2.1s' }}>
            <div className="text-xs text-white/50 mb-4 uppercase tracking-widest">ESTABLISH CONNECTION</div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  label: "DIGITAL TRANSMISSION",
                  value: "priyansh0305@gmail.com"
                },
                {
                  label: "NETWORK NODES",
                  value: (
                        <a href="https://www.linkedin.com/in/priyansh-srivastava-91a0511bb/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                        linkedin.com
                        </a>
                    )
                },
                {
                  label: "GATEWAY PROTOCOL",
                  value: "MATRIX"
                }
              ].map((contact, index) => (
                <div key={index} className="border border-white/10 p-6">
                  <div className="text-[10px] text-white/30 uppercase mb-2">{contact.label}</div>
                  <div className="text-sm">{contact.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;
