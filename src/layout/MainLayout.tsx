import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Header from '../components/Header/Header';
import Sidebar from '../components/SideBar/SideBar';

const MainLayout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Manage sidebar state here

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        {/* Main Content */}
        <div
          className={`flex-1 flex flex-col p-6 bg-white overflow-y-auto transition-all duration-300 ${
            isSidebarOpen ? 'ml-[336px]' : 'ml-0'
          }`}
        >
          {/* Toggle Button (always visible) */}
          {!isSidebarOpen && (
            <button
              className="text-black hover:text-blue-600 absolute top-4 left-4 z-50"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars size={24} />
            </button>
          )}

          {/* Header */}
          <Header />

          {/* Main Section */}
          <main className="flex-1 p-6 bg-white">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
