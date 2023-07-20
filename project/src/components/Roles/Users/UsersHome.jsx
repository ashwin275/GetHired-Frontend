import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Home from '../../Base/Home';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Axios/Axios';
import { setUserProfile } from '../../Features/Slice/authSlice';
import Jobs from './Jobs';

function UsersHome() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  useEffect(() => {
    if (userInfo.is_seeker) {
      axiosInstance
        .get('seeker/view/')
        .then((response) => {
          dispatch(setUserProfile(response.data.data));
          console.log(response.data.data, 'first');
          navigate('jobs');
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      navigate('login');
    }
  }, []);

  return loading ? (
    
    <div className="spinner">
     
      Loading...
    </div>
  ) : (
    
    <Jobs/>
  );
}

export default UsersHome;
