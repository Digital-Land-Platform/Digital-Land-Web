import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Authentication/Profile';
import MainLayout from '../layout/MainLayout';
import NotFound from './NotFound';
import HomePage from '../pages/HomePage/Homepage';
import BuyProperty from '../pages/BuyPropertPage/BuyProperty';

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />

      <Route
        path="/profile"
        element={
          <MainLayout>
            <Profile />
          </MainLayout>
        }
      />

      <Route
        path="/buy-property"
        element={
          <MainLayout>
            <BuyProperty />
          </MainLayout>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
