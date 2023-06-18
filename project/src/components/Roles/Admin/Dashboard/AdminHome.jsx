import React from 'react'
import { useState } from 'react';
// import '../../../../index.css'
import Dashboard from '../Components/Dashboard';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import './admin.css'
import Users from '../Components/Users';
import Employers from '../Components/Employers';
import ManagePosts from '../Components/ManagePosts';
function AdminHome() {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill" },
    
    { title: "Users", link:'/admin/home/users-manage' ,src: "fa-solid fa-user  fa-fade iconsStyle", gap: true },
    { title: "Employers", link:'/admin/home/employers-manage', src: "< fa-sharp fa-solid fa-people-roof fa-fade iconStyle" },
    { title: "Manage Posts",link:'/admin/home/manage-posts', src: "fa-sharp fa-regular fa-address-card fa-fade iconStyle" },
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxo-m-OdZwadXRzU5_HHifomzwx-Cff5BNFZV7BFmyJTnSAUa16RgEKcdFpV5y15ULU8&usqp=CAU"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)} alt='open'
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo} 
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}  alt='close'
          />
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Get-Hired
          </h1> */}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
           <Link to={Menu.link}><li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
           <i className={Menu.src}></i>
              <span className={`${!open && "hidden"} origin-left duration-200 textstyle`}>
                {Menu.title}
              </span>
            </li></Link> 
          ))}
        </ul>
      </div>
      <div className="">
       {/* <Dashboard/>
       <Users/>
       <Employers/>
       <ManagePosts/> */}
      </div>
    </div>
  )
}

export default AdminHome
