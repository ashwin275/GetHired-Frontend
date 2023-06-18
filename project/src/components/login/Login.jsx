import React from "react";
import signinimage from "../../images/Signin.gif";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { SigninScheme } from "../../Schemas";
import { useNavigate } from "react-router-dom";
import axiosinstance from "../Axios/Axios";
import axios from "axios";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setCredentials } from "../Features/Slice/authSlice";

function Login(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  let role = "";
  if (props.title === "USER") {
    role = "is_seeker";
  } else if (props.title === "EMPLOYERS") {
    role = "is_employer";
  } else if (props.title === "ADMIN") {
    role = "is_superuser";
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SigninScheme,
      onSubmit: async (values, action) => {
        const userData = {
          email: values.email,
          password: values.password,
          role: role,
        };

        try {
          const response = await axios.post("http://127.0.0.1:8000/api/login/", userData, {
            withCredentials: true,
          });
          toast.success(`Welcome ${response.data.userInfo.first_name}`);
          const tokenString = JSON.stringify(response.data.token);
           console.log('token',tokenString)
           Cookies.set('Tokens',tokenString)
           const userInfo = response.data.userInfo
           dispatch(setCredentials(userInfo))


          if (response.data.userInfo.is_seeker){
            navigate('/users/home')
          }else if (response.data.userInfo.is_employer){
            navigate('/employers/home')
          }else if (response.data.userInfo.is_superuser){
            navigate('/admin/home')
          }

        
          // localStorage.setItem('Token_Refresh' , json.stringfy(response.data.token))
          // localStorage.setItem('Token_Acess' , response.data.token.access)
          // localStorage.setItem(
          //   `${props.title}.Info`,
          //   JSON.stringify(response.data.userInfo)
          // );
          // const tokenString = String(response.data.token);
          // Cookies.set('name', tokenString);
          // console.log(Cookies.get('name'));

          // sessionStorage.setItem("Token", response.data.token.access);
          // console.log(response.data.token)
          // console.log(response.data.userInfo)

          // console.log(data,'1111111111111111111111111111111111111')
          
        } catch (error) {
          if (error.response) {
            toast.error(error.response.data.detail);
          }
        }
      },
    });

  return (
    <div>
      <section className="Signup" style={{ backgroundColor: "#fff" }}>
        <div className="container  ">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-lg-12 col-xl-11 col-xl-11signup">
              <div className="card card-signup text-black shadow-lg p-3 mb-5 bg-white ">
                <div className="card-body card-bodysignup p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1  mb-5 mx-1 mx-md-4 mt-4 textsignup">
                        {props.title} LOGIN
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              id="email"
                              name="email"
                              className="form-control"
                              placeholder="email"
                              autoComplete="off"
                            />
                            {errors.email && touched.email ? (
                              <p className="form-error">{errors.email}</p>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                              name="password"
                              id="password"
                              className="form-control"
                              placeholder="password"
                              autoComplete="off"
                            />
                            {errors.password && touched.password ? (
                              <p className="form-error">{errors.password}</p>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-outline-dark bt-lg"
                          >
                            SignIn
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={signinimage}
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
