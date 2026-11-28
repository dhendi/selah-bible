import React from 'react';
import { assetUrl } from '../../utils/assetUrl';

export const ExodusIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-48' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#1E293B] shadow-inner select-none ${className}`}>
      <img
        src={assetUrl('/images/exo-16.webp')}
        alt="Exodus 16: The Provision of Manna"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
};
