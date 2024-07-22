import { Route, Routes } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/LandingPage/Home";
import NotFound from "./NotFound";
import HomePage from "../pages/HomePage/Homepage";

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
