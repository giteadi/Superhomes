import React, { useState } from 'react';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/AuthSlice'; 

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  
  const { user, isAuthenticated } = useSelector((state) => state.auth); // Select user and authentication status

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser()); // Call logout action
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
              {!isAuthenticated ? (
                <>
                  <Link to="/login" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-200 rounded-md">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Login</button>
                  </Link>
                  <Link to="/register" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-200 rounded-md">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Register</button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard" className="block px-4 py-2 text-center text-gray-700 hover:bg-gray-200 rounded-md">
                    <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Dashboard</button>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-200 rounded-md"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Middle Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-4xl font-semibold text-white italic">
          SuperHomess
        </div>

        {/* Right Icons (FaUserCircle) */}
        <div className="flex items-center space-x-6">
          {isAuthenticated && user && (
            <p className="text-white">{`Welcome, ${user.name}!`}</p>
          )}
          <FaUserCircle className="text-white text-2xl cursor-pointer" />
        </div>
      </header>
    </div>
  );
}
