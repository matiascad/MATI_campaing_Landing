import React from 'react';
import SmartBuildLogo from './SmartBuildLogo';

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Background */}
      <div className="hero-gradient"></div>
      <div className="hero-overlay"></div>
      <div className="animated-bg">
        <div className="circle-decoration circle-1"></div>
        <div className="circle-decoration circle-2"></div>
        <div className="circle-decoration circle-3"></div>
      </div>
      
      {/* Launch Badge */}
      <div className="launch-badge tooltip" id="launch-tooltip">
        Campaign Starts: May 1, 2025
        <span className="tooltip-text">Join us on International Workers' Day for the start of our 10-day campaign!</span>
      </div>
      
      {/* Hero Section */}
      <main id="main-content" className="min-h-screen relative flex flex-col items-center justify-center px-6 py-20">
        <div className="logo-container mb-10" tabIndex={0} aria-label="SmartBuildLab.ai logo, click to interact">
          <div className="logo-inner">
            <SmartBuildLogo />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
            Building the Future with Physical AI
          </span>
        </h1>
        
        <div className="glass-card p-6 max-w-2xl">
          <p className="text-base md:text-lg text-white/90 text-center leading-relaxed">
            SmartBuildLab.ai specializes in revolutionary Physical AI technology, innovating automation and robotics to transform industries.
          </p>
        </div>
      </main>
    </>
  );
};

export default Hero;