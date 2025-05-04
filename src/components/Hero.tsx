
import React from 'react';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-center py-16 text-center", className)}>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <span className="text-mpa-blue">MPA</span> <span className="text-white">Official Community</span>
      </h1>
      <p className="text-xs md:text-sm text-gray-300 max-w-4xl mb-10">
        AN OFFICIAL GAMING COMMUNITY WORKING WITH IGI 2 MULTIPLAYER GAME AND PROVIDED SERVERS AND VARIOUS OTHER SERVICES WITH REAL-TIME SUPPORT TO ALL PLAYERS.
      </p>
      <button className="bg-mpa-blue text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center space-x-2">
        <Download size={20} />
        <span>Download Launcher</span>
      </button>
      <p className="text-gray-400 mt-3 text-sm">v9.3.0</p>
    </div>
  );
};

export default Hero;
