import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../../Base/Home';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Axios/Axios';
import { setUserProfile } from '../../Features/Slice/authSlice';

function UsersHome() {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, set loading state to false
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, []);

  useEffect(() => {
    if (userInfo.is_seeker) {
      axiosInstance
        .get('seeker/view/')
        .then((response) => {
          dispatch(setUserProfile(response.data.data));
          console.log(response.data.data, 'first');
          navigate('home-view');
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
      {/* Add your spinner component or loading indicator here */}
      Loading...
    </div>
  ) : (
    
    <Home />
  );
}

export default UsersHome;
