import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecentLaunch from './components/RecentLaunch';
import DealOfTheDay from './components/DealOfTheDay';
import LightingSolutions from './components/LightingSolutions';
import ProductCategories from './components/ProductCategories';
import CustomerTestimonials from './components/CustomerTestimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <RecentLaunch />
      <DealOfTheDay />
      <LightingSolutions />
      <ProductCategories />
      <CustomerTestimonials />
      <Footer />
    </div>
  );
}

export default App;