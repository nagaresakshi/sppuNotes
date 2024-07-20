// Maincontent.tsx
import React from 'react';
import Content from './Sections/content';
import Sidebar from './Sections/SideBar';
import StreamSelection from './Sections/StreamSelection';

export default function Maincontent() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-6">
        <StreamSelection />
        <Content />
      </div>
    </div>
  );
}
