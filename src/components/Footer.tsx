import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
           <img src="src/assets/logo.png" alt="Logo image" className="size-24" />
          </div>
            <p className="text-gray-400 leading-relaxed">
              Illuminate your world with premium LED lighting solutions. Energy
              efficient, long-lasting, and eco-friendly lighting for every need.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Installation Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Warranty Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Technical Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Product Manuals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Blog</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Lighting Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Energy Saving Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Industry News
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Innovation Updates
                </a>
              </li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-red-500" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-400 text-sm">
                  123 LED Street, Tech City, TC 12345
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-red-500" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400 text-sm">
                  +91 000 12345 / +91 000 56789
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-red-500" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400 text-sm">info@oritto.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 oritto LED Lights. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
