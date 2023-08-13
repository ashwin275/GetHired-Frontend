import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/login/Login";
import Landingpage from "./components/Home/Landingpage";
import AdminHome from "./components/Roles/Admin/Dashboard/AdminHome";

import UsersHome from "./components/Roles/Users/UsersHome";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useLocation } from "react-router-dom";
import VerifyEmail from "./components/EmailVerify/VerifyEmail";
import EmployersHome from "./components/Roles/Employers/EmployersHome";

import Dashboard from "./components/Roles/Admin/Components/Dashboard";
import Home from "./components/Base/Home";
import Posts from "./components/Roles/Employers/Posts";

import AddPost from "./components/Roles/Employers/AddPost";
import ManagePosts from "./components/Roles/Admin/Components/ManagePosts";

import Navlink from "./components/Navbar/Navlink";
import AuthRequire from "./components/PrivateRout/AuthRequire";
import UnAuth from "./components/PrivateRout/UnAuth";
import Footer from "./components/Footer/Footer";
import AdminAuth from "./components/PrivateRout/AdminAuth";
import AdminUnAuth from "./components/PrivateRout/AdminUnAuth";
import PostDetail from "./components/Roles/Employers/PostDetail";
import PostEdit from "./components/Roles/Employers/PostEdit";
import CompanyProfile from "./components/Roles/Employers/CompanyProfile";
import ProfileEdit from "./components/Roles/Employers/ProfileEdit";
import ViewPostPlan from "./components/Roles/Employers/ViewPostPlan";

import Payments from "./components/Features/Context/Payments";
import Jobs from "./components/Roles/Users/Jobs";
import EditPofile from "./components/Roles/Users/EditPofile";
import AppliedJobs from "./components/Roles/Users/AppliedJobs";
import Chat from "./components/Roles/Employers/Chat";
import ChatUser from "./components/Roles/Users/ChatUser";
import Loading from "./components/LoadingSpinner/Loading";

function App() {
  const location = useLocation();
  const isAdminSection = location.pathname.startsWith("/admin/home");

  return (
    <div className="App static">
      <ToastContainer />
      
      {!isAdminSection && <Navlink />}
      <Payments>
        <Routes>
          <Route path="/" element={<Landingpage />} exact />

          {/* Users LOGIN & SIGNUP */}
          <Route path="/users">
            <Route element={<AuthRequire />}>
              <Route path="" element={<UsersHome />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="home-view/*" element={<Home />}>
                
                <Route path="edit-profile" element={<EditPofile/>}/>
                <Route path="my-jobs" element={<AppliedJobs/>}/>
                <Route path="chats/:EmpId/:postID/"element={<ChatUser/>} />
              </Route>
            </Route>

            <Route element={<UnAuth />}>
              <Route path="login" element={<Login title="USER" />} />
              <Route path="signup" element={<Signup title="USER" />} />
            </Route>
          </Route>

          {/* Employers LOGIN & SIGNUP */}
          <Route path="/employers">
            <Route element={<AuthRequire />}>
              <Route path="" element={<EmployersHome />} />
              <Route path="home-view/*" element={<Home />}>
                <Route path="" element={<Posts />} />
                <Route path="add-post" element={<AddPost />} />
                <Route path="post-detail/:postId/" element={<PostDetail />} />
                <Route path="edit-post/:postId/" element={<PostEdit />} />
                <Route path="profile" element={<CompanyProfile />} />
                <Route path="profile-edit/:postId/" element={<ProfileEdit />} />

                <Route path="post-plan" element={<ViewPostPlan />} />
                <Route path="chat/:SeekerId/:postID/" element={<Chat/>}/>
              </Route>
            </Route>
            <Route element={<UnAuth />}>
              <Route path="login" element={<Login title="EMPLOYERS" />} />
              <Route path="signup" element={<Signup title="EMPLOYERS" />} />
            </Route>
          </Route>

          {/* ADMIN LOGIN */}
          <Route path="/admin">
            <Route element={<AdminUnAuth />}>
              <Route path="login" element={<Login title="ADMIN" />} />
            </Route>

            <Route element={<AdminAuth />}>
              <Route path="home/*" element={<AdminHome />}>
                <Route path="" element={<Dashboard />} />
                <Route path="manage-posts" element={<ManagePosts />} />
              </Route>
            </Route>
          </Route>

          {/* Email verification */}
          <Route path="/verify-email/:token/" element={<VerifyEmail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Payments>
      <Footer />
    </div>
  );
}

export default App;
