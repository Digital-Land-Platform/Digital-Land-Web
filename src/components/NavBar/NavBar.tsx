import React from 'react';

const Navbar: React.FC = () => {
  // this is just set up for testing purposes only
  // in a real-world application, we would replace this with our actual navigation logic
  // and style our navigation menu based on our design and requirements
  // for example, we could use a library like "react-navigation" or "react-router-dom" for routing
  // and "tailwind" for styling our navigation menu
  // and also consider implementing authentication and authorization logic to control access to different routes

  return (
    <nav className="bg-gray-800 p-4" data-testid="navbar-component">
      <ul className="flex justify-around list-none m-0 p-0">
        <li className="m-0">
          <a href="/" className="text-white text-lg no-underline hover:underline">
            Home
          </a>
        </li>
        <li className="m-0">
          <a href="/about" className="text-white text-lg no-underline hover:underline">
            About
          </a>
        </li>
        <li className="m-0">
          <a href="/contact" className="text-white text-lg no-underline hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
