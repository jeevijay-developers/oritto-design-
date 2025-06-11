import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCategories = () => {
  const categories = [
    {
      title: "Battens",
      description:
        "Experience the most loved High Light Colour white with oritto's specially crafted and designed Battens",
      products: [
        {
          name: "PC Battens",
          wattage: "20W",
          price: "₹299",
          rating: 4.5,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
        {
          name: "Slim Battens",
          wattage: "18W",
          price: "₹249",
          rating: 4.3,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
        {
          name: "Round Tubelight Battens",
          wattage: "22W",
          price: "₹319",
          rating: 4.6,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
        {
          name: "DC Battens",
          wattage: "16W",
          price: "₹279",
          rating: 4.4,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
      ],
    },
    {
      title: "Flood Lights",
      description:
        "Experience the most loved High Light Colour white with oritto's specially crafted and designed Battens",
      products: [
        {
          name: "PC Battens",
          wattage: "50W",
          price: "₹599",
          rating: 4.7,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
        {
          name: "Moonbeam Sensor",
          wattage: "30W",
          price: "₹449",
          rating: 4.5,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
        {
          name: "Round Tubelight Battens",
          wattage: "100W",
          price: "₹899",
          rating: 4.8,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
      ],
    },
    {
      title: "Street Lights",
      description:
        "Experience the most loved High Light Colour white with oritto's specially crafted and designed Battens",
      products: [
        {
          name: "Street Lights",
          wattage: "60W",
          price: "₹1299",
          rating: 4.6,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
        {
          name: "Moonbeam Sensor",
          wattage: "80W",
          price: "₹1599",
          rating: 4.7,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
        {
          name: "Round Tubelight Battens",
          wattage: "120W",
          price: "₹1899",
          rating: 4.8,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
        {
          name: "DC Battens",
          wattage: "100W",
          price: "₹1699",
          rating: 4.5,
          colors: [
            "bg-red-500",
            "bg-blue-500",
            "bg-green-500",
            "bg-yellow-500",
            "bg-purple-500",
          ],
        },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                {category.title}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {category.products.map((product, productIndex) => (
                <div
                  key={productIndex}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                >
                  {/* Product Image */}
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center overflow-hidden">
                    <div className="w-24 h-16 bg-white rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {product.wattage}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        ({product.rating})
                      </span>
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

                    {/* Price and Actions */}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-red-600">
                        {product.price}
                      </span>
                      <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors">
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
