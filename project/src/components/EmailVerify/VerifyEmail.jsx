import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosinstance from '../Axios/Axios';
import publicInstance from '../Axios/PublicAxios';
import { toast } from 'react-toastify';
import ClipLoader from 'react-spinners/ClipLoader';
import logo from '../../images/emailsucess.gif';
import axios from 'axios';

import './email.css';

function VerifyEmail() {
  const { token } = useParams();
  const [isVerified, setVerified] = useState(false);
  const [is_seeker,set_is_seeker] = useState(false)
  const [countdown, setCountdown] = useState(9);
  const[FourNOtFour,set404] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    const verifyEmail = async () => {
      setTimeout(async () => {
        try {
          const response = await publicInstance.get(`verify-email/${token}/`);
          setVerified(true);
          console.log(response.data.is_seeker)
          set_is_seeker(response.data.is_seeker); 
          // toast.success(response.data.message);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            setTimeout(() => {
              set404(true); 
            }, 5000);
            toast.error('Email verification link is invalid or expired.');
            toast.error('Please register your account');
          }
          // } else {
          //   toast.error('An error occurred while verifying email.');
          // }
        }
      }, 5000);
    };
  
    verifyEmail();
  }, [token]);
  
  
  useEffect(() => {
    let timeoutId;
    if (isVerified) {
      if (isVerified && is_seeker) {
        setTimeout(() => {
          window.location.href = 'http://localhost:5173/users'; 
        }, 10000);
      } else {
        setTimeout(() => {
          window.location.href = 'http://localhost:5173/employers'; 
        }, 10000);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [isVerified, navigate]);

  useEffect(() => {
    let countdownId;
    if (isVerified && countdown > 0) {
      countdownId = setTimeout(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    return () => clearTimeout(countdownId);
  }, [isVerified, countdown]);

  return !isVerified ? (
    <div className=' mt-8 mb-8 p-5'>
      
    {!FourNOtFour ? (
      <>
        <ClipLoader color="#FFBF07" size={300} aria-label="Loading Spinner" data-testid="loader" />
        <h1 className="emailverify text-4xl mb-8">Verifying your email.....</h1>
      </>
    ) : window.location.href = 'http://localhost:5173/users/signup'  }
  </div>
    
  ) : (
    <div className="main">
      <div className="textparent">
        <h1 className="verified text-3xl">
          Email verified <i className="fa-sharp fa-solid fa-circle-check fa-beat"></i>
        </h1>
        <img src={logo} className="img-fluid imgsucess" alt="Success image" />
        <h4 className="redirect-message text-xl">
          You will be automatically redirected to the login page in <span className='counterdisplay '> 00:0 {countdown} </span>seconds.
        </h4>
      </div>
    </div>
  );
}

export default VerifyEmail;
