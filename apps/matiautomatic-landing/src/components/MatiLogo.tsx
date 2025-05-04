import React from 'react';

const MatiLogo: React.FC = () => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f4c8a" />
          <stop offset="100%" stopColor="#33a3bc" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path d="M40,40 L40,160 L70,160 L70,100 L100,140 L130,100 L130,160 L160,160 L160,40 L100,120 L40,40 Z" fill="url(#logoGradient)" filter="url(#glow)"/>
      <g fill="none" stroke="#59e6ff" strokeWidth="1.5">
        <circle cx="40" cy="40" r="5" />
        <circle cx="160" cy="40" r="5" />
        <circle cx="160" cy="160" r="5" />
        <circle cx="40" cy="160" r="5" />
        <circle cx="100" cy="100" r="5" />
        <line x1="45" y1="40" x2="155" y2="40" />
        <line x1="40" y1="45" x2="40" y2="155" />
        <line x1="160" y1="45" x2="160" y2="155" />
        <line x1="45" y1="160" x2="65" y2="160" />
        <line x1="75" y1="160" x2="125" y2="160" />
        <line x1="135" y1="160" x2="155" y2="160" />
        <line x1="100" y1="105" x2="100" y2="120" />
        
        {/* Additional circuit lines for tech feel */}
        <line x1="40" y1="40" x2="100" y2="100" strokeDasharray="2,2" />
        <line x1="160" y1="40" x2="100" y2="100" strokeDasharray="2,2" />
        <circle cx="70" cy="70" r="2" />
        <circle cx="130" cy="70" r="2" />
        <circle cx="70" cy="130" r="2" />
        <circle cx="130" cy="130" r="2" />
      </g>
    </svg>
  );
};

export default MatiLogo;