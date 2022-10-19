import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ allowedRoles, Route, user }) => {
  const location = useLocation();

  return user?.roles?.find(role => allowedRoles?.includes(role)) ? (
    <Route />
  ) : user ? (
    <Navigate to="/401" state={{ from: location }} replace />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

const ShouldBeUnsigned = ({ Route, user }) => {
  return !user ? <Route /> : <Navigate to="/home" />;
};

export { RequireAuth, ShouldBeUnsigned };
