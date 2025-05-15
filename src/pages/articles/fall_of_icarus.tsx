
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GridPost from '../../components/GridPost';

const RELATED_POSTS = [
  {
    id: 1,
    title: "The Quantum Computing Race",
    excerpt: "Major powers compete to achieve quantum supremacy, potentially reshaping global tech dominance.",
    category: "TECHNOLOGY",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    link:""
  },
  {
    id: 2,
    title: "Biomechanical Art Movement",
    excerpt: "Artists explore the fusion of organic forms and mechanical elements in a growing creative trend.",
    category: "ART",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
    link:""
  },
  {
    id: 3,
    title: "The Ethics of Brain Interfaces",
    excerpt: "As direct neural links become possible, what are the moral implications of mind-machine connections?",
    category: "PHILOSOPHY",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    link:""
  }
];

const fall_of_icarus: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero */}
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="lovable-uploads/967e4a2c-75ab-4dc5-8f39-8900fd5f96b0.png"
            alt="Article hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider bg-neon-purple/20 text-neon-purple rounded-full animate-fade-in">
                MYTHOLOGY
              </span>
            </div>
            
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              THE FALL OF ICARUS
            </h1>
            
            <div className="flex items-center text-sm text-white/70 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-white/20 mr-3"></div>
                <span>Alex Morgan</span>
              </div>
              <span className="mx-3">•</span>
              <span>Apr 9, 2025</span>
              <span className="mx-3">•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert">
            <p className="text-xl leading-relaxed mb-8">
              Don't fly too close to the sun. It will destroy you. The ancient myth of Icarus serves as a timeless warning about the dangers of hubris and the consequences of ignoring limitations.
            </p>
            
            <p className="mb-6">
              In Greek mythology, Icarus and his father Daedalus were imprisoned by King Minos in a labyrinth of their own design. To escape, Daedalus created wings made of feathers, wax, and twine. Before their flight, Daedalus warned his son not to fly too high, as the sun would melt the wax, nor too low, as the sea spray would dampen the feathers.
            </p>
            
            <h2 className="font-playfair text-2xl font-bold mt-12 mb-4">Modern Interpretations</h2>
            
            <p className="mb-6">
              The story of Icarus remains relevant today as a metaphor for technological ambition without foresight. As we develop increasingly powerful technologies like artificial intelligence, genetic engineering, and climate interventions, the myth reminds us to consider the potential consequences of our innovations.
            </p>
            
            <blockquote className="border-l-4 border-neon-purple pl-6 my-8 italic">
              "The universe is full of magical things, patiently waiting for our wits to grow sharper."
              <cite className="block text-sm not-italic text-white/70 mt-2">— Eden Phillpotts</cite>
            </blockquote>
            
            <p className="mb-6">
              Contemporary artists continue to draw inspiration from Icarus. His fall represents not just failure, but the paradoxical beauty found in ambition's collapse. The image of a figure tumbling from the heavens has become an enduring symbol in visual arts, literature, and philosophical discussions about human limits.
            </p>
            
            <h2 className="font-playfair text-2xl font-bold mt-12 mb-4">Technological Hubris</h2>
            
            <p className="mb-6">
              As humanity develops increasingly powerful technologies, the myth of Icarus serves as a profound warning. Our technological wings allow us to soar to unprecedented heights, but without wisdom and foresight, we risk a devastating fall. From climate change to artificial intelligence risks, many modern challenges reflect our Icarian tendencies.
            </p>
            
            <p className="mb-6">
              Yet the myth doesn't suggest we shouldn't fly at all—rather, it advises temperance and awareness of boundaries. Progress requires risk, but calculated risk informed by wisdom rather than unchecked ambition. Perhaps the most valuable lesson from Icarus isn't about the dangers of ambition but about the importance of balanced judgment.
            </p>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12">
            {['Mythology', 'Ancient Greece', 'Philosophy', 'Symbolism'].map(tag => (
              <span key={tag} className="px-3 py-1 text-sm bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                #{tag}
              </span>
            ))}
          </div>
          
          {/* Author */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full bg-white/20 mr-6"></div>
              <div>
                <h3 className="font-medium text-xl mb-1">Alex Morgan</h3>
                <p className="text-white/70 text-sm">
                  Writer exploring the intersections of mythology, technology, and human nature. Previously published in Tech Horizons and Future Philosophy Journal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Articles */}
      {/* <div className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl font-semibold mb-12">
            Related Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {RELATED_POSTS.map((post, index) => (
              <GridPost
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                image={post.image}
                delay={0.1 * index}
                link={post.link}
              />
            ))}
          </div>
        </div>
      </div> */}
      
      <Footer />
    </div>
  );
};

export default fall_of_icarus;
