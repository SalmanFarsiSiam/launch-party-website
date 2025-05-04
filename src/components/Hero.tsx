
import React from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center py-16 text-center relative", className)}>
      {/* Futuristic light effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-mpa-blue/20 blur-[100px] rounded-full -z-10"></div>
      
      {/* Main content - styled to match the reference image */}
      <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
        <span className="text-mpa-blue">MPA</span>
        <span className="text-white"> Official Community</span>
      </h1>
      
      <p className="text-sm md:text-base text-gray-200 max-w-3xl mb-12 leading-relaxed uppercase tracking-wider font-medium">
        An official gaming community working with IGI 2 multiplayer game and provided servers and various other services with real-time support to all players.
      </p>
      
      <div className="relative">
        {/* Glowing effect behind button */}
        <div className="absolute -inset-1 bg-mpa-blue/30 rounded-full blur-md"></div>
        <Button 
          className="relative bg-mpa-blue hover:bg-mpa-blue/80 text-white px-8 py-6 rounded-full transition-all duration-300 flex items-center space-x-3 text-lg"
        >
          <Download size={24} />
          <span>Download Launcher</span>
        </Button>
      </div>
      
      <p className="text-gray-400 mt-4 text-sm">v9.3.0</p>
    </div>
  );
};

export default Hero;
