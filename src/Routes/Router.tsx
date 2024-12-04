import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Authentication/Profile';
import MainLayout from '../layout/MainLayout';
import NotFound from './NotFound';
import HomePage from '../pages/HomePage/Homepage';
import PaymentPage from '../pages/PaymentPage';

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
        path="/payment/:id"
        element={
          <MainLayout>
            <PaymentPage />
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

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
