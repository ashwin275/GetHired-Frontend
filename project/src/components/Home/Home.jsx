// import React, { useEffect, useLayoutEffect } from "react";
// import Cookies from "js-cookie";
// import { useSelector } from "react-redux";
// import "./Home.css";
// import { useNavigate } from "react-router-dom";
// import Login from "../login/login";
// import UsersHome from "../Roles/Users/UsersHome";
// import EmployersHome from "../Roles/Employers/EmployersHome";
// // import AdminHome from "../Roles/Admin/AdminHome";

// function Home() {
//   // console.log(userInfo, 'userInfo');
//   // console.log(userInfo.userInfo.email, 'email');
//   // console.log(userInfo.userInfo.is_seeker, 'seeker');

//   // const tokenString = Cookies.get('Tokens');
//   // const token = JSON.parse(tokenString);
//   // console.log('refresh',token.refresh)
//   // console.log('access',token.access)
//   const data = () => {
//     const { userInfo } = useSelector((state) => state.auth);
//     if (userInfo.userInfo.is_seeker) {
//       ReturnComponent = UsersHome;
//     } else if (userInfo.userInfo.is_employer) {
//       ReturnComponent = EmployersHome;
//     } else if (userInfo.userInfo.is_superuser) {
//       ReturnComponent = AdminHome;
//     }
//   };
//   let ReturnComponent = Login;
//   useEffect(() => {
//     data();
//   });

//   return <ReturnComponent />;
// }

// export default Home;


import React from 'react'

function Home() {
  return (
    <div>
      <p>landing page</p>
      
    </div>
  )
}

export default Home
