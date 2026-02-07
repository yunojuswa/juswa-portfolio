import React from 'react';

interface AuraTextProps {
  text: string;
  href?: string;           // Optional link URL
  target?: string;         // e.g., '_blank'
  colorFrom?: string;      // Tailwind gradient start
  colorTo?: string;        // Tailwind gradient end
  glowSize?: string;       // How far the aura spreads
  blurLevel?: string;      // Intensity of the blur
  opacityBase?: string;    // Opacity when not hovered
  opacityHover?: string;   // Opacity when hovered
  className?: string;
}

const AuraText: React.FC<AuraTextProps> = ({
  text,
  href,
  target,
  colorFrom = 'from-cyan-400',
  colorTo = 'to-blue-600',
  glowSize = '-inset-x-3 -inset-y-1',
  blurLevel = 'blur-xl',
  opacityBase = 'opacity-30',
  opacityHover = 'opacity-100',
  className = ''
}) => {
  const isLink = Boolean(href);
  const Wrapper = isLink ? 'a' : 'span';
  
  return (
    <Wrapper 
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`
        relative inline-block group mx-1 
        ${isLink ? 'cursor-pointer' : 'cursor-default'} 
        ${className}
      `}
    >
      {/* The Aura Background */}
      <span className={`
        absolute ${glowSize} 
        bg-gradient-to-r ${colorFrom} ${colorTo} 
        rounded-lg ${blurLevel} 
        ${opacityBase} 
        group-hover:${opacityHover} 
        group-hover:blur-2xl
        transition-all duration-700 
        animate-pulse group-hover:animate-none
      `}></span>
      
      {/* The Sharp Text Front */}
      <span className="relative z-10 font-bold tracking-tight transition-all duration-300 group-hover:scale-110 group-hover:text-white inline-block">
        {text}
      </span>
    </Wrapper>
  );
};

export default AuraText;