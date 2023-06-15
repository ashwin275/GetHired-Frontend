import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosinstance from '../Axios/Axios';
import { toast } from 'react-toastify';
import ClipLoader from "react-spinners/ClipLoader";
import logo from '../../images/emailsucess.gif'
import greentick from '../../images/greentick.jpg'
import './email.css'

function VerifyEmail() {
    const {token} = useParams();
    const [is_verified,setverified] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const verifyEmail = async () => {
          try {
            const response = await axiosinstance.get(`verify-email/${token}/`);
            setverified(true)
            toast.success(response.data.message);
            navigate('/login')
          } catch (error) {
            if (error.response && error.response.status === 404) {
              toast.error('Email verification link is invalid or expired.');
            } else {
              toast.error('An error occurred while verifying email.');
            }
          }
        };
      
        // verifyEmail();
      }, [token]);
      
      return (
        !is_verified ? (
          <div>
            <ClipLoader
              color="#FFBF07"
              size={350}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
            <h1>Verifying your email.....</h1>
          </div>
        ) : (
            <div className="main">
            <div className="textparent">
              <h1 className="verified">Email verified  <i class="fa-sharp fa-solid fa-circle-check fa-beat"></i></h1>
             
             
              <img src={logo} className="img-fluid imgsucess" alt="Success image" />
            </div>
          </div>
          
        )
      );
      
}

export default VerifyEmail
