import React from 'react';

const FeaturePrinciples: React.FC = () => {
  return (
    <section className="py-16 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Featured Principles of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Physical AI</span>
        </h2>
        
        <div className="featured-principles">
          <div className="glass-card principle-card p-6" tabIndex={0}>
            <div className="flex items-center mb-4">
              <span className="text-purple-400 mr-3 text-2xl">1️⃣</span>
              <h3 className="text-xl font-semibold text-white">Connects to the Digital</h3>
            </div>
            <p className="text-white/80">
              Physical AI bridges simulation (NVIDIA Isaac Sim, BIM, CAD) to real-world execution seamlessly.
            </p>
          </div>
          
          <div className="glass-card principle-card p-6" tabIndex={0}>
            <div className="flex items-center mb-4">
              <span className="text-purple-400 mr-3 text-2xl">2️⃣</span>
              <h3 className="text-xl font-semibold text-white">Builds the Next</h3>
            </div>
            <p className="text-white/80">
              Autonomous self-replication: AI units constructing new versions of themselves.
            </p>
          </div>
          
          <div className="glass-card principle-card p-6" tabIndex={0}>
            <div className="flex items-center mb-4">
              <span className="text-purple-400 mr-3 text-2xl">3️⃣</span>
              <h3 className="text-xl font-semibold text-white">Speaks to the Next</h3>
            </div>
            <p className="text-white/80">
              Robots communicating in real-time, collaboratively solving complex tasks.
            </p>
          </div>
          
          <div className="glass-card principle-card p-6" tabIndex={0}>
            <div className="flex items-center mb-4">
              <span className="text-purple-400 mr-3 text-2xl">4️⃣</span>
              <h3 className="text-xl font-semibold text-white">Repairs Itself</h3>
            </div>
            <p className="text-white/80">
              AI diagnosing and fixing itself autonomously, zero downtime.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-white/80 mb-6">Follow our LinkedIn campaign to discover all 10 principles, with one principle revealed each day starting May 1st!</p>
          <a href="#subscription" className="inline-block gradient-button py-3 px-8 rounded-full text-white font-medium">
            Stay Updated
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturePrinciples;