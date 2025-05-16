
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-playfair font-bold tracking-wider text-glow">
            {/* WHØ<span className="text-neon-purple">.</span>ÆURA */}
            WHØ<span className="text-neon-purple">.</span>IS<span className="text-neon-purple">.</span>PЯY

          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Articles', path: '/#articles' },
            { name: 'Highlights', path: '/#latest' },
            { name: 'Whoami', path: '/about' },
            { name: 'cerebrum.sys', path: '/alt' }
          ].map((item, index) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-sm font-medium tracking-widest opacity-90 hover:text-neon-purple hover:opacity-100 transition-all
                ${location.pathname === item.path ? 'text-neon-purple' : 'text-white'}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button className="text-white p-2">☰</button>
        </div>
      </div>
      
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </header>
  );
};

export default Header;
