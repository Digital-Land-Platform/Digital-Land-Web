
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Authentication/Login';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/LandingPage/Home';
import NotFound from './NotFound';

const Router = () => {


  return (
    <Routes>
      <Route
        path="/"
        element={
              <MainLayout>
                <Home />
              </MainLayout>   
        }
      />

      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
