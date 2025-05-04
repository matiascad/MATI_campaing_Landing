import React from 'react';

const SmartBuildLogo: React.FC = () => {
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="50%" stopColor="#7e22ce" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Main circle */}
      <circle cx="200" cy="200" r="180" fill="none" stroke="url(#circleGradient)" strokeWidth="4" filter="url(#glow)"/>
      
      {/* Inner elements representing a tech city/skyline */}
      <g fill="white" opacity="0.9">
        {/* Skyline/buildings representation */}
        <rect x="100" y="160" width="30" height="100"/>
        <rect x="140" y="140" width="30" height="120"/>
        <rect x="180" y="120" width="40" height="140"/>
        <rect x="230" y="150" width="30" height="110"/>
        <rect x="270" y="170" width="30" height="90"/>
        
        {/* Small connecting elements */}
        <circle cx="100" cy="150" r="5"/>
        <circle cx="150" cy="130" r="5"/>
        <circle cx="200" cy="110" r="5"/>
        <circle cx="250" cy="140" r="5"/>
        <circle cx="290" cy="160" r="5"/>
        
        <circle cx="120" cy="270" r="5"/>
        <circle cx="170" cy="270" r="5"/>
        <circle cx="220" cy="270" r="5"/>
        <circle cx="270" cy="270" r="5"/>
        
        {/* Connection lines */}
        <line x1="100" y1="150" x2="100" y2="160" stroke="white" strokeWidth="2"/>
        <line x1="150" y1="130" x2="150" y2="140" stroke="white" strokeWidth="2"/>
        <line x1="200" y1="110" x2="200" y2="120" stroke="white" strokeWidth="2"/>
        <line x1="250" y1="140" x2="250" y2="150" stroke="white" strokeWidth="2"/>
        <line x1="290" y1="160" x2="290" y2="170" stroke="white" strokeWidth="2"/>
      </g>
      
      {/* Outer connection nodes and lines */}
      <g fill="white" opacity="0.7">
        <circle cx="70" cy="70" r="6"/>
        <circle cx="330" cy="70" r="6"/>
        <circle cx="70" cy="330" r="6"/>
        <circle cx="330" cy="330" r="6"/>
        
        <line x1="70" y1="76" x2="70" y2="324" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <line x1="76" y1="70" x2="324" y2="70" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <line x1="330" y1="76" x2="330" y2="324" stroke="white" strokeWidth="1.5" opacity="0.5"/>
        <line x1="76" y1="330" x2="324" y2="330" stroke="white" strokeWidth="1.5" opacity="0.5"/>
      </g>
    </svg>
  );
};

export default SmartBuildLogo;