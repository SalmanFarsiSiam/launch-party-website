
import React from 'react';
import Navigation from '@/components/Navigation';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Setup = () => {
  const setupSteps = [
    {
      title: "Download the Launcher",
      description: "Download the latest version of the MPA Launcher from our official website."
    },
    {
      title: "Install the Launcher",
      description: "Run the installer and follow the on-screen instructions to install the MPA Launcher."
    },
    {
      title: "Configure the Launcher",
      description: "Open the launcher and configure your game settings, server preferences, and account details."
    },
    {
      title: "Launch and Play",
      description: "Select a game server from the list and click 'Play' to join the multiplayer action."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-mpa-darker to-black/90 -z-10 fixed"></div>
      
      {/* Navigation at the top */}
      <Navigation />
      
      <div className="container mx-auto px-4 flex flex-col flex-1 pt-24">
        <div className="flex-1 flex flex-col items-center justify-center py-12">
          <h1 className="text-5xl font-bold mb-10">
            How To <span className="bg-gradient-to-r from-white to-mpa-blue bg-clip-text text-transparent">Setup</span>
          </h1>
          <div className="max-w-3xl w-full backdrop-blur-md bg-black/40 rounded-xl p-8 border border-mpa-blue/20 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-mpa-blue/10 rounded-full blur-[50px]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-mpa-blue/5 rounded-full blur-[40px]"></div>
            
            <div className="space-y-10 relative z-10">
              {setupSteps.map((step, index) => (
                <div key={index} className="flex items-start hover-glow p-4 rounded-lg transition-all duration-300">
                  <div className="mr-6 bg-mpa-blue rounded-full h-10 w-10 flex items-center justify-center text-white shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="relative inline-block">
                {/* Glowing effect */}
                <div className="absolute -inset-1 bg-mpa-blue/30 rounded-full blur-md"></div>
                <Button 
                  className="relative bg-mpa-blue hover:bg-mpa-blue/80 text-white px-6 py-6 rounded-full transition-all duration-300 flex items-center space-x-3"
                >
                  <Check size={20} />
                  <span>I'm Ready to Play</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
