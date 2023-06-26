import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function AuthRequire() {
  const { userInfo } = useSelector((state) => state.auth);

  const location = useLocation();
  const firstRoute = location.pathname.split('/')[1];

  if (userInfo.email) {
    console.log('user is autheticated')
    console.log(firstRoute)
    // User is authenticated, render the child routes
    return <Outlet />;
  } else {
    console.log('user not autheticated')
    // User is not authenticated, redirect to the appropriate route
    if (firstRoute === 'users') {
      console.log('navigate')
      return <Navigate to="/users/login" />;
    } else if (firstRoute === 'employers') {
      return <Navigate to="/employers/login" />;
    } else if (firstRoute === 'admin') {
      return <Navigate to="/admin" />;
    } else {
      // Handle other routes if needed
      return <Navigate to="/" />;
    }
  }
}

export default AuthRequire;
