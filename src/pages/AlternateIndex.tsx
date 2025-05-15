
import React from 'react';
import AltHeader from '../components/AltHeader';
import AltHero from '../components/AltHero';
import Footer from '../components/Footer';
import FeaturedSection from '../components/alt/FeaturedSection';
import QuoteSection from '../components/alt/QuoteSection';
import GridSection from '../components/alt/GridSection';
import NewsletterSection from '../components/alt/NewsletterSection';

const AlternateIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <AltHeader />
      
      {/* Hero Section */}
      <AltHero />
      
      {/* Featured Posts Section */}
      <FeaturedSection />
      
      {/* Quote Section */}
      <QuoteSection />
      
      {/* Latest Articles Grid */}
      <GridSection />
      
      {/* Newsletter Section with anatomical styling */}
      {/* <NewsletterSection /> */}
      
      <Footer />
    </div>
  );
};

export default AlternateIndex;
