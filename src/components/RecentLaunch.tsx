import React from 'react';
import { Star } from 'lucide-react';

const RecentLaunch = () => {
  const products = [
    {
      id: 1,
      name: 'PC Batten',
      wattage: '20W',
      rating: 4.5,
      originalPrice: '₹299',
      salePrice: '₹249',
      colors: ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500']
    },
    {
      id: 2,
      name: 'Floodlights',
      wattage: '50W',
      rating: 4.8,
      originalPrice: '₹599',
      salePrice: '₹449',
      colors: ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500']
    },
    {
      id: 3,
      name: 'Round Downlight',
      wattage: '12W',
      rating: 4.6,
      originalPrice: '₹199',
      salePrice: '₹149',
      colors: ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500']
    },
    {
      id: 4,
      name: 'DC Bulbs',
      wattage: '9W',
      rating: 4.7,
      originalPrice: '₹159',
      salePrice: '₹119',
      colors: ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500']
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Launch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest LED lighting innovations designed to brighten your environment
            with cutting-edge technology and superior performance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center overflow-hidden">
                <div className="w-24 h-16 bg-white rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                {/* Sale badge */}
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  SALE
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                  <span className="text-sm text-gray-500">{product.wattage}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                </div>

                {/* Color options */}
                <div className="flex items-center space-x-2 mb-4">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full ${color} border-2 border-gray-200 hover:scale-110 transition-transform cursor-pointer`}
                    ></div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-red-600">{product.salePrice}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-semibold">
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    ♡
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

export default RecentLaunch;