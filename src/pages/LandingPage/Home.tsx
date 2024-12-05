import React from 'react';
import Logout from '../Authentication/Logout';
import Profile from '../Authentication/Profile';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-10 font-medium">Home Page</h1>
      <Profile />
      <Logout />
    </div>
  );
};

export default Home;
