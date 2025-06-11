import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-500 via-red-600 to-orange-500 overflow-hidden">
      {/* Background cityscape */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/374811/pexels-photo-374811.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080')`
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/80 via-red-600/70 to-orange-500/80"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left content */}
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                <span className="block">BRIGHT</span>
                <span className="block text-yellow-200">IDEAS</span>
              </h1>
              <p className="text-xl lg:text-2xl text-red-100 mb-8">
                Illuminate your world with premium LED lighting solutions
              </p>
            </div>
            
            <div className="space-y-4">
              <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                Explore Products
              </button>
              <div className="flex items-center space-x-4 text-red-100">
                <div className="w-12 h-px bg-red-200"></div>
                <span className="text-sm">Energy Efficient • Long Lasting • Eco Friendly</span>
              </div>
            </div>
          </div>

          {/* Right content - Product showcase */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Featured products */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className="w-full h-40 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-24 h-16 bg-gray-200 rounded-lg shadow-lg"></div>
                </div>
                <h3 className="text-white font-semibold">LED Flood Light</h3>
                <p className="text-red-100 text-sm">50W High Power</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 mt-8">
                <div className="w-full h-40 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-200 rounded-full shadow-lg"></div>
                </div>
                <h3 className="text-white font-semibold">LED Bulb</h3>
                <p className="text-red-100 text-sm">9W Energy Saver</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 -mt-4">
                <div className="w-full h-40 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-32 h-8 bg-gray-200 rounded-lg shadow-lg"></div>
                </div>
                <h3 className="text-white font-semibold">LED Batten</h3>
                <p className="text-red-100 text-sm">20W Linear Light</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 mt-4">
                <div className="w-full h-40 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-24 bg-gray-200 rounded-lg shadow-lg"></div>
                </div>
                <h3 className="text-white font-semibold">Street Light</h3>
                <p className="text-red-100 text-sm">100W Solar LED</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-orange-300 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 text-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;