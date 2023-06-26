import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RecruitersMenue,userMenue } from '../Navbar/NavMenue';
function LeftBar() {
  const Navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.auth);
  const {UserProfile} = useSelector((state)=>state.auth)
  console.log("UserProfile",UserProfile)
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
 
  useEffect(()=>{
    console.log(userInfo)
    userInfo ?null:Navigate('/')
  },[])
  return (
    <>
      {userInfo.is_seeker ? (
        <>
        <div className="card mb-4 mt-4">
          <div className="card-body text-center ">
            <div className='flex justify-center'>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              alt="avatar"
              className="rounded-circle img-fluid w-20 h-20"
            />
            </div>
           
            <h5 className="my-3">Welcome {userInfo.first_name}</h5>
            <p className="text-muted mb-1">{userInfo.email}</p>
            
          </div>
       
        </div>
        {/* <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Profile</li>
          <li className="list-group-item">Find Jobs</li>
          <li className="list-group-item">Applied Jobs</li>
          <li className="list-group-item">Chats</li>
          
        </ul>
      </div> */}

      </>
        
      ) : (
        <>

          <div className="card" >
            <img className="card-img-top" src={UserProfile.profile_picture?`${imageBaseUrl}${UserProfile.profile_picture}`:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"} alt="Company image"/>
            <div className="card-body">
              <h5 className="card-title">{UserProfile.company_name}</h5>
              <p className="text-muted ">{UserProfile.location}</p>
            </div>
          
          
          </div>
        
        </>

      )}
    </>
  );
}

export default LeftBar;
