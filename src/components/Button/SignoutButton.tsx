import React from 'react';
import { FaUserMinus } from 'react-icons/fa';

const SignoutButton: React.FC = () => {
  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    const domain = import.meta.env.VITE_AUTH_DOMAIN; // Example: "your-domain.us.auth0.com"
    const clientId = import.meta.env.VITE_CLIENT_ID; // Your Auth0 Client ID
    const returnTo = import.meta.env.VITE_MAIN_URI || window.location.origin; // Redirect after logout

    window.location.href = `https://${domain}/v2/logout?client_id=${clientId}&returnTo=${encodeURIComponent(returnTo)}`;
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 text-white rounded-[10px] flex items-center gap-2 text-sm shadow-md hover:opacity-90 bg-gray-400"
      >
        {/* Icon Section */}
        <span className="flex items-center justify-center w-6 h-6 rounded-10">
          <FaUserMinus className="text-white w-4 h-4" />
        </span>

        {/* Text Section */}
        <span>Logout</span>
      </button>
    </div>
  );
};

export default SignoutButton;
