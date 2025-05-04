
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, HelpCircle, Download, Map, Info, UserRound } from 'lucide-react';
import MPALogo from './MPALogo';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from './ui/avatar';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={cn("flex items-center justify-between py-6 px-6 w-full fixed top-0 z-50 bg-black/40 backdrop-blur-md", className)}>
      {/* Logo on left */}
      <Link to="/" className="flex items-center">
        <MPALogo />
      </Link>
      
      {/* Navigation in center - exactly centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4 md:space-x-8">
        <NavItem to="/" icon={<Home size={20} />}>Home</NavItem>
        <NavItem to="/setup" icon={<HelpCircle size={20} />}>How To Setup</NavItem>
        <NavItem to="/downloads" icon={<Download size={20} />}>Downloads</NavItem>
        <NavItem to="/maps" icon={<Map size={20} />}>Maps</NavItem>
        <NavItem to="/faq" icon={<Info size={20} />}>FAQ</NavItem>
        <NavItem to="/about" icon={<Info size={20} />}>About</NavItem>
      </div>
      
      {/* Profile on right */}
      <div className="flex items-center space-x-2">
        <span className="text-white text-sm mr-2 hidden sm:inline">Username</span>
        <Avatar className="h-8 w-8 bg-mpa-blue hover:bg-mpa-blue/80 cursor-pointer border border-white/20">
          <AvatarFallback className="text-white">
            <UserRound size={18} />
          </AvatarFallback>
        </Avatar>
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
