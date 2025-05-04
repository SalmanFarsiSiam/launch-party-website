
import React from 'react';
import { cn } from '@/lib/utils';

interface MPALogoProps {
  className?: string;
}

const MPALogo: React.FC<MPALogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="text-mpa-blue font-bold text-2xl">
        <span>MPA</span>
      </div>
    </div>
  );
};

export default MPALogo;
