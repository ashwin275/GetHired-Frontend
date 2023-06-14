import React, { useState } from 'react';
import axiosinstance from '../Axios/Axios';
import './Signup.css'
import signupimage from '../../images/signup.gif'

import { useFormik } from 'formik';
const Signup = (props) => {
 

   useFormik({
    initialValues:initialValues,
    onSubmit:(values)=>{
      console.log(values)
    }
   })
  
  return (
    <>
      <section className="Signup " style={{ backgroundColor: '#fff' }}>
        <div className="container  ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-12 col-xl-11 col-xl-11signup">
              <div className="card card-signup text-black shadow-lg p-3 mb-5 bg-white ">
                <div className="card-body card-bodysignup p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1  mb-5 mx-1 mx-md-4 mt-4 textsignup">{props.title} Sign up</p>
                      

                   

                      <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="name" name='firstname' id="firstname" className="form-control inputfields" placeholder='firstname' autoComplete='off'/>
                           
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                      
                          <i class="fa-regular fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="name" name='lastname' id="lastname" className="form-control" placeholder='lastname' autoComplete='off'/>
                           
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="email" name="email" className="form-control" placeholder='email' autoComplete='off'/>
                         
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                        <i class="fa-solid fa-mobile fa-lg me-3 fa-fw"></i>
                         
                          <div className="form-outline flex-fill mb-0">
                            <input type="number" name='number' id="number" className="form-control" placeholder='Mobile' autoComplete='off'/>
                         
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name='password' id="password" className="form-control" placeholder='password' autoComplete='off' />
                          
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="confirmpassword" name='confirmpassword' className="form-control" placeholder='Repeat password' autoComplete='off' />
                           
                          </div>
                        </div>
                     
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-outline-dark bt-lg">Register</button>
                        </div>
                      </form>

                     
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={signupimage} className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
