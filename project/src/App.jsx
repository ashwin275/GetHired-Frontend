import './App.css'
import Signup from './components/Signup/Signup'
import Login from './components/login/Login'
import Home from './components/Home/Home'
import AdminHome from './components/Roles/Admin/Dashboard/AdminHome'

import UsersHome from './components/Roles/Users/UsersHome'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route,useLocation } from 'react-router-dom'
import VerifyEmail from './components/EmailVerify/VerifyEmail'
import EmployersHome from './components/Roles/Employers/EmployersHome'
import Dashboard from './components/Roles/Admin/Components/Dashboard'


import ManagePosts from './components/Roles/Admin/Components/ManagePosts'

import Navlink from './components/Navbar/Navlink'
import AuthRequire from './components/PrivateRout/AuthRequire'
import UnAuth from './components/PrivateRout/UnAuth'

function App() {
  const location = useLocation();
  const isAdminSection = location.pathname.startsWith('/admin/home');
  return (
    <div className='App'>
      <ToastContainer/>
    
      {!isAdminSection && <Navlink />}
      <Routes>
        <Route path='/' element={<Home/>} exact />
         
        {/* Users LOGIN & SIGNUP */}
        <Route path='/users'>
              <Route element={<UnAuth/>}>
                  <Route path='' element={<Login title='USER' />} />
                  <Route path='signup' element={<Signup title='USER' />} />
              </Route>



               <Route element={<AuthRequire/>}>
                    <Route  path ='home' element={<UsersHome/>}/>
                </Route>
        </Route>

        {/* Employers LOGIN & SIGNUP */}
        <Route path='/employers'>
        <Route element={<UnAuth/>}>
              <Route path='' element={<Login title='EMPLOYERS' />} />
              <Route path='signup' element={<Signup title='EMPLOYERS' />} />
        </Route>
              <Route element={<AuthRequire/>}>
                  <Route path ='home' element={<EmployersHome/>}/>
              </Route>
        </Route>


        {/* ADMIN LOGIN */}
        <Route path='/admin'>
        <Route element={<UnAuth/>}>
              <Route path='' element={<Login title='ADMIN' />} />
        </Route>

                <Route element={<AuthRequire/>}>
                    <Route path ='home/*' element={<AdminHome/>}>
                        <Route path='' element={<Dashboard/>}/>
                        <Route path='manage-posts' element ={<ManagePosts/>}/>
                    </Route>
                </Route>
             
        </Route>

        {/* Email verification */}
        <Route path='/verify-email/:token/' element={<VerifyEmail/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
