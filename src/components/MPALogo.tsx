
import React from 'react';
import { cn } from '@/lib/utils';

interface MPALogoProps {
  className?: string;
}

const MPALogo: React.FC<MPALogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="text-mpa-blue font-bold text-3xl">
        <span>M</span>
        <span className="relative">
          <span>&lt;</span>
        </span>
      </div>
    </div>
  );
};

export default MPALogo;
