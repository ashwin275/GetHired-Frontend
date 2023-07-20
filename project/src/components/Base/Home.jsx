import React, { useEffect } from "react";
import LeftBar from "./LeftBar";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Posts from "../Roles/Employers/Posts";
import PostDetail from "../Roles/Employers/PostDetail";
import RightBar from "./RightBar";
import Add_post from "../Roles/Employers/Add_post";
import PostEdit from "../Roles/Employers/PostEdit";
import CompanyProfile from "../Roles/Employers/CompanyProfile";
import ProfileEdit from "../Roles/Employers/ProfileEdit";
import ViewPostPlan from "../Roles/Employers/ViewPostPlan";
import Profile from "../Roles/Users/Profile";
import EditPofile from "../Roles/Users/EditPofile";
import AppliedJobs from "../Roles/Users/AppliedJobs";
function Home() {
  const Navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(userInfo, "inside base ");
    if (userInfo == null) {
      Navigate("/");
    }
  }, []);
 
  return (
    <div className="flex justify-center">
      <div className="w-5/6 ">
        <div className="flex flex-wrap md:flex-nowrap ">
          {/* .......................left for employers.............................. */}
          <div className="w-full md:w-1/6 lg:w-1/6 md:h-96 left mt-4 sticky lg:top-36 left-0 right-0">
            <div className="w-full h-full p-2">
              <LeftBar />
            </div>
          </div>

          {/* .......................mid.............................. */}
          <div className={`w-full md:w-4/6 lg:${userInfo.is_seeker ? 'w-5/6' : 'w-4/6'} h-full flex justify-center items-center my-8 lg:h-full `}>

            <div className="w-full  lg:overflow-y-scroll   lg:max-h-[32rem] lg:no-scrollbar ">
              {userInfo.is_seeker ? (
                <>
                  <Routes>
                    <Route path="/" element={<Profile/>}/>
                    <Route path='profile-edit' element={<EditPofile/>}/>
                    <Route path="my-jobs" element={<AppliedJobs/>}/>
                  </Routes>
                </>
              ) : (
                <>
                  {" "}
                  {/* Recruiters */}
                  <Routes>
                    <Route path="/" element={<Posts />} />
                    <Route
                      path="/post-detail/:postId/"
                      element={<PostDetail />}
                    />
                    <Route path="/add-post" element={<Add_post />} />
                    <Route path="profile" element={<CompanyProfile />} />
                    <Route path="edit-post/:postId/" element={<PostEdit />} />
                    <Route path="profile-edit" element={<ProfileEdit />} />
                    <Route path="post-plan" element={<ViewPostPlan />} />
                  </Routes>
                  {/* ........... */}
                </>
              )}
            </div>
          </div>
          {userInfo.is_seeker ? (
            null
          ) : (
            <>
              {/* .......................right bar for employers.............................. */}
              <div className="w-full md:w-1/6 lg:w-1/6 h-96 right mt-4 sticky lg:top-36 left-0 right-0 lg:mb-32">
                <div className="w-full h-full">
                  <RightBar />
                </div>
              </div>

              {/* ................................................ */}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
