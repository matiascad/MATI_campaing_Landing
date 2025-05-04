import React from 'react';
import './styles/index.css';

const App: React.FC = () => {
  React.useEffect(() => {
    // Countdown Timer functionality
    const updateCountdown = () => {
      const countDownDate = new Date("May 1, 2025 00:00:00").getTime();
      const now = new Date().getTime();
      const timeRemaining = countDownDate - now;
      
      // Calculate days, hours, minutes and seconds
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      
      // Display the results
      const daysElement = document.getElementById("days");
      const hoursElement = document.getElementById("hours");
      const minutesElement = document.getElementById("minutes");
      const secondsElement = document.getElementById("seconds");
      
      if (daysElement) daysElement.textContent = days < 10 ? '0' + days : days.toString();
      if (hoursElement) hoursElement.textContent = hours < 10 ? '0' + hours : hours.toString();
      if (minutesElement) minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes.toString();
      if (secondsElement) secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds.toString();
    };

    // Initial update
    updateCountdown();
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-deepPurple text-white">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
              Building the Future with Physical AI
            </h1>
            <div className="max-w-2xl mx-auto mt-8 p-6 glass-card">
              <p className="text-lg text-white/90">
                SmartBuildLab.ai specializes in revolutionary Physical AI technology, innovating automation and robotics to transform industries.
              </p>
            </div>
          </div>
          
          {/* MATI Explanation */}
          <div className="max-w-4xl w-full">
            <h2 className="text-3xl font-bold text-center mb-10">What is M.A.T.I.?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="mati-card p-5">
                <div className="flex items-start">
                  <span className="mati-letter">M</span>
                  <div>
                    <h3 className="text-xl font-semibold">Modular</h3>
                    <p className="text-purple-200 mt-1">Adaptable, flexible components</p>
                  </div>
                </div>
              </div>
              
              <div className="mati-card p-5">
                <div className="flex items-start">
                  <span className="mati-letter">A</span>
                  <div>
                    <h3 className="text-xl font-semibold">Artificial</h3>
                    <p className="text-purple-200 mt-1">AI-driven intelligence</p>
                  </div>
                </div>
              </div>
              
              <div className="mati-card p-5">
                <div className="flex items-start">
                  <span className="mati-letter">T</span>
                  <div>
                    <h3 className="text-xl font-semibold">Tangible</h3>
                    <p className="text-purple-200 mt-1">Physical, real-world presence</p>
                  </div>
                </div>
              </div>
              
              <div className="mati-card p-5">
                <div className="flex items-start">
                  <span className="mati-letter">I</span>
                  <div>
                    <h3 className="text-xl font-semibold">Intelligence</h3>
                    <p className="text-purple-200 mt-1">Autonomous learning & decision-making</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Countdown */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-medium text-purple-300 mb-3">The 10 Principles of Physical AI (M.A.T.I.)</h3>
            <p className="text-purple-200 mb-6">Campaign Starts on International Workers' Day</p>
            
            <div className="flex justify-center space-x-4">
              <div className="countdown-item">
                <span id="days" className="text-3xl font-bold block">00</span>
                <span className="text-sm text-purple-300">Days</span>
              </div>
              <div className="countdown-item">
                <span id="hours" className="text-3xl font-bold block">11</span>
                <span className="text-sm text-purple-300">Hours</span>
              </div>
              <div className="countdown-item">
                <span id="minutes" className="text-3xl font-bold block">39</span>
                <span className="text-sm text-purple-300">Minutes</span>
              </div>
              <div className="countdown-item">
                <span id="seconds" className="text-3xl font-bold block">18</span>
                <span className="text-sm text-purple-300">Seconds</span>
              </div>
            </div>
            
            <p className="mt-6 text-purple-300">
              Starting May 1st, 2025 (International Workers' Day)
            </p>
          </div>
        </div>
      </main>
      
      {/* Featured Principles Section */}
      <section className="py-16 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Featured Principles of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Physical AI</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="principle-card p-6">
              <div className="flex items-center mb-4">
                <span className="text-purple-400 mr-3 text-2xl">1️⃣</span>
                <h3 className="text-xl font-semibold">Connects to the Digital</h3>
              </div>
              <p className="text-white/80">
                Physical AI bridges simulation (NVIDIA Isaac Sim, BIM, CAD) to real-world execution seamlessly.
              </p>
            </div>
            
            <div className="principle-card p-6">
              <div className="flex items-center mb-4">
                <span className="text-purple-400 mr-3 text-2xl">2️⃣</span>
                <h3 className="text-xl font-semibold">Builds the Next</h3>
              </div>
              <p className="text-white/80">
                Autonomous self-replication: AI units constructing new versions of themselves.
              </p>
            </div>
            
            <div className="principle-card p-6">
              <div className="flex items-center mb-4">
                <span className="text-purple-400 mr-3 text-2xl">3️⃣</span>
                <h3 className="text-xl font-semibold">Speaks to the Next</h3>
              </div>
              <p className="text-white/80">
                Robots communicating in real-time, collaboratively solving complex tasks.
              </p>
            </div>
            
            <div className="principle-card p-6">
              <div className="flex items-center mb-4">
                <span className="text-purple-400 mr-3 text-2xl">4️⃣</span>
                <h3 className="text-xl font-semibold">Repairs Itself</h3>
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
      
      {/* Subscription Section */}
      <section id="subscription" className="py-20 px-6 relative">
        <div className="max-w-md mx-auto">
          <div className="form-container p-8">
            <h2 className="text-2xl font-bold mb-6">Get Notified</h2>
            
            <form className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full px-4 py-3 rounded-md"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-1">Name (Optional)</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-md"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-purple-300 mb-1">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 rounded-md"
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full gradient-button text-white font-medium py-3 px-4 rounded-md"
              >
                Get Notified
              </button>
              
              <p className="text-xs text-purple-300/70 text-center mt-4">
                Be the first to know about breakthroughs in Physical AI.<br />
                Follow our LinkedIn campaign starting May 1st!
              </p>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="pb-16 relative">
        <div className="max-w-md mx-auto flex justify-center space-x-10 mb-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn Profile">
            <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a href="mailto:info@smartbuildlab.ai" className="social-icon" aria-label="Email Us">
            <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-purple-400/70">
            #PhysicalAI #SmartBuildLab #MatiAUTOmatic #AI #Robotics #Innovation #WorkersDay
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;