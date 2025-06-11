import React, { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const lightingSolutions = [
    "Home Solutions",
    "Retail Solutions",
    "Office Solutions",
    "Industrial Solutions",
    "Outdoor Solutions",
    "Hospitality Solutions",
    "Road Solutions",
    "Area Solutions",
    "Landscape Solutions",
    "Commercial Solutions",
  ];

  return (
    <nav className="bg-white shadow-lg relative z-50">
      {/* Top bar */}
      <div className="bg-gray-800 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <span>Careers</span>
            <span>Contact Us</span>
            <span>Call: 000 12345 / 000 56789</span>
          </div>
          <div className="flex space-x-3">
            <div className="w-5 h-5 bg-blue-600"></div>
            <div className="w-5 h-5 bg-red-600"></div>
            <div className="w-5 h-5 bg-green-600"></div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-red-500">oritto</span>
              <div className="text-xs text-gray-600 -mt-1">
                LED Lights GLOW HIGH
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              About Us
            </a>

            {/* Lighting Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-red-500 transition-colors">
                <span>Lighting Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-xl rounded-lg border border-gray-200 py-2">
                  {lightingSolutions.map((solution, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                    >
                      {solution}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              Quality
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              Offers
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-red-500 transition-colors"
            >
              Support
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
            {/* <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
            <User className="w-5 h-5 text-gray-600 hover:text-red-500 cursor-pointer transition-colors" />
             */}
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 transition-colors"
              >
                About Us
              </a>
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-700 hover:text-red-500 transition-colors"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>Lighting Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    {lightingSolutions.map((solution, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block text-sm text-gray-600 hover:text-red-500 transition-colors"
                      >
                        {solution}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 transition-colors"
              >
                Quality
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 transition-colors"
              >
                Offers
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
