
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AltHeader: React.FC = () => {
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
        <Link to="/alt" className="flex items-center">
          <span className="font-mono text-2xl font-bold tracking-widest text-white">
            SPECIMEN<span className="text-gray-500">.</span>382.147
          </span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {[
            { name: 'CONSCIOUSNESS', path: '/alt' },
            // { name: 'THEORIES', path: '/article' },
            // { name: 'ANALYSIS', path: '/alt/featured' },
            { name: 'REVERT', path: '/' }
          ].map((item, index) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-xs font-mono tracking-widest opacity-80 hover:text-white hover:opacity-100 transition-all
                ${location.pathname === item.path ? 'text-white border-b border-white' : 'text-gray-400'}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button className="text-white p-2">☰</button>
        </div>
      </div>
      
      <div className="w-full h-[1px] bg-white/10" />
    </header>
  );
};

export default AltHeader;
