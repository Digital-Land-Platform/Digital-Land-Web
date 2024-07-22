<<<<<<< HEAD
import React, { ReactNode } from "react";
import { Outlet, useLocation } from "react-router-dom";
=======
// import React, { ReactNode } from 'react';
// import { Outlet, useLocation } from 'react-router-dom';
// import NotAllowed from './NotAllowed';
>>>>>>> 8434a49 (ch: CI/CD configurations)

// interface ProtectedRouteProps {
//   requiredRole?: string;
//   children?: ReactNode;
// }

<<<<<<< HEAD
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  requiredRole,
  children,
}) => {
  const location = useLocation();

  return <>{children || <Outlet />}</>;
};
=======
// const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRole, children }) => {
//   // const location = useLocation();

//   if (userRole !== requiredRole) {
//     return <>{NotAllowed || <Outlet />}</>;
//   }
// };
>>>>>>> 8434a49 (ch: CI/CD configurations)

// export default ProtectedRoute;
