
import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import Navigation from '@/components/Navigation';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 pt-4 flex flex-col flex-1">
        <Navigation />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-8xl font-bold mb-4 text-mpa-blue">404</h1>
            <p className="text-2xl text-white mb-8">Oops! Page not found</p>
            <Link to="/" className="bg-mpa-blue text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors inline-block">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
