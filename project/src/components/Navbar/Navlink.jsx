import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png'
import { logout } from '../Features/Slice/authSlice';
import './navlink.css'

import { useDispatch, useSelector } from 'react-redux';
function Navlink() {
 const {userInfo} = useSelector((state)=>state.auth)
 const data = userInfo
 console.log('data',data)
 const dispatch = useDispatch()
 const navigate = useNavigate()


 const logouthandler = () =>{
 
    dispatch(logout());
    if(data.is_seeker){
      navigate('/users')
    }else if(data.is_employer){
      navigate('/employers')
    }else if (data.is_superuser){
      navigate('/admin')
    }
    
}
      
  return (
    <div>

<Navbar expand="lg" className="bg-body-tertiary navbarWrapper border-3 border-transparent border-gray-250 hover:shadow-2xl shadow-md"  fixed="top"  sticky="top">
  <Container>
 <Link to='/'><Navbar.Brand >
            <img
              src={logo}
              width="150"
              height="80"
              className="d-inline-block align-top"
              alt="GET HIRED "
            />
          </Navbar.Brand> </Link> 
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto linkwrapper font-serif  text-xl subpixel-antialiased font-normal tracking-normal space-x-7 text-slate-500 ">

            {
        userInfo ? (
          <><Link to='/users'>{userInfo.first_name}</Link>
          <button onClick={logouthandler}>Logout <i className="fa-solid fa-right-from-bracket"></i></button></>
        ) : (
          <>
            <Link to='/users'>Login</Link>
            <Link to='/employers'>Employers/Login</Link>
          </>
        )
      }

            {/* <Nav.Link href="#home" className='linksnavbar'>Login</Nav.Link>
            <Nav.Link href="#home">EmployersLogin/signup</Nav.Link>
            <Nav.Link href="#home">Logout</Nav.Link> */}
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  
  
    </div>
  )
}

export default Navlink




 {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}