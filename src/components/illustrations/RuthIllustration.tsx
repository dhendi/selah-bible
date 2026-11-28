import React from 'react';
import { assetUrl } from '../../utils/assetUrl';

export const RuthIllustration: React.FC<{ className?: string }> = ({ className = 'w-full h-48' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#E8DDD0] shadow-inner select-none ${className}`}>
      <img
        src={assetUrl('/images/ruth-naomi.webp')}
        alt="Ruth and Naomi on the road to Bethlehem"
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
};
