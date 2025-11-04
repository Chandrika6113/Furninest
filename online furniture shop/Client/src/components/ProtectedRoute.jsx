import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ element: Element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated() ? (
    <Element />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
