import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Authentication/Profile';
import MainLayout from '../layout/MainLayout';
import NotFound from './NotFound';
import HomePage from '../pages/HomePage/Homepage';
import PropertyDetailPage from '../pages/Property/singlepropetyPage';

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
        path="property/:id"
        element={
          <MainLayout>
            <PropertyDetailPage />
          </MainLayout>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
