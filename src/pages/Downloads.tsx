
import React from 'react';
import Navigation from '@/components/Navigation';
import { Download, File } from 'lucide-react';

const Downloads = () => {
  const downloads = [
    {
      name: "MPA Launcher v9.3.0",
      description: "Latest version of the MPA Launcher with bug fixes and new features.",
      size: "45 MB",
      date: "2025-04-25",
      type: "exe"
    },
    {
      name: "MPA Launcher v9.2.0",
      description: "Previous stable version of the MPA Launcher.",
      size: "42 MB",
      date: "2025-03-15",
      type: "exe"
    },
    {
      name: "MPA Additional Maps Pack",
      description: "Collection of custom maps for extended gameplay.",
      size: "1.2 GB",
      date: "2025-04-10",
      type: "zip"
    },
    {
      name: "MPA Texture Pack",
      description: "High-resolution textures for improved visuals.",
      size: "850 MB",
      date: "2025-04-05",
      type: "zip"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 pt-4 flex flex-col flex-1">
        <Navigation />
        <div className="flex-1 flex flex-col items-center py-12">
          <h1 className="text-4xl font-bold mb-10"><span className="text-mpa-blue">Downloads</span></h1>
          <div className="max-w-4xl w-full">
            <div className="grid gap-6">
              {downloads.map((item, index) => (
                <div key={index} className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-white/10 flex flex-col md:flex-row justify-between items-center">
                  <div className="flex-1 mb-4 md:mb-0">
                    <div className="flex items-center">
                      <File size={24} className="text-mpa-blue mr-3" />
                      <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                    </div>
                    <p className="text-gray-300 mt-2">{item.description}</p>
                    <div className="flex mt-2 text-sm text-gray-400">
                      <span className="mr-4">Size: {item.size}</span>
                      <span>Released: {item.date}</span>
                    </div>
                  </div>
                  <button className="bg-mpa-blue text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center space-x-2">
                    <Download size={18} />
                    <span>Download</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
