import React from 'react';
import Login from '../Authentication/Login';
import Logout from '../Authentication/Logout';
import Profile from '../Authentication/Profile';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 id="home" className="m-10 font-medium">
        Home Page
      </h1>
      <Profile />
      <Login />
      <Logout />
    </div>
  );
};

export default Home;
