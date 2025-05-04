import React from 'react';

const MatiExplanation: React.FC = () => {
  return (
    <div className="max-w-3xl mt-12 mb-8">
      <h2 className="text-2xl font-bold text-center text-white mb-6">What is M.A.T.I.?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mati-grid">
        <div className="mati-card p-5 focus-highlight" tabIndex={0} aria-label="M stands for Modular">
          <div className="flex items-start">
            <span className="mati-letter">M</span>
            <div>
              <h3 className="text-xl font-semibold text-white">Modular</h3>
              <p className="text-purple-200 mt-1">Adaptable, flexible components</p>
            </div>
          </div>
        </div>
        
        <div className="mati-card p-5 focus-highlight" tabIndex={0} aria-label="A stands for Artificial">
          <div className="flex items-start">
            <span className="mati-letter">A</span>
            <div>
              <h3 className="text-xl font-semibold text-white">Artificial</h3>
              <p className="text-purple-200 mt-1">AI-driven intelligence</p>
            </div>
          </div>
        </div>
        
        <div className="mati-card p-5 focus-highlight" tabIndex={0} aria-label="T stands for Tangible">
          <div className="flex items-start">
            <span className="mati-letter">T</span>
            <div>
              <h3 className="text-xl font-semibold text-white">Tangible</h3>
              <p className="text-purple-200 mt-1">Physical, real-world presence</p>
            </div>
          </div>
        </div>
        
        <div className="mati-card p-5 focus-highlight" tabIndex={0} aria-label="I stands for Intelligence">
          <div className="flex items-start">
            <span className="mati-letter">I</span>
            <div>
              <h3 className="text-xl font-semibold text-white">Intelligence</h3>
              <p className="text-purple-200 mt-1">Autonomous learning & decision-making</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatiExplanation;