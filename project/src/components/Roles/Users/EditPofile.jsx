import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Axios/Axios";
import { setUserProfile, setCredentials } from "../../Features/Slice/authSlice";
import { toast } from "react-toastify";

function EditPofile() {
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const base_url = import.meta.env.VITE_FILES_BASE_URL
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { UserProfile } = useSelector((state) => state.auth);
  const [modifiedData, setModifiedData] = useState({});
  const [profile, setprofile] = useState(null);
  const [email, setemail] = useState(null);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",

    bio: "",
    skills: "",
    desired_job: "",
    desired_location: "",
    qualification: "",
    profile_picture: "",
    resume: "",
  });

  useEffect(() => {
    if (UserProfile) {
      setFormData({
        first_name: UserProfile.user,
        last_name: UserProfile.last_name,
        email: UserProfile.email,
        mobile: UserProfile.mobile,

        bio: UserProfile.bio,
        skills: UserProfile.skills,
        desired_job: UserProfile.desired_job,
        desired_location: UserProfile.desired_location,
        qualification: UserProfile.qualification,
        profile_picture: UserProfile.profile_picture,
        resume: UserProfile.resume,
      });
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "file") {
      setprofile(event.target.files[0]);
      setModifiedData((prevState) => ({
        ...prevState,
        [name]: event.target.files[0],
      }));
      setFormData((prevState) => ({
        ...prevState,
        [name]: event.target.files[0],
      }));
      console.log(modifiedData);
    } else {
      setModifiedData((prevState) => ({ ...prevState, [name]: value }));
      setFormData((prevState) => ({ ...prevState, [name]: value }));
      console.log(modifiedData);
    }
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.patch(
        `seekers/edit-profile/`,
        modifiedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",

        bio: "",
        skills: "",
        desired_job: "",
        desired_location: "",
        qualification: "",
        profile_picture: "",
        resume: "",
      });
      setModifiedData({});
      const userInfo = response.data.userInfo;
      dispatch(setCredentials({ userInfo, role: "USERS" }));
      dispatch(setUserProfile(response.data.data));
      toast.success(response.data.message);
      navigate("/users/home-view");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
  };
  const handleKeyPress = (event) => {
    
    const allowedKeys = /[0-9]|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown/;

    if (!allowedKeys.test(event.key)) {
      event.preventDefault();
    }
  };
  return (
    <div className="md:w-10/12   ">
      <div className="md:w-10/12 border-1  mx-auto rounded shadow-lg md:p-2">
        <div className="lg:w-4/5  mx-auto h-full text-center lg:p-8 border border-gray-200 rounded-lg shadow">
          <div className="flex flex-col items-center rounded-lg  ">
            <img
              className="object-cover h-36 w-36 mb-3 rounded-full drop-shadow-md  "
              src={
                profile
                  ? URL.createObjectURL(profile)
                  : formData.profile_picture
                  ? `${base_url}${formData.profile_picture}`
                  : "https://img.freepik.com/premium-vector/company-icon-simple-element-illustration-company-concept-symbol-design-can-be-used-web-mobile_159242-7784.jpg"
              }
              alt=" image"
            />
            {/* src={formData.profile_picture? URL.createObjectURL(`${imageBaseUrl}${formData.profile_picture}`):''} */}
            <label htmlFor="uploadFile">
              <i className="fa-solid fa-camera fa-lg cursor-pointer"></i>
            </label>
            <input
              id="uploadFile"
              style={{ display: "none" }}
              name="profile_picture"
              onChange={handleInputChange}
              type="file"
              accept="image/jpeg,image/png,image/gif" 
            />
          </div>

          <form
            className="w-full max-w-lg mx-auto mt-5"
            onSubmit={HandleSubmit}
          >
            <div className="flex flex-wrap mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="job-title"
                >
                  first Name
                </label>
                <input
                  className="appearance-none block w-full bg-stone-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="first_name-title"
                  type="text"
                  placeholder=""
                  name="first_name"
                  onChange={handleInputChange}
                  value={formData.first_name}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="skills"
                >
                  last name
                </label>
                <input
                  className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="last_name"
                  type="text"
                  placeholder=""
                  name="last_name"
                  onChange={handleInputChange}
                  value={formData.last_name}
                  required
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  email
                </label>
                <input
                  className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  placeholder=""
                  name="email"
                  onChange={handleInputChange}
                  value={formData.email}
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="job-type"
                >
                  Mobile
                </label>
                <input
                  className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="mobile"
                  type="text"
                  placeholder=""
                  name="mobile"
                  onChange={handleInputChange}
                  value={formData.mobile}
                  required ='phone number must be in 15 '
                  maxLength="15"
                  onKeyPress={handleKeyPress}
                 
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="vaccancies"
                >
                  Skills
                </label>
                <input
                  className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="skills"
                  type="text"
                  name="skills"
                  onChange={handleInputChange}
                  placeholder=""
                  value={formData.skills}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="vaccancies"
                >
                  Desired Job
                </label>
                <input
                  className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="desired_job"
                  type="text"
                  name="desired_job"
                  onChange={handleInputChange}
                  placeholder=""
                  value={formData.desired_job}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="vaccancies"
                >
                  Desired Location
                </label>
                <input
                  className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="desired_location"
                  type="text"
                  name="desired_location"
                  onChange={handleInputChange}
                  placeholder=""
                  value={formData.desired_location}
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="vaccancies"
                >
                  Qualification
                </label>
                <input
                  className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="qualification"
                  type="text"
                  name="qualification"
                  onChange={handleInputChange}
                  placeholder=""
                  value={formData.qualification}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="job-description"
                >
                  Bio
                </label>
                <textarea
                  className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="bio"
                  rows="4"
                  placeholder=""
                  name="bio"
                  onChange={handleInputChange}
                  value={formData.bio}
                ></textarea>
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
                  htmlFor="vaccancies"
                >
                Resume
                </label>
                <input
                  className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="resume"
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  placeholder=""
                  accept=".pdf"
                 
                />
              </div>
            </div>

            <div className="flex items-center justify-end m-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPofile;
