import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import { logout } from '../Features/Slice/authSlice';
import './navlink.css';
import { RecruitersMenue, userMenue } from './NavMenue';
import { useDispatch, useSelector } from 'react-redux';

function Navlink() {
  const { userInfo } = useSelector((state) => state.auth);
  const data = userInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logouthandler = () => {
    dispatch(logout({ role: 'USER' }));
    if (data.is_seeker) {
      navigate('/users/login');
    } else if (data.is_employer) {
      navigate('/employers/login');
    } else if (data.is_superuser) {
      navigate('/admin');
    }
  };

  return (
    <div className='sticky top-0 z-50'>
      <Navbar
        expand='lg'
        className='bg-body-tertiary navbarWrapper border-3 border-transparent border-gray-250 hover:shadow-xl  shadow-md '
      >
        <Container>
          <Link to='/'>
            <Navbar.Brand>
              <img
                src={logo}
                width='150'
                height='80'
                className='d-inline-block align-top'
                alt='GET HIRED'
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mx-auto linkwrapper  font-serif text-xl subpixel-antialiased font-normal tracking-normal space-x-7 text-slate-500 '>
              {userInfo.first_name ? (
                <>
                  {userInfo.is_seeker ? (
                    userMenue.map((item) => (
                      <Link key={item.id} to={item.link}>
                        {item.title}
                      </Link>
                    ))
                  ) : (
                    RecruitersMenue.map((item) => (
                      <Link key={item.id} to={item.link}>
                        {item.title}
                      </Link>
                    ))
                  )}

                </>
              ) : (
             null
              )}
            </Nav>
               <Nav className=' linkwrapper  font-serif text-xl subpixel-antialiased font-normal tracking-normal space-x-7 text-slate-500 '>

                {
                  userInfo.first_name?( <><button onClick={logouthandler}>
                    Logout <i className='fa-solid fa-right-from-bracket'></i>
                  </button></>):(  <>
                  <Link to='/users/login'>Login</Link>
                  <Link to='/employers/login'>Employers/Login</Link>
                </>)

                }
              
                  
                  </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navlink;
