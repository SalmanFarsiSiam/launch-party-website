
import React from 'react';
import Navigation from '@/components/Navigation';
import { Check } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 pt-4 flex flex-col flex-1">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center py-12">
          <h1 className="text-4xl font-bold mb-10">How To <span className="text-mpa-blue">Setup</span></h1>
          <div className="max-w-3xl w-full bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="space-y-8">
              {setupSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 bg-mpa-blue rounded-full h-8 w-8 flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <button className="bg-mpa-blue text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors flex items-center space-x-2 mx-auto">
                <Check size={20} />
                <span>I'm Ready to Play</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
