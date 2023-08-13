import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { logout } from "../Features/Slice/authSlice";
import "./navlink.css";
import { RecruitersMenue, userMenue } from "./NavMenue";
import { useDispatch, useSelector } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navlink() {
  const { userInfo } = useSelector((state) => state.auth);
  console.log("navbar", userInfo);
  const data = userInfo;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(RecruitersMenue, userMenue);
  const logouthandler = () => {
    dispatch(logout({ role: "USER" }));
    if (data.is_seeker) {
      navigate("/users/login");
    } else if (data.is_employer) {
      navigate("/employers/login");
    } else if (data.is_superuser) {
      navigate("/admin");
    }
  };
  const handleuserProfile=()=>{
    navigate('users/home-view')
  }
  return (
    <div className=" ">
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbarWrapper border-3 border-transparent border-gray-250 hover:shadow-lg  shadow-md    "
      >
        <Container className="flex text-start">
          <Link to="/">
            <Navbar.Brand>
              <img
                src={logo}
                width="150"
                height="80"
                className="d-inline-block align-top md:mx-10"
                alt="GET HIRED"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav  ">
            <Nav className=" linkwrapper flex justify-between    md:mx-60  font-serif text-lg subpixel-antialiased font-normal tracking-normal  text-slate-600 w-2/5">
              {userInfo.first_name ? (
                <>
                  {userInfo.is_seeker
                    ? userMenue.map((item) => (
                        <Link key={item.id} to={item.link} className=" ">
                          {item.title}
                        </Link>
                      ))
                    : RecruitersMenue.map((item) => (
                        <Link key={item.id} to={item.link} className="">
                          {item.title}
                        </Link>
                      ))}
                </>
              ) : null}
            </Nav>

            <Nav className="capitalize  linkwrapper md:ms-24 font-serif text-lg  subpixel-antialiased font-normal tracking-normal text-slate-500  ">
              {userInfo.first_name ? (
                <>
                  {" "}
                  <NavDropdown
                    title={userInfo.first_name}
                    id="basic-nav-dropdown"
                    className=" "
                  >
                    {userInfo.is_seeker && (
                      <NavDropdown.Item><button onClick={handleuserProfile}>Profile</button></NavDropdown.Item>
                    )}

                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <button onClick={logouthandler}>
                        Logout{" "}
                        <i className="fa-solid fa-right-from-bracket"></i>
                      </button>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Link to="/users/login" className="me-10">
                    Login
                  </Link>
                  <Link to="/employers/login" className="me-10">Employers/Login</Link>
                  <Link to="/admin/login">Admin</Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navlink;
