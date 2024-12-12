import React, { useState } from 'react';
import SigninButton from '../../components/Button/SIgninButton';
import { FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/UseAuth';

const Header: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
  const navigate = useNavigate();

  const toggleProfileMenu = () => {
    setIsProfileMenuVisible(!isProfileMenuVisible);
  };

  const handleProfileOptionClick = (option: 'profile' | 'logout' | 'dashboard') => {
    setIsProfileMenuVisible(false);
    if (option === 'logout') {
      logout();
      navigate('/');
    } else if (option === 'profile') {
      navigate('/profile');
    } else if (option === 'dashboard') {
      navigate('/dashboard');
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-white z-40">
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800"></h1>
        <nav className="flex items-center space-x-4 space-y-2 sm:space-y-0 flex-wrap">
          <button className="text-sm text-gray-600">Sell</button>
          <button className="text-sm text-gray-600">Take a Tour</button>

          {/* Conditionally render Signin or Signout based on isLoggedIn */}
          <div className="flex items-center relative mt-4 md:mt-0">
            {isLoggedIn ? (
              <>
                <figure className="profile-photo cursor-pointer" onClick={toggleProfileMenu}>
                  <span className="w-10 h-10 rounded-full" title="Profile">
                    <FaUser className="w-10 h-10" />
                  </span>
                </figure>
                {isProfileMenuVisible && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                    <ul>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleProfileOptionClick('profile')}
                      >
                        My Account
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleProfileOptionClick('dashboard')}
                      >
                        Dashboard
                      </li>
                      <li
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => handleProfileOptionClick('logout')}
                      >
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <SigninButton />
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
