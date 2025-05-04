import React, { useState, useEffect } from 'react';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const [isLaunched, setIsLaunched] = useState(false);

  useEffect(() => {
    const countDownDate = new Date("May 1, 2025 00:00:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      
      if (distance < 0) {
        setIsLaunched(true);
        return;
      }
      
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };
    
    // Initial update
    updateCountdown();
    
    // Update every second
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="mt-6 text-center">
      <h3 className="text-lg font-medium text-purple-300 mb-3">The 10 Principles of Physical AI (M.A.T.I.)</h3>
      <p className="text-sm text-purple-200 mb-3">Campaign Starts on International Workers' Day</p>
      
      <div className="countdown" id="countdown">
        {isLaunched ? (
          <div className="countdown-item bg-gradient-to-r from-purple-600 to-orange-500 text-white">
            <span className="text-2xl font-bold">LAUNCHED!</span>
          </div>
        ) : (
          <>
            <div className="countdown-item tooltip">
              <span className="text-2xl font-bold text-white" id="days">{formatNumber(timeLeft.days)}</span>
              <span className="text-xs text-purple-300">Days</span>
              <span className="tooltip-text">{timeLeft.days} day(s) until campaign launch!</span>
            </div>
            <div className="countdown-item tooltip">
              <span className="text-2xl font-bold text-white" id="hours">{formatNumber(timeLeft.hours)}</span>
              <span className="text-xs text-purple-300">Hours</span>
              <span className="tooltip-text">Hours remaining until campaign launch</span>
            </div>
            <div className="countdown-item tooltip">
              <span className="text-2xl font-bold text-white" id="minutes">{formatNumber(timeLeft.minutes)}</span>
              <span className="text-xs text-purple-300">Minutes</span>
              <span className="tooltip-text">Minutes remaining until campaign launch</span>
            </div>
            <div className="countdown-item tooltip">
              <span className="text-2xl font-bold text-white" id="seconds">{formatNumber(timeLeft.seconds)}</span>
              <span className="text-xs text-purple-300">Seconds</span>
              <span className="tooltip-text">Seconds remaining until campaign launch</span>
            </div>
          </>
        )}
      </div>
      
      <p className="text-purple-300 mt-4">
        Starting May 1st, 2025 (International Workers' Day)
      </p>
    </div>
  );
};

export default Countdown;