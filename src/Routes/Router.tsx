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
<<<<<<< HEAD
=======
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/profile"
        element={
>>>>>>> 8434a49 (ch: CI/CD configurations)
          <MainLayout>
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <Profile />
          </MainLayout>
=======
      <Route 
      path="property/:id"
       element={
        <MainLayout>
        <PropertyDetailPage />
        </MainLayout> 
>>>>>>> 4429efe (This reverts commit 0ceb8ae3d82a9e82f0c517cb95e9051a25d99a27, reversing)
        }
      />
>>>>>>> 42163cd (property details)
=======
>>>>>>> 5b38cf7 (property details)
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
