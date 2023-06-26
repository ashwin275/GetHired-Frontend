import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function UnAuth() {
  const locationRoute = '';
  const { userInfo } = useSelector((state) => state.auth);
  const location = useLocation();
  const firstRoute = location.pathname.split('/')[1];

  console.log(location);
  console.log(userInfo, 'unauth');

  if (userInfo.email) {
    if (userInfo.is_seeker) {
      return <Navigate to="/users" />;
    } else if (userInfo.is_employer) {
      return <Navigate to="/employers" />;
    } else if (userInfo.is_superuser) {
      return <Navigate to="/admin" />;
    }
  } else {
    return <Outlet /> ;
  }
}

export default UnAuth;
