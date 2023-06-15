import './App.css'
import Signup from './components/Signup/Signup'
import Login from './components/login/login'
import Home from './components/Home/Home'
import PageNotFound from './components/PageNotFound/PageNotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom'
import VerifyEmail from './components/EmailVerify/VerifyEmail'

function App() {
  return (
    <div className='App'>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>} />



        {/* Users LOGIN & SIGNUP */}
        <Route path='/login' element={<Login title='USER' />} />
        <Route path='/signup' element={<Signup title='USER' />} />



        {/* Employers LOGIN & SIGNUP */}
        <Route path='/employers'>
          <Route path='' element={<Login title='EMPLOYERS' />} />
          <Route path='signup' element={<Signup title='EMPLOYERS' />} />
        </Route>



        {/* ADMIN LOGIN */}
        <Route path='/admin'>
          <Route path='' element={<Login title='ADMIN' />} />
        </Route>

        {/* Email verification */}
      <Route path='/verify-email/:token/' element={<VerifyEmail/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
