
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-4 text-glow">
              WHØ<span className="text-neon-purple">.</span>IS<span className="text-neon-purple">.</span>PЯY
            </h2>
            <p className="text-white/70 text-sm mb-6">
              Exploring the borders between humanity and technology through thought-provoking articles and visual experiences.
            </p>
            {/* <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
                <Link 
                  key={social} 
                  to="#" 
                  className="w-8 h-8 rounded-full flex items-center justify-center border border-white/20 hover:border-neon-purple transition-colors"
                >
                  <span className="text-white/70 text-xs hover:text-neon-purple">{social[0]}</span>
                </Link>
              ))}
            </div> */}
          </div>
          
          {/* <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Technology', 'Cybernetics', 'Digital Art', 'Futurism', 'Philosophy'].map(category => (
                <li key={category}>
                  <Link to="#" className="text-white/70 text-sm hover:text-neon-blue transition-colors">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Subscribe</h3>
            <p className="text-white/70 text-sm mb-4">
              Join our newsletter to receive the latest updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/20 rounded-l-md px-4 py-2 text-sm flex-grow focus:outline-none focus:border-neon-purple"
              />
              <button className="bg-neon-purple hover:bg-neon-purple/80 text-white rounded-r-md px-4 py-2 text-sm transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-white/50 text-sm flex flex-col md:flex-row justify-between">
          <p>© 2025 WhoIsPry. All rights reserved.</p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">Privacy Policy</Link>
            <Link to="#" className="hover:text-white">Terms of Service</Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
