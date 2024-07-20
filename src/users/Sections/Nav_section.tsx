import React from "react";
import { FaBars, FaSearch, FaUserCircle } from "react-icons/fa";

interface NavSectionProps {
  toggleSidebar: () => void;
}

const NavSection: React.FC<NavSectionProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Logo and Links */}
        <div className="flex items-center space-x-6">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            <FaBars />
          </button>
          <div className="text-white font-bold text-2xl">
            <a href="/" className="hover:text-gray-300">
              Logo
            </a>
          </div>
          <a href="/" className="text-white text-lg hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="text-white text-lg hover:text-gray-300">
            About Us
          </a>
        </div>

        {/* Center Section - Search Bar */}
        <div className="flex items-center w-1/3 bg-white rounded-md shadow-inner">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-500 rounded-r-md text-white hover:bg-blue-700">
            <FaSearch />
          </button>
        </div>

        {/* Right Section - Profile Icon */}
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <FaUserCircle className="text-white text-3xl cursor-pointer hover:text-gray-300" />
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Profile
              </a>
              <a
                href="/settings"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Settings
              </a>
              <a
                href="/logout"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
