import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function AdminUnAuth() {
    const locationRoute = ''
    const { AdminInfo } = useSelector((state) => state.auth);
    const location = useLocation();
    const firstRoute = location.pathname.split('/')[1];


   
    console.log('called for admin un auth')
    console.log(AdminInfo)

    console.log(location)
  
    return AdminInfo.email ?  <Navigate to={`/admin/home`} />: <Outlet /> ;
}

export default AdminUnAuth
