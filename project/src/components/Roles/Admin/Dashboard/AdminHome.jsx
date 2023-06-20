import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import './admin.css';
import axiosInstance from '../../../Axios/Axios';
import Dashboard from '../Components/Dashboard';
import { logout } from '../../../Features/Slice/authSlice';

import ManagePosts from '../Components/ManagePosts';
import SortingTable from '../Components/SortingTable';
import { useDispatch } from 'react-redux';
// import { toast } from 'react-toastify';

function AdminHome() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('admin/admin-view/');
        console.log(response,'admin view api test');
      } catch (error) {
        console.log(error, 'admin view api test');
        // toast.error('you have no permission to acces this page')
        // navigate('/')
      }
    };

    fetchData();
  }, []);
  const Menus = [
    { title: 'Dashboard', link: '', src: 'Chart_fill' },
    { title: 'Users', link: 'users-manage', src: 'fa-solid fa-user fa-fade iconsStyle', gap: true },
    { title: 'Employers', link: 'employers-manage', src: '< fa-sharp fa-solid fa-people-roof fa-fade iconStyle' },
    { title: 'Manage Posts', link: 'manage-posts', src: 'fa-sharp fa-regular fa-address-card fa-fade iconStyle' },
  
  ];

  const logouthandler = async() =>{
    try{
       
      dispatch(logout());
      navigate('/admin')


    }catch (error){

    }
  }


  return (
    <div className="flex">
      <div className={`bg-dark-purple h-screen p-5 pt-8 relative duration-300  ${open ? 'w-72' : 'w-20'}`}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxo-m-OdZwadXRzU5_HHifomzwx-Cff5BNFZV7BFmyJTnSAUa16RgEKcdFpV5y15ULU8&usqp=CAU"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
          alt="open"
        />
        <div className="flex gap-x-4 items-center">
          <img src={logo} className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`} alt="close" />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link to={`/admin/home/${Menu.link}`} key={index}>
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
                  Menu.gap ? 'mt-9' : 'mt-2'
                } ${index === 0 && 'bg-light-white'}`}
              >
                <i className={Menu.src}></i>
                <span className={`${!open && 'hidden'} origin-left duration-200 textstyle`}>{Menu.title}</span>
              </li>
            </Link>
          
          ))}
        
   <button className='mt-4' onClick={logouthandler}>
        <li className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 `}>
                <i className="fa-solid fa-right-from-bracket text-red-500"></i>
                <span className={`${!open && 'hidden'} origin-left duration-200 textstyle`}>Logout</span>
        </li></button>
        </ul>
      </div>
      <div className="flex flex-col flex-grow bg-black-100 bg-opacity-95">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users-manage" element={<SortingTable  title='Users'/>} />
          <Route path="/employers-manage" element={<SortingTable title='Employers'/>} />
          <Route path="/manage-posts" element={<ManagePosts />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminHome;
