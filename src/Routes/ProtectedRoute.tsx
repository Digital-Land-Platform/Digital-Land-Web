import React, { ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  requiredRole?: string;
  children?: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  requiredRole,
  children,
}) => {
  const location = useLocation();

  return <>{children || <Outlet />}</>;
};

export default ProtectedRoute;
