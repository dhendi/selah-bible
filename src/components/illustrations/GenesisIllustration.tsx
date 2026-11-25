import React from 'react';
import { assetUrl } from '../../utils/assetUrl';

export const GenesisIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-48' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#1E293B] shadow-inner select-none ${className}`}>
      <img
        src={assetUrl('/images/genesis-creation.jpg')}
        alt="Genesis 1: Creation and Beginnings"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
};
