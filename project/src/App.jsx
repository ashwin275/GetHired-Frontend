import './App.css'
import Signup from './components/Signup/Signup'
import Login from './components/login/login'
import Home from './components/Home/Home'
import AdminHome from './components/Roles/Admin/Dashboard/AdminHome'
// import AdminHome from './components/Admin/AdminHome'
import UsersHome from './components/Roles/Users/UsersHome'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'
import VerifyEmail from './components/EmailVerify/VerifyEmail'
import EmployersHome from './components/Roles/Employers/EmployersHome'
// import Dashboard from './components/Roles/Admin/Components/Dashboard'
// import Users from './components/Roles/Admin/Components/Users'
// import Employers from './components/Roles/Admin/Components/Employers'
// import ManagePosts from './components/Roles/Admin/Components/ManagePosts'

function App() {
  return (
    <div className='App'>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} exact />
         
        {/* Users LOGIN & SIGNUP */}
        <Route path='/users'>
            <Route path='' element={<Login title='USER' />} />
            <Route path='signup' element={<Signup title='USER' />} />
            <Route  path ='home' element={<UsersHome/>}/>
        </Route>

        {/* Employers LOGIN & SIGNUP */}
        <Route path='/employers'>
          <Route path='' element={<Login title='EMPLOYERS' />} />
          <Route path='signup' element={<Signup title='EMPLOYERS' />} />
          <Route path ='home' element={<EmployersHome/>}/>
        </Route>


        {/* ADMIN LOGIN */}
        <Route path='/admin'>
              <Route path='' element={<Login title='ADMIN' />} />
              <Route path ='home' element={<AdminHome/>}>
                  {/* <Route path='' element={<Dashboard/>}/>
                  <Route path='users-manage'  element={<Users/>}/>
                  <Route path='employers-manage' element ={<Employers/>}/>
                  <Route path='manage-posts' element ={<ManagePosts/>}/> */}
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
