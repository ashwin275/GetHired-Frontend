import React from 'react'
import signinimage from '../../images/Signin.gif'
function Login(props) {
  return (
    <div>

<section className="Signup" style={{ backgroundColor: '#fff' }}>
        <div className="container  ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-12 col-xl-11 col-xl-11signup">
              <div className="card card-signup text-black shadow-lg p-3 mb-5 bg-white ">
                <div className="card-body card-bodysignup p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1  mb-5 mx-1 mx-md-4 mt-4 textsignup">{props.title} LOGIN</p>
                      <form className="mx-1 mx-md-4">
                     
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" className="form-control" placeholder='email'/>
                         
                          </div>
                        </div>
                       
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" className="form-control" placeholder='password' />
                          
                          </div>
                        </div>
                       
                     
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-outline-dark bt-lg">Register</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={signinimage} className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Login
