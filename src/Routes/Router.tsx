import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Authentication/Profile';
import MainLayout from '../layout/MainLayout';
import NotFound from './NotFound';
import HomePage from '../pages/HomePage/Homepage';
import PaymentPage from '../pages/PaymentPage';
import PropertyDetailsPage from '../pages/Property/singlepropetyPage';
import UserProfile from '../components/Cards/userprofile';

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
        path="/property/:id"
        element={
          <MainLayout>
            <PropertyDetailsPage />
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
        path="/properties"
        element={
          <MainLayout>
            <UserProfile />
          </MainLayout>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
