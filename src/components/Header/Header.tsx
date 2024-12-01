import React, { useState, useEffect } from 'react';
import SigninButton from '../../components/Button/SIgninButton';
import SignoutButton from '../../components/Button/SignoutButton';

const Header: React.FC = () => {
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Check if the user is logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-white z-40">
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800"></h1>
        <nav className="flex items-center space-x-4 space-y-2 sm:space-y-0 flex-wrap">
          <button className="text-sm text-gray-600">Sell</button>
          <button className="text-sm text-gray-600">Take a Tour</button>

          {/* Conditionally render Signin or Signout based on isLoggedIn */}
          {isLoggedIn ? <SignoutButton /> : <SigninButton />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
