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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
          <a
            href="/"
            className="text-white text-lg no-underline hover:underline"
          >
<<<<<<< HEAD
=======
          <a href="/" className="text-white text-lg no-underline hover:underline">
>>>>>>> 8434a49 (ch: CI/CD configurations)
=======
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
            Home
          </a>
        </li>
        <li className="m-0">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
          <a
            href="/about"
            className="text-white text-lg no-underline hover:underline"
          >
<<<<<<< HEAD
=======
          <a href="/about" className="text-white text-lg no-underline hover:underline">
>>>>>>> 8434a49 (ch: CI/CD configurations)
=======
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
            About
          </a>
        </li>
        <li className="m-0">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
          <a
            href="/contact"
            className="text-white text-lg no-underline hover:underline"
          >
<<<<<<< HEAD
=======
          <a href="/contact" className="text-white text-lg no-underline hover:underline">
>>>>>>> 8434a49 (ch: CI/CD configurations)
=======
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
