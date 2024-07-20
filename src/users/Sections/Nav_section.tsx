import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";

interface NavSectionProps {
  toggleSidebar: () => void;
}

const NavSection: React.FC<NavSectionProps> = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-6">
          <button onClick={toggleSidebar} className="text-gray-700 text-2xl">
            <FaBars />
          </button>
          <div className="font-bold text-2xl text-gray-800">
            <a href="/" className="hover:text-gray-600">
              SPPU Instant
            </a>
          </div>
        </div>

        {/* Center Section - Links with Dropdowns */}
        <div className="flex items-center space-x-6 text-gray-700">
          <a href="/" className="hover:text-gray-600">
            Home
          </a>

          {[
            "Note's",
            "Pyq",
            "Solved Pyq",
            "Micros",
            "Practical",
            "Notes",
            "About Us",
          ].map((item) => (
            <div key={item} className="relative group">
              <button className="hover:text-gray-600">{item}</button>
              <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md mt-2">
                <a
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {item} - Option 1
                </a>
                <a
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {item} - Option 2
                </a>
                <a
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {item} - Option 3
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Search and Buttons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-700 text-2xl hover:text-gray-600">
            <FaSearch />
          </button>
          <a href="/contact" className="text-gray-700 hover:text-gray-600">
            Contact
          </a>
          <a href="/login" className="text-gray-700 hover:text-gray-600">
            Log in
          </a>
          <a
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavSection;
