import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token && token !== "undefined" && token !== "null" && token.trim() !== ""; // Check if token is valid and non-empty

  console.log('ProtectedRoute: token:', token); // Log the token value
  console.log('ProtectedRoute: isAuthenticated:', isAuthenticated); // Log the authentication status

  if (!isAuthenticated) {
    return <Navigate to="/access-denied" />;
  }

  return children;
};

export default ProtectedRoute;
