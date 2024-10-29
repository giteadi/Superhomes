import React from 'react';
import { FaSearch, FaUser, FaBars, FaStar, FaHome } from 'react-icons/fa'; // Added FaHome
import { MdHotel, MdMeetingRoom, MdPool, MdOutlineSurfing, MdBeachAccess } from 'react-icons/md';

const SRT = () => {
  const properties = [
    { location: 'Jabalpur, India', rating: 4.6, distance: '530 km' },
    { location: 'Agra, India', rating: 4.3, distance: '240 km' },
    { location: 'Goa, India', rating: 4.6, distance: '1340 km' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-blue-700 p-4 flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">SHORT TERM RENTALS</h1>
        <div className="flex items-center space-x-4">
          <nav className="text-white space-x-6 hidden md:flex">
            <a href="#" className="hover:underline">PROPERTIES</a>
            <a href="#" className="hover:underline">EXPERIENCES</a>
          </nav>
          <FaBars className="text-white text-xl md:hidden" />
          <FaUser className="text-white text-xl" />
          <FaHome className="text-white text-xl" /> {/* New Icon Added */}
        </div>
      </header>

      {/* Search Bar Section */}
      <div className="flex flex-col items-center mt-6 px-4">
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <input type="text" placeholder="Where? Search Destination" className="border border-gray-300 p-2 rounded-md w-40 text-center" />
          <input type="date" placeholder="Check In" className="border border-gray-300 p-2 rounded-md w-40 text-center" />
          <input type="date" placeholder="Check Out" className="border border-gray-300 p-2 rounded-md w-40 text-center" />
          <input type="number" placeholder="Guests" className="border border-gray-300 p-2 rounded-md w-40 text-center" />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
            <FaSearch />
            <span className="ml-2">Search Properties</span>
          </button>
        </div>

        {/* Amenities Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <button className="flex flex-col items-center text-gray-600">
            <MdHotel className="text-2xl" />
            <span className="text-xs">Apartments</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <MdMeetingRoom className="text-2xl" />
            <span className="text-xs">Meeting Halls</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <MdHotel className="text-2xl" />
            <span className="text-xs">Rooms</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <MdPool className="text-2xl" />
            <span className="text-xs">Private Pools</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <MdOutlineSurfing className="text-2xl" />
            <span className="text-xs">Surfing</span>
          </button>
          <button className="flex flex-col items-center text-gray-600">
            <MdBeachAccess className="text-2xl" />
            <span className="text-xs">Private Islands</span>
          </button>
        </div>
      </div>

      {/* Featured Properties */}
      <section className="px-10 mt-10">
        <h2 className="text-xl font-bold mb-4">FEATURED PROPERTIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md flex flex-col">
              <div className="h-32 bg-gray-300 rounded-lg mb-4"></div>
              <p>{property.location}</p>
              <p className="text-sm text-gray-600">{property.distance} from your location</p>
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <span className="ml-1">{property.rating}</span>
              </div>
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md">
                BOOK NOW
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-blue-600 text-white py-6 text-center mt-10">
        <p>Use Code "FIRST05!" to get an additional 20% off on your first 5 bookings!</p>
        <button className="mt-2 bg-white text-blue-600 px-4 py-2 rounded-md">
          FIRST05!
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-700 p-6 text-white text-center mt-10">
        <p>©2023 SuperbHomes. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-sm underline">Contact Us</a> | 
          <a href="#" className="text-sm underline"> Privacy Policy</a> | 
          <a href="#" className="text-sm underline"> Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default SRT;
