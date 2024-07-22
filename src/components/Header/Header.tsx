import React from "react";
import SigninButton from "../../components/Button/SIgninButton";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full p-4 bg-white z-40">
      <div className="flex flex-wrap justify-between items-center">
        <h1 className="text-lg font-bold text-gray-800"></h1>
        <nav className="flex items-center space-x-4 space-y-2 sm:space-y-0 flex-wrap">
          <button className="text-sm text-gray-600">Sell</button>
          <button className="text-sm text-gray-600">Take a Tour</button>
          <SigninButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
