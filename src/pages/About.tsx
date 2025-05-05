
import React from 'react';
import Navigation from '@/components/Navigation';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 bg-gradient-to-b from-mpa-darker to-black/90 -z-10 fixed"></div>
      
      <div className="container mx-auto px-4 flex flex-col flex-1">
        <Navigation />
        <div className="flex-1 flex flex-col items-center py-12">
          <h1 className="text-4xl font-bold mb-10">About <span className="text-mpa-blue">MPA</span></h1>
          <div className="max-w-3xl w-full bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                MPA (Multi-Player Alliance) is a dedicated gaming community focused on preserving and enhancing the multiplayer experience of IGI 2, a classic tactical shooter that has maintained a devoted following for years.
              </p>
              
              <p className="text-gray-300 mb-6">
                Established in 2018, our community has grown from a small group of enthusiasts to a thriving network of players, developers, and content creators united by their passion for tactical gameplay.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                Our mission is to keep the IGI 2 multiplayer experience alive and accessible to all players worldwide. We provide reliable servers, continued development, community support, and new content to ensure that this classic game continues to thrive.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">The MPA Team</h2>
              <p className="text-gray-300 mb-6">
                The MPA team consists of volunteer developers, server administrators, and community moderators who work together to maintain and improve the multiplayer experience. Our team members are located around the world, providing round-the-clock support and development.
              </p>
              
              <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Join Our Community</h2>
              <p className="text-gray-300 mb-6">
                We welcome all players, regardless of skill level or experience. Join our Discord server to connect with other players, participate in tournaments, report issues, or simply chat about the game.
              </p>
              
              <div className="flex justify-center mt-8">
                <button className="bg-mpa-blue text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors">
                  Join Discord Community
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="py-6 border-t border-white/10 mt-12 text-center">
          <p className="text-gray-400 text-sm">&copy; 2025 Multi-Player Alliance. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-mpa-blue transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-mpa-blue transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-mpa-blue transition-colors">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default About;
