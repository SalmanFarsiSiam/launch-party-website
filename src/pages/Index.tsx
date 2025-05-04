
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mpa-darker to-black/90 -z-10 fixed"></div>
      
      {/* Navigation at the top */}
      <Navigation />
      
      {/* Main content container with proper padding for fixed header */}
      <div className="container mx-auto px-4 flex flex-col flex-1 pt-24">
        {/* Hero section taking up the remaining space */}
        <div className="flex-1 flex items-center justify-center">
          <Hero />
        </div>
      </div>
      
      {/* Add some glowing accents */}
      <div className="absolute top-20 left-20 w-60 h-60 bg-mpa-blue/10 rounded-full blur-[100px] -z-5"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-mpa-blue/5 rounded-full blur-[120px] -z-5"></div>
    </div>
  );
};

export default Index;
