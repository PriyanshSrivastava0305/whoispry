
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedPost from '../components/FeaturedPost';
import GridPost from '../components/GridPost';
import Footer from '../components/Footer';

const FEATURED_POSTS = [
  {
    id: 1,
    title: "THE FALL OF ICARUS",
    excerpt: "Don't fly too close to the sun. It will destroy you.",
    image: "lovable-uploads/967e4a2c-75ab-4dc5-8f39-8900fd5f96b0.png",
    category: "MYTHOLOGY"
  },
  {
    id: 2,
    title: "Neural Networks & Human Consciousness",
    excerpt: "Exploring the thin line between artificial intelligence and human awareness.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "TECH"
  },
  {
    id: 3,
    title: "Digital Architecture Revolution",
    excerpt: "How virtual spaces are redefining our perception of structure and form.",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
    category: "DESIGN"
  }
];

const GRID_POSTS = [
  {
    id: 1,
    title: "The Quantum Computing Race",
    excerpt: "Major powers compete to achieve quantum supremacy, potentially reshaping global tech dominance.",
    category: "TECHNOLOGY",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: 2,
    title: "Biomechanical Art Movement",
    excerpt: "Artists explore the fusion of organic forms and mechanical elements in a growing creative trend.",
    category: "ART",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  },
  {
    id: 3,
    title: "The Ethics of Brain Interfaces",
    excerpt: "As direct neural links become possible, what are the moral implications of mind-machine connections?",
    category: "PHILOSOPHY",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 4,
    title: "Virtual Reality Therapy",
    excerpt: "How immersive worlds are helping treat PTSD, phobias and other psychological conditions.",
    category: "HEALTH",
    image: "https://images.unsplash.com/photo-1527576539890-dfa815648363"
  },
  {
    id: 5,
    title: "Digital Minimalism",
    excerpt: "The counterculture movement against information overload in the connected age.",
    category: "LIFESTYLE",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: 6,
    title: "Cyberpunk 2025: Predictions vs Reality",
    excerpt: "How sci-fi visions from past decades compare to our current technological landscape.",
    category: "CULTURE",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
  }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Featured Posts Section */}
      <section id="latest" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold">
             Latest Articles 
            </h2>
            
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-10 h-px bg-white/50"></div>
              <span className="text-white/70 text-sm">Curated content</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_POSTS.map((post, index) => (
              <FeaturedPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                category={post.category}
                delay={0.2 * index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-black/80">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-60 h-60 rounded-full bg-neon-purple/20 blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl -bottom-40 -right-20 animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-white/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 3.356-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 3.356-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <blockquote className="font-playfair text-2xl md:text-4xl font-medium tracking-tight mb-6 text-gradient">
              The future is already here – it's just not evenly distributed.
            </blockquote>
            
            <cite className="text-white/70 not-italic">— William Gibson</cite>
          </div>
        </div>
      </section>
      
      {/* Latest Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold">
              More Articles
            </h2>
            
            <a href="#" className="hidden md:flex items-center group">
              <span className="text-white/70 text-sm group-hover:text-neon-purple transition-colors">View all</span>
              <svg className="w-4 h-4 ml-2 text-white/70 group-hover:text-neon-purple transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {GRID_POSTS.map((post, index) => (
              <GridPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                image={post.image}
                delay={0.1 * index}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-16">
            <button className="relative inline-flex items-center justify-center px-8 py-3 border border-white/20 hover:border-neon-purple hover:text-neon-purple rounded-full transition-colors duration-300">
              <span className="relative font-medium">LOAD MORE ARTICLES</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-neon-blue/5 to-transparent z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-semibold mb-4">
              Stay Updated
            </h2>
            
            <p className="text-white/70 mb-8">
              Subscribe to our newsletter to receive the latest updates on technology, art, and future-focused content.
            </p>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/20 rounded-l-md px-6 py-3 flex-grow focus:outline-none focus:border-neon-purple"
              />
              <button className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-3 rounded-md md:rounded-l-none md:rounded-r-md font-medium transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
