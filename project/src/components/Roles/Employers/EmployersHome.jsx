
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../../Base/Home';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Axios/Axios';
import { setUserProfile ,setPostBalance} from '../../Features/Slice/authSlice';

function EmployersHome() {
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
    if (userInfo.is_employer) {
      axiosInstance
        .get('recruiters/view/')
        .then((response) => {
          dispatch(setUserProfile(response.data));
          dispatch(setPostBalance(response.data.post_balance))
          console.log(response.data, 'Employers000000000000000000000000000000');
          console.log('post balance  employer home:',response.data.post_balance)
          navigate('home-view');
        })
        .catch((error) => {
          console.error(error,'error catches');
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
    // <p>gvhjkm</p>
    // // <Home />
    // navigate('employers')
    console.log('something wrong')
    
  );
}

export default EmployersHome;
