import React from 'react';
import { assetUrl } from '../../utils/assetUrl';

export const ThematicIllustration: React.FC<{
  type: 'peace-pastures' | 'wisdom-scroll' | 'courage-light';
  className?: string;
}> = ({ type, className = 'w-full h-48' }) => {
  const src =
    type === 'peace-pastures'
      ? '/images/peace-pastures.jpg'
      : type === 'wisdom-scroll'
      ? '/images/wisdom-scroll.jpg'
      : '/images/courage-light.jpg';

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-[#F4EDE4] shadow-inner select-none ${className}`}>
      <img
        src={assetUrl(src)}
        alt={type}
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
  );
};
