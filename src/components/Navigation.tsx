
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, HelpCircle, Download, Map, Info } from 'lucide-react';
import MPALogo from './MPALogo';
import { cn } from '@/lib/utils';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={cn("flex flex-col items-center justify-center py-6 px-6", className)}>
      <Link to="/" className="flex items-center mb-4">
        <MPALogo />
      </Link>
      <div className="flex items-center justify-center space-x-4 md:space-x-8 bg-black/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
        <NavItem to="/" icon={<Home size={20} />}>Home</NavItem>
        <NavItem to="/setup" icon={<HelpCircle size={20} />}>How To Setup</NavItem>
        <NavItem to="/downloads" icon={<Download size={20} />}>Downloads</NavItem>
        <NavItem to="/maps" icon={<Map size={20} />}>Maps</NavItem>
        <NavItem to="/faq" icon={<Info size={20} />}>FAQ</NavItem>
        <NavItem to="/about" icon={<Info size={20} />}>About</NavItem>
      </div>
    </nav>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, children }) => {
  return (
    <Link 
      to={to} 
      className="flex items-center px-3 py-2 text-white hover:text-mpa-blue transition-colors"
    >
      <span className="mr-1">{icon}</span>
      <span className="hidden md:inline text-sm font-medium">{children}</span>
    </Link>
  );
};

export default Navigation;
