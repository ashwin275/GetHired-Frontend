import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function UnAuth() {
    const locationRoute = ''
    const { userInfo } = useSelector((state) => state.auth);
    const location = useLocation();
    const firstRoute = location.pathname.split('/')[1];


   
    

    console.log(location)
  
    return userInfo ?  <Navigate to={`/${firstRoute}/home`} />: <Outlet /> ;
}

export default UnAuth
