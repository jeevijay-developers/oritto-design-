import React from 'react';

const LightingSolutions = () => {
  const solutions = [
    {
      title: 'Residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Modern home lighting solutions'
    },
    {
      title: 'Industrial',
      image: 'https://images.pexels.com/photos/374811/pexels-photo-374811.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Heavy-duty industrial lighting'
    },
    {
      title: 'Commercial',
      image: 'https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Office and retail spaces'
    },
    {
      title: 'Outdoor',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Street and landscape lighting'
    },
    {
      title: 'Hospitality',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Hotels and restaurants'
    },
    {
      title: 'Sports',
      image: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=400&h=300',
      description: 'Stadium and arena lighting'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lighting Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive LED lighting solutions for every application and environment
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${solution.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-300 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-200 group-hover:text-white transition-colors">
                    {solution.description}
                  </p>
                  
                  {/* Learn More Button */}
                  <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LightingSolutions;