import React, { useEffect, useState } from 'react';
import { FaHome, FaFilm, FaCompass, FaHandshake, FaBars } from 'react-icons/fa';
import SigninButton from '../../components/Button/SIgninButton';
import { Link } from 'react-router-dom';

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage for token
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    setIsLoggedIn(!!token); // Set isLoggedIn based on token presence
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-50 bg-cover bg-center transition-all duration-300 ${
        isSidebarOpen ? 'w-[336px] h-[1024px]' : 'w-0 overflow-hidden opacity-0'
      }`}
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/drcc4uyxf/image/upload/v1732231784/f68077bc05fdef6eee8712ba1be52583_c3um5k.png')", // Replace with your background image path
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Sidebar Content */}
      {isSidebarOpen && (
        <div className="relative flex flex-col h-full bg-[#F5F6FAD9] p-6">
          {/* Header Section */}
          <div className="flex items-center gap-4 mb-6">
            {/* Toggle Button */}
            <button
              className="text-black hover:text-blue-600"
              onClick={toggleSidebar}
              style={{
                width: '40px',
                height: '40px'
              }}
            >
              <FaBars size={24} />
            </button>
            {/* Logo */}
            <img
              className="w-[48px] h-[48px]"
              src="https://res.cloudinary.com/drcc4uyxf/image/upload/v1732231784/037a9687073fe04f909c8aaa04018d8e_xilpqm.png"
              alt="Global Real Estate Logo"
            />
            {/* Sidebar Title */}
            <h1 className="text-[18px] font-['meriweather'] font-[700] leading-[22.63px] text-black">
              Global Real Estate
            </h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-4">
            <Link
              to="/properties"
              className="flex items-center gap-2 text-[#070f2b] hover:text-blue-600 text-sm font-medium"
            >
              <FaHome className="text-blue-950" />
              Properties
            </Link>
            <Link
              to="/reels"
              className="flex items-center gap-2 text-[#070f2b] hover:text-blue-600 text-sm font-medium"
            >
              <span className="text-blue-950">
                <FaFilm /> {/* Reels Icon */}
              </span>
              Reels
            </Link>
            <Link
              to="/explore"
              className="flex items-center gap-2 text-[#070f2b] hover:text-blue-600 text-sm font-medium"
            >
              <FaCompass className="text-blue-950" />
              Explore
            </Link>
          </nav>

          {/* Sign-In Section */}
          <div className="mt-6">
            {/* Conditionally render Signin or Signout based on isLoggedIn */}
            {isLoggedIn ? (
              <div></div> // Render empty div when logged in, or add Signout logic here
            ) : (
              <>
                <p className="text-sm text-blue-950 font-bold flex items-center gap-2 pb-[20px]">
                  Great to have you here again!
                  <FaHandshake className="text-blue-950" />
                </p>
                <SigninButton />
              </>
            )}
          </div>

          {/* Additional Links (Horizontal Layout) */}
          <div className="mt-auto flex flex-col gap-3 justify-center">
            <ul
              className="grid gap-1 text-sm"
              style={{
                gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' // One row per set of grouped links
              }}
            >
              {/* Row 1 */}
              <li className="w-auto flex space-x-4">
                <a href="#" className="text-black hover:text-gray-800 whitespace-nowrap block text-center">
                  About
                </a>
                <a href="#" className="text-black hover:text-gray-800 whitespace-nowrap block text-center">
                  Reach out
                </a>
                <a href="#" className="text-black hover:text-gray-800 whitespace-nowrap block text-center">
                  FAQ
                </a>
              </li>

              {/* Row 2 */}
              <li className="w-auto flex space-x-4">
                <a href="#" className="text-black hover:text-gray-800 whitespace-nowrap block text-center">
                  Properties
                </a>
                <a href="#" className="text-black hover:text-gray-800 whitespace-nowrap block text-center">
                  Buy
                </a>
                <a href="#" className="text-black hover:text-gray-800 whitespace-nowrap block text-center">
                  Sell
                </a>
              </li>

              {/* Row 3 */}
              <li className="w-auto flex space-x-5">
                <a href="#" className="text-black hover:text-gray-800 whitespace-nowrap block text-center">
                  Privacy Policy
                </a>
                <a href="#" className="text-black hover:text-gray-800 whitespace-nowrap block text-center">
                  Cookie Policy
                </a>
              </li>

              {/* Row 4 */}
              <li className="w-auto flex space-x-8">
                <a href="#" className="text-black hover:text-gray-800 whitespace-nowrap block text-center">
                  Terms of Service
                </a>
                <a href="#" className="text-black hover:text-gray-800 whitespace-nowrap block text-center">
                  Refund Policy
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div className="mt-auto flex gap-12 justify-center">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <img src="/Rectangle 47.svg" alt="Facebook" className="w-15 h-15" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                <img src="/Rectangle 48.svg" alt="Twitter" className="w-15 h-15" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <img src="/Rectangle 49.svg" alt="Instagram" className="w-15 h-15" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-800">
                <img src="/Rectangle 50.svg" alt="LinkedIn" className="w-15 h-15" />
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-black">&copy; 2024 Global Real Estate</div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
