
import React from 'react';
import { cn } from '@/lib/utils';

interface MPALogoProps {
  className?: string;
}

const MPALogo: React.FC<MPALogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="text-mpa-blue font-bold text-3xl bg-gradient-to-r from-mpa-blue to-blue-300 bg-clip-text text-transparent">
        <span>MPA</span>
        <span className="relative ml-1">
          <span className="text-white">LAUNCHER</span>
        </span>
      </div>
    </div>
  );
};

export default MPALogo;
