import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Login from '../Authentication/Login';
>>>>>>> 8434a49 (ch: CI/CD configurations)
=======
>>>>>>> 42163cd (property details)
=======
>>>>>>> e03a375 (implementation of  login, logout, signup)
import Logout from '../Authentication/Logout';
import Profile from '../Authentication/Profile';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 id="home" className="m-10 font-medium">
        Home Page
      </h1>
      <Profile />
      <Logout />
    </div>
  );
};

export default Home;
