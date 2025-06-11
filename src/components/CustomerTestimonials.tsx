import React from 'react';
import { Star, Quote } from 'lucide-react';

const CustomerTestimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Homeowner',
      rating: 5,
      comment: 'Outstanding LED lights with excellent brightness and durability. The customer service team was very helpful throughout the installation process.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner',
      rating: 5,
      comment: 'Oriito LED lights transformed our office space completely. Energy efficient and cost-effective solution that exceeded our expectations.',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    },
    {
      name: 'Amit Patel',
      role: 'Contractor',
      rating: 5,
      comment: 'Professional quality products with reliable performance. I recommend Oriito to all my clients for their lighting needs.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Customers ♥ Oriito</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our satisfied customers have to say about their experience with Oriito LED lighting solutions
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 relative hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-red-500 rounded-full p-3">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Customer info */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Get Exclusive Promotions</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new products, special offers, and lighting tips
          </p>
          
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;