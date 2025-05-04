
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 pt-4 flex flex-col flex-1">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Index;
