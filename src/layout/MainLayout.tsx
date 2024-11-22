import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/NavBar/NavBar';

const MainLayout: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
