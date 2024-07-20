import React, { useState } from 'react';
import Maincontent from '../users/Maincontent';
import NavSection from '../users/Sections/Nav_section';
import SideBar from '../users/Sections/SideBar';

export default function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative min-h-screen bg-gray-100">
      <NavSection toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`${isSidebarOpen ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}>
        <Maincontent />
      </div>
    </div>
  );
}
