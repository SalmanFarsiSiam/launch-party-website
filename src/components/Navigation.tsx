
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
    <nav className={cn("flex items-center justify-between py-4 px-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10", className)}>
      <Link to="/" className="flex items-center space-x-2">
        <MPALogo />
      </Link>
      <div className="flex items-center space-x-1 md:space-x-4">
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
      className="flex items-center px-3 py-2 rounded-lg hover:bg-white/10 text-white hover:text-mpa-blue transition-colors"
    >
      <span className="mr-1 md:mr-2">{icon}</span>
      <span className="hidden sm:inline">{children}</span>
    </Link>
  );
};

export default Navigation;
