import React, { useState ,useEffect} from 'react';
import axiosinstance from '../Axios/Axios';
import publicInstance from '../Axios/PublicAxios';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Signup.css'

import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { signUpSchema } from '../../Schemas';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const initialValues = {
  firstname:"",
  lastname:"",
  email:"",
  mobile:'',
  password:"",
  confirmpassword:"",

}




const Signup = (props) => {
  const [imagelink , setimageLink] = useState('https://assets-v2.lottiefiles.com/a/6beb774c-1166-11ee-a6f1-4788c8724adf/E9TtaYgKZu.gif')
  const [modalShow, setModalShow] = useState(false);
  const [Useremail,setUseremail] = useState('')
   const navigate = useNavigate()
   useEffect(()=>{
    if(props.title == 'USER'){
      setimageLink('https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif')
    }else if (props.title == 'EMPLOYERS'){
      setimageLink('https://www.qrcrypher.com/frontend/images/Mobile%20login.gif')
    }
  
   },[props.title])
   const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit: async (values, action) => {
      
      // action.resetForm()
    
      const userData = {
        first_name: values.firstname,
        last_name: values.lastname,
        email: values.email,
        mobile: values.mobile,
        password: values.password,
        is_seeker:props.title ==='USER',
        is_employer:props.title ==='EMPLOYERS'
      };

    
      try {
        const response = await publicInstance.post('register/', userData);
       
        setUseremail(response.data.Userinfo.email)
       console.log(response)
      setModalShow(true)

        // toast.success(response.data.message);
        // toast.success(response.data.message_email)
        // if (props.title == 'USER'){
        //   navigate('/users')
        // }else{
        //   navigate('/employers')
        // }
      } catch (error) {
        if (error.response) {
       
          toast.error(error.response.data.email[0]);

        }
      }
    }
    
   })

   const handleRegister=()=>{
    setModalShow(false)
    if (props.title == 'USER'){
        navigate('/users')
      }else{
        navigate('/employers')
      }
   }

   
  
  
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
                      <p className="text-center h1  mb-5 mx-1 mx-md-4 mt-4 textsignup">{props.title} SIGN UP</p>
                       

                   
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}> 

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="name"onChange={handleChange} onBlur={handleBlur} value={values.firstname} name='firstname' id="firstname" className="form-control inputfields" placeholder='Firstname' autoComplete='off'/>
                            { errors.firstname && touched.firstname ?(<p className='form-error'>{errors.firstname}</p>):null}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                      
                          <i className="fa-regular fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="name"onChange={handleChange} onBlur={handleBlur} value={values.lastname} name='lastname' id="lastname" className="form-control forms" placeholder='lastname' autoComplete='off'/>
                            { errors.lastname && touched.lastname? (<p className='form-error'>{errors.lastname}</p>):null}
                           

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email"onChange={handleChange} onBlur={handleBlur} value={values.email} id="email" name="email" className="form-control" placeholder='Email' autoComplete='off'/>
                            { errors.email && touched.email?(<p className='form-error'>{errors.email}</p>):null}

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fa-solid fa-mobile fa-lg me-3 fa-fw"></i>
                         
                          <div className="form-outline flex-fill mb-0">
                            <input type="text"onChange={handleChange} onBlur={handleBlur} value={values.number} name='mobile' id="mobile" className="form-control" placeholder='Mobile' autoComplete='off'/>
                            {errors.mobile&&touched.mobile?(<p className='form-error'>{errors.mobile}</p>):null}

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password"onChange={handleChange} onBlur={handleBlur} value={values.password} name='password' id="password" className="form-control" placeholder='Password' autoComplete='off' />
                            {errors.password&&touched.password?(<p className='form-error'>{errors.password}</p>):null}

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password"onChange={handleChange} onBlur={handleBlur} value={values.confirmpassword} id="confirmpassword" name='confirmpassword' className="form-control" placeholder='Confirm password' autoComplete='off' />
                            {errors.confirmpassword&&touched.confirmpassword?(<p className='form-error'>{errors.confirmpassword}</p>):null}

                          </div>
                        </div>
                     
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-outline-dark bt-lg">Register</button>
                        </div>
                        {
                    props.title !== 'ADMIN' ? (
                      <div className="text-center mt-3 font-serif text-xl">
                        <p className="text-stone-500 underline decoration-dotted hover:decoration-dashed">
                          Already have an account? <Link to={props.title === 'USER' ? '/users' : '/employers'} className="font-medium">SignIn</Link>
                        </p>
                      </div>
                    ) : null
                  }
                      </form>

                     
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src={imagelink} className="img-fluid" alt="Sample image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Modal className='drop-shadow-2xl '
  {...props}
  show={modalShow}
  onHide={() => setModalShow(false)}
  size="lg"
  aria-labelledby="contained-modal-title-vcenter"
  centered
>
  <Modal.Header closeButton className=" text-white text-center ">
    <Modal.Title id="contained-modal-title-vcenter" className='font-serif text-stone-500 '>
      Email Verification Required 
    </Modal.Title>
  </Modal.Header>
  <Modal.Body className="">

    <p className="text-stone-800 font-medium">Email is sent to your account    &nbsp;&nbsp;<i class="fa-solid fa-envelope"></i> {Useremail}</p>
  </Modal.Body>
  <Modal.Footer className="">
    <Button onClick={handleRegister} className="outline-2 outline-blue-500/50  rounded-full bg-gradient-to-r from-indigo-500">Close</Button>
  </Modal.Footer>
</Modal>


    </>
  );
};

export default Signup;
