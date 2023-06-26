import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function AdminAuth() {
    const { AdminInfo } = useSelector((state) => state.auth);
    const location = useLocation();
    // const firstRoute = location.pathname.split('/')[1];
    console.log(AdminInfo,'admin')
    console.log(AdminInfo.admin,'admin')
    if (AdminInfo) {
      // User is authenticated, render the child routes
      return <Outlet />;
    } else {
      // User is not authenticated, redirect to the appropriate route
      
        // Handle other routes if needed
        return <Navigate to="login" />;
    
    }
}

export default AdminAuth
