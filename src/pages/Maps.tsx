
import React from 'react';
import Navigation from '@/components/Navigation';
import { Download, Map } from 'lucide-react';

const Maps = () => {
  const maps = [
    {
      name: "Abandoned Facility",
      description: "A large abandoned research facility with multiple buildings and underground passages.",
      players: "4-16",
      size: "125 MB"
    },
    {
      name: "Urban Warfare",
      description: "Dense city environment with tall buildings, narrow streets, and hidden shortcuts.",
      players: "6-24",
      size: "180 MB"
    },
    {
      name: "Desert Storm",
      description: "Wide open desert landscape with scattered outposts and hidden bunkers.",
      players: "8-32",
      size: "150 MB"
    },
    {
      name: "Arctic Base",
      description: "Frozen research facility with icy terrain and limited visibility.",
      players: "4-12",
      size: "110 MB"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 pt-4 flex flex-col flex-1">
        <Navigation />
        <div className="flex-1 flex flex-col items-center py-12">
          <h1 className="text-4xl font-bold mb-10"><span className="text-mpa-blue">Maps</span></h1>
          <div className="max-w-4xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {maps.map((map, index) => (
                <div key={index} className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-white/10">
                  <div className="h-40 bg-gray-800 flex items-center justify-center">
                    <Map size={64} className="text-mpa-blue" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{map.name}</h3>
                    <p className="text-gray-300 mb-4">{map.description}</p>
                    <div className="flex justify-between text-sm text-gray-400 mb-4">
                      <span>Players: {map.players}</span>
                      <span>Size: {map.size}</span>
                    </div>
                    <button className="w-full bg-mpa-blue text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                      <Download size={18} />
                      <span>Download Map</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
