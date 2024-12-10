import React, { ReactNode } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import NotAllowed from './NotAllowed';
import { jwtDecode } from 'jwt-decode';

interface ProtectedRouteProps {
  requiredRole: string;
  children?: ReactNode;
}

interface DecodedToken {
  role: string;
  [key: string]: any; // Add other properties as needed
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const location = useLocation();

  const userToken = localStorage.getItem('access_token');

  if (!userToken) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  let decodedToken: DecodedToken;
  try {
    decodedToken = jwtDecode<DecodedToken>(userToken);
  } catch (error) {
    console.error('Failed to decode token:', error);
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (requiredRole && decodedToken.role.toLowerCase() !== requiredRole.toLowerCase()) {
    return <NotAllowed />;
  }

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
