
import React, {useState}from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function AuthRequire() {
  const { userInfo } = useSelector((state) => state.auth);
  const [TrueUser,setTrueUser] = useState(false)
  const location = useLocation();
  const firstRoute = location.pathname.split('/')[1];
  console.log(location)
  console.log('loacton',firstRoute)

// if (userInfo.is_seeker &&  firstRoute === 'users'){
//     setTrueUser(true)
// }else if (userInfo.is_employer &&  firstRoute === 'employers'){
//   setTrueUser(true)
// }else if (userInfo.is_superuser && firstRoute ==='admin'){
//   setTrueUser(true)
// }
console.log('is user is true',TrueUser)

  return userInfo ? <Outlet /> : <Navigate to={`/${firstRoute}`} />;
}

export default AuthRequire;


// const { userInfo } = useSelector((state) => state.auth);
// const [TrueUser,setTrueUser] = useState(false)


// const location = useLocation();
// let firstRoute = location.pathname.split('/')[1];
// console.log(firstRoute)
// if (userInfo.is_seeker &&  firstRoute === 'users'){
//     setTrueUser(true)
// }else if (userInfo.is_employer &&  firstRoute === 'employers'){
//   setTrueUser(true)
// }else if (userInfo.is_superuser && firstRoute ==='admin'){
//   setTrueUser(true)
// }


// if (userInfo.is_seeker ){
//   firstRoute = 'users'
//   }else if (userInfo.is_employer){
//       firstRoute = 'employers'
//   }else if (userInfo.is_superuser){
//       firstRoute = 'admin'
//   }