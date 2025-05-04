import React from 'react';
import MatiLogo from './MatiLogo';

const Hero: React.FC = () => {
  return (
    <>
      <div className="hero-background">
        <div className="animated-gradient" id="animated-gradient"></div>
        <div className="circuit-overlay"></div>
        <div className="glow"></div>
        <div className="canvas-container" id="particles-canvas"></div>
      </div>
      
      <div className="launch-badge tooltip" id="launch-tooltip">
        Campaign Starts: May 1, 2025
        <span className="tooltip-text">Join us on International Workers' Day for the start of our 10-day campaign!</span>
      </div>
      
      <main id="main-content" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        <div className="m-logo w-56 h-56 mb-10 floating" id="logo-container" tabIndex={0} aria-label="MatiAUTOmatic logo, click to interact">
          <MatiLogo />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-white text-center tracking-tight relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">MatiAUTOmatic</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-light mb-8 text-blue-100 text-center">
          Pioneering Physical AI Innovation
        </p>
        
        <div className="glass-card p-6 max-w-2xl border border-blue-500/20">
          <p className="text-base md:text-lg text-white/90 text-center leading-relaxed">
            Hi, I'm Mati—Founder of SmartBuildLab.ai, innovating in automation, robotics, and Physical AI. Join me on this exciting journey!
          </p>
        </div>
        
        {/* M.A.T.I. Explanation */}
        <div className="max-w-3xl mt-12 mb-8">
          <h2 className="text-2xl font-bold text-center text-white mb-6">What is M.A.T.I.?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mati-card p-5 focus-highlight" tabIndex={0} aria-label="M stands for Modular">
              <div className="flex items-start">
                <span className="mati-letter">M</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Modular</h3>
                  <p className="text-blue-200 mt-1">Adaptable, flexible components</p>
                </div>
              </div>
            </div>
            
            <div className="mati-card p-5 focus-highlight" tabIndex={0} aria-label="A stands for Artificial">
              <div className="flex items-start">
                <span className="mati-letter">A</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Artificial</h3>
                  <p className="text-blue-200 mt-1">AI-driven intelligence</p>
                </div>
              </div>
            </div>
            
            <div className="mati-card p-5 focus-highlight" tabIndex={0} aria-label="T stands for Tangible">
              <div className="flex items-start">
                <span className="mati-letter">T</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Tangible</h3>
                  <p className="text-blue-200 mt-1">Physical, real-world presence</p>
                </div>
              </div>
            </div>
            
            <div className="mati-card p-5 focus-highlight" tabIndex={0} aria-label="I stands for Intelligence">
              <div className="flex items-start">
                <span className="mati-letter">I</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">Intelligence</h3>
                  <p className="text-blue-200 mt-1">Autonomous learning & decision-making</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;