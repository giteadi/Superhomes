import React from 'react';
import { FaHome, FaBuilding, FaTools } from 'react-icons/fa'; // Import icons
import Header from './Header';
import Card from './Card';
import FAQ from './FAQ'; // Import your FAQ component
import Footer from './Footer';

const HomePage = () => {
  const properties = [
    { location: 'Jabalpur, India', rating: 4.8 },
    { location: 'Agra, India', rating: 4.3 },
    { location: 'Goa, India', rating: 4.6 },
  ];

  const tabs = [
    { label: 'Holiday Homes', icon: <FaHome /> },
    { label: 'Office Spaces', icon: <FaBuilding /> },
    { label: 'Renovations & Construction', icon: <FaTools /> },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <Header />

      {/* Subheading */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-center py-4">
        <p className="text-white italic text-sm">
          "Where Elegance Meets Comfort"
        </p>
      </div>

      {/* Navigation Tabs with Icons */}
      <div className="flex justify-center mt-6 space-x-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className="bg-gray-100 px-4 py-3 rounded-full shadow-md border border-gray-300 hover:shadow-lg transition flex items-center space-x-2"
          >
            {/* Icon with consistent and dynamic size */}
            <span
              className="text-[clamp(1.2rem, 2.5vw, 2rem)]" // Scales dynamically
            >
              {tab.icon}
            </span>
            <span className="text-sm md:text-base font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Property Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-10">
        {properties.map((item, index) => (
          <Card key={index} location={item.location} rating={item.rating} />
        ))}
      </div>

      {/* Testimonials Section */}
      <section className="mt-16 px-10 text-center">
        <h2 className="text-4xl font-bold text-black">
          <span className="italic text-yellow-500">Our</span> TESTIMONIALS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-200 h-20 rounded-lg flex items-center justify-center"
            >
              <p className="text-center text-sm">Customer {index + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />
     

      {/* Footer Section */}
         <Footer/>
    </div>
  );
};

export default HomePage;
