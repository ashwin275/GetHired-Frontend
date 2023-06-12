import React, { useState } from 'react';
import { MenueData } from './Menue';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

import "./Navbar.css";

function Navbar() {
  const [toggle, setToggle] = useState(false); 
  const handleClick =()=>{
    setToggle(!toggle)
  }
  
  return (
    <>
    <div className='NavbarContainer'> 

   
      <nav className='NavbarItems'>
        <div className='imagediv'>
          <img src={logo} className='Logo' alt="Logo" /> 
        </div>
        <div className='menu-icons' onClick={handleClick}>
          <i className={toggle ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={toggle?"navItems active":"navItems"}>
          {MenueData.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className={item.cName}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
