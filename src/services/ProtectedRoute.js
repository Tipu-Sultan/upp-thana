// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
 const isAuthenticated = localStorage.getItem('isAuthenticated');

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;
