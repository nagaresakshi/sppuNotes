import React from "react";
import { FaTimes } from "react-icons/fa";

interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const fields = [
  { id: 1, name: "Engineering" },
  { id: 2, name: "Pharmacy" },
  { id: 3, name: "11th" },
  { id: 4, name: "12th" },
  { id: 5, name: "10th" },
  { id: 6, name: "Fashion" },
  { id: 7, name: "Forensic" },
  { id: 8, name: "BCS" },
  { id: 9, name: "BCA" },
  { id: 10, name: "MBA" },
  { id: 11, name: "LLB" },
];

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out bg-gray-900 text-white w-64 shadow-lg`}
    >
      <div className="p-4 flex justify-between items-center border-b border-gray-700">
        <h2 className="text-xl font-bold">Explore Fields</h2>
        <button onClick={toggleSidebar} className="text-white text-2xl">
          <FaTimes />
        </button>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          {fields.map((field) => (
            <li
              key={field.id}
              className="px-4 py-2 hover:bg-gray-700 transition-colors duration-200 rounded-md"
            >
              <a
                href={`/${field.name.toLowerCase()}`}
                className="block text-white"
              >
                {field.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
