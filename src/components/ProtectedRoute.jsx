import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole, currentRole }) => {
  if (currentRole !== allowedRole) {
    return <Navigate to="/not-authorized" replace />;
  }
  return children;
};

export default ProtectedRoute;
