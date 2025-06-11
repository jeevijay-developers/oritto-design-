import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 12,
    minutes: 34,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Deal info */}
          <div className="text-white space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-4">Deal Of The Day</h2>
              <div className="flex items-center space-x-2 text-red-400 mb-4">
                <Clock className="w-5 h-5" />
                <span className="text-lg">Limited Time Offer</span>
              </div>
            </div>

            {/* Countdown timer */}
            <div className="flex space-x-4">
              <div className="bg-red-500 rounded-lg px-4 py-3 text-center min-w-[60px]">
                <div className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-red-100">Hours</div>
              </div>
              <div className="flex items-center text-2xl font-bold">:</div>
              <div className="bg-red-500 rounded-lg px-4 py-3 text-center min-w-[60px]">
                <div className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-red-100">Minutes</div>
              </div>
              <div className="flex items-center text-2xl font-bold">:</div>
              <div className="bg-red-500 rounded-lg px-4 py-3 text-center min-w-[60px]">
                <div className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-red-100">Seconds</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Flood Lights + Streetlights Combo</h3>
              <p className="text-gray-300">
                Get our premium flood lights and street lights bundle at an unbeatable price. 
                Perfect for outdoor lighting solutions with maximum efficiency.
              </p>
              
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-red-400">₹1,299</span>
                <span className="text-xl text-gray-400 line-through">₹2,199</span>
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  40% OFF
                </span>
              </div>

              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Grab This Deal
              </button>
            </div>
          </div>

          {/* Right side - Product showcase */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {/* Flood Light */}
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl h-32 flex items-center justify-center mb-4">
                    <div className="w-20 h-16 bg-gray-200 rounded-lg shadow-lg"></div>
                  </div>
                  <h4 className="text-white font-semibold">50W Flood Light</h4>
                  <p className="text-gray-300 text-sm">High Lumens</p>
                </div>

                {/* Street Light */}
                <div className="text-center">
                  <div className="bg-white/20 rounded-xl h-32 flex items-center justify-center mb-4">
                    <div className="w-12 h-20 bg-gray-200 rounded-lg shadow-lg"></div>
                  </div>
                  <h4 className="text-white font-semibold">100W Street Light</h4>
                  <p className="text-gray-300 text-sm">Solar Powered</p>
                </div>
              </div>

              {/* Features */}
              <div className="mt-6 space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>5 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>IP65 Waterproof Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Free Installation Support</span>
                </div>
              </div>
            </div>

            {/* Floating discount badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-800 rounded-full w-16 h-16 flex items-center justify-center font-bold animate-pulse">
              40%<br/>OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;