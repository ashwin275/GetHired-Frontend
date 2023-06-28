import './App.css'
import Signup from './components/Signup/Signup'
import Login from './components/login/Login'
import Landingpage from './components/Home/Landingpage'
import AdminHome from './components/Roles/Admin/Dashboard/AdminHome'

import UsersHome from './components/Roles/Users/UsersHome'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route,useLocation } from 'react-router-dom'
import VerifyEmail from './components/EmailVerify/VerifyEmail'
import EmployersHome from './components/Roles/Employers/EmployersHome'
import Dashboard from './components/Roles/Admin/Components/Dashboard'
import Home from './components/Base/Home'
import Posts from './components/Roles/Employers/Posts'
import Add_post from './components/Roles/Employers/Add_post'
import ManagePosts from './components/Roles/Admin/Components/ManagePosts'

import Navlink from './components/Navbar/Navlink'
import AuthRequire from './components/PrivateRout/AuthRequire'
import UnAuth from './components/PrivateRout/UnAuth'
import Footer from './components/Footer/Footer'
import AdminAuth from './components/PrivateRout/AdminAuth'
import AdminUnAuth from './components/PrivateRout/AdminUnAuth'
import PostDetail from './components/Roles/Employers/PostDetail'
import PostEdit from './components/Roles/Employers/PostEdit'

function App() {
  const location = useLocation();
  const isAdminSection = location.pathname.startsWith('/admin/home');
  return (
    <div className='App '>
      <ToastContainer/>
    
      {!isAdminSection && <Navlink />}
      <Routes>
        <Route path='/' element={<Landingpage/>} exact />
         
        {/* Users LOGIN & SIGNUP */}
        <Route path='/users'>

              <Route element={<AuthRequire/>}>
                    <Route  path ='' element={<UsersHome/>}/>
                    <Route  path ='home-view' element={<Home/>}/>
                    
              </Route>

              <Route element={<UnAuth/>}>
                  <Route path='login' element={<Login title='USER' />} />
                  <Route path='signup' element={<Signup title='USER' />} />
              </Route>
 
        </Route>

        {/* Employers LOGIN & SIGNUP */}
        <Route path='/employers'>
        <Route element={<AuthRequire/>}>
                  <Route path ='' element={<EmployersHome/>}/>
                  <Route  path ='home-view/*' element={<Home/>}>
                      <Route path="" element={<Posts />} />
                      <Route path="add-post" element={<Add_post />} />
                      <Route path = 'post-detail/:postId/' element={<PostDetail/>}/>
                      <Route path='edit-post/:postId/' element={<PostEdit/>}/>

                  </Route>
       </Route>
        <Route element={<UnAuth/>}>
              <Route path='login' element={<Login title='EMPLOYERS' />} />
              <Route path='signup' element={<Signup title='EMPLOYERS' />} />
        </Route>
             
        </Route>


        {/* ADMIN LOGIN */}
        <Route path='/admin'>
        <Route element={<AdminUnAuth/>}>
              <Route path='login' element={<Login title='ADMIN' />} />
        </Route>

                <Route element={<AdminAuth/>}>
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
      <Footer/>
    </div>
  );
}

export default App;
