import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
  requiredRole?: string;
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  //const location = useLocation();

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
