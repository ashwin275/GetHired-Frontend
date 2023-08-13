import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { RecruitersMenue, userMenue } from "../Navbar/NavMenue";
function LeftBar() {
  const Navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const { UserProfile } = useSelector((state) => state.auth);
  console.log("UserProfile", UserProfile);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const base_url = import.meta.env.VITE_FILES_BASE_URL
  useEffect(() => {
    console.log(userInfo);
    console.log(UserProfile, "my profileeeee");
    userInfo ? null : Navigate("/");
  }, []);

  const HandleEdit = () => {
    Navigate("profile-edit");
  };

  const HandleProfile = ()=>{
    Navigate("/users/home-view")
  }

  return (
    <>
      {userInfo.is_seeker ? (
        <>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-end px-4 pt-4">
              <button
                className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                type="button"
                onClick={HandleEdit}
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center pb-10" type='button' onClick={HandleProfile}>
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={
                  UserProfile.profile_picture
                    ? `${base_url}${UserProfile.profile_picture}`
                    : "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                }
                alt="User profile"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {userInfo.first_name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {userInfo.email}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="card  drop-shadow-lg  ">
            <Link to={"profile"}>
              <img
                className="card-img-top cursor-pointer"
                src={
                  UserProfile.profile_picture
                    ? `${base_url}${UserProfile.profile_picture}`
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg/1200px-M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"
                }
                alt="Company image"
              />
            </Link>
            <button className="text-right mr-3 mt-2" onClick={HandleEdit}>
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
            <div className="card-body">
              <h5 className="card-title font-serif">
                {UserProfile.company_name}
              </h5>
             {UserProfile.location&& <p className="text-muted ">
                <i className="fa-solid fa-location-dot">&nbsp;&nbsp;</i>
                {UserProfile.location}
              </p>}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default LeftBar;
