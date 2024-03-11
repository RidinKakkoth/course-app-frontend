// ProtectedRoute.js
import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ isAuthenticated }) => {

  return (
    <>
    {isAuthenticated?<Outlet/>:<Navigate to='/login' />}
    </>
  );
};

export default ProtectedRoute;
