
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
      
      {/* Main content */}
      <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
        <div className="bg-gradient-to-r from-white to-mpa-blue bg-clip-text text-transparent">MPA</div>
        <div className="text-3xl md:text-4xl mt-2 text-white font-light tracking-wider">OFFICIAL GAMING COMMUNITY</div>
      </h1>
      
      <p className="text-sm md:text-base text-gray-300 max-w-3xl mb-12 leading-relaxed">
        An official gaming community working with IGI 2 multiplayer game, providing servers and various 
        services with real-time support to all players worldwide.
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
      
      {/* Animated floating elements - simulating 3D objects */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-mpa-blue/30 rounded-full 
                    animate-[pulse_4s_cubic-bezier(0.4,0,0.6,1)_infinite] opacity-70"></div>
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-white/10 rounded-full 
                    animate-[pulse_5s_cubic-bezier(0.4,0,0.6,1)_infinite] opacity-40"></div>
      <div className="absolute top-1/3 left-1/5 w-8 h-8 bg-mpa-blue/10 rounded-full 
                    animate-[pulse_3s_cubic-bezier(0.4,0,0.6,1)_infinite] opacity-50"></div>
    </div>
  );
};

export default Hero;
