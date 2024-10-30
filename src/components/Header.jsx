import React, { useState } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <header className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-cyan-500 p-6 relative">
        {/* Left Icons (FaBars) */}
        <div className="flex items-center space-x-6">
          <FaBars 
            className="text-white text-2xl cursor-pointer" 
            onClick={toggleDropdown} 
          />
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg py-2 w-48">
              <Link to="/" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-200 rounded-md">
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Home</button>
              </Link>
              <Link to="/srt" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-200 rounded-md">
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">SRT</button>
              </Link>
              <Link to="/login" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-200 rounded-md">
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
              </Link>
              <Link to="/register" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-200 rounded-md">
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Register</button>
              </Link>
              <Link to="/dashboard" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-200 rounded-md">
                <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Dashboard</button>
              </Link>
            </div>
          )}
        </div>

        {/* Middle Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-semibold text-white italic">
          SuperHomess
        </div>

        {/* Right Icons (FaUserCircle) */}
        <div className="flex items-center space-x-6">
          <FaUserCircle className="text-white text-2xl cursor-pointer" />
        </div>
      </header>
    </div>
  );
}
