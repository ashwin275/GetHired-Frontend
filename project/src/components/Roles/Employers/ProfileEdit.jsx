import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../Axios/Axios';
import { toast } from 'react-toastify';
import { setUserProfile } from '../../Features/Slice/authSlice';
function ProfileEdit() {

  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const base_url = import.meta.env.VITE_FILES_BASE_URL
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {UserProfile} = useSelector((state)=>state.auth)
  const [formData, setFormData] = useState({
    company_name: '',
    company_email: '',
    company_mobile: '',
    location: '',
    company_address_line1: '',
    company_address_line2: '',
    recruiter_bio: '',
    description: '',
    company_website:'',
    profile_picture:'',
   
  })
  const [modifiedData , setModifiedData] = useState({})
  const  [profile,setprofile]  = useState(null)



  useEffect(() => {
    if (UserProfile) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        company_name: UserProfile.company_name,
        company_email: UserProfile.company_email,
        company_mobile: UserProfile.company_mobile,
        location: UserProfile.location,
        company_address_line1: UserProfile.company_address_line1,
        company_address_line2: UserProfile.company_address_line2,
        recruiter_bio: UserProfile.recruiter_bio,
        description: UserProfile.description,
        company_website:UserProfile.company_website,
        profile_picture:UserProfile.profile_picture,
       
      }));
    }
  }, []);
  


 

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
  
    if (type === 'file') {
      setprofile(event.target.files[0]);
      setModifiedData((prevState) => ({ ...prevState, [name]: event.target.files[0] }));
      setFormData((prevState) => ({ ...prevState, [name]: event.target.files[0] }));
      console.log(modifiedData)
    } else {
      setModifiedData((prevState) => ({ ...prevState, [name]: value }));
      setFormData((prevState) => ({ ...prevState, [name]: value }));
  
      console.log(modifiedData);
    }
  };
  

  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.patch(`recruiters/profile-edit/`, modifiedData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('response======', response);
      dispatch(setUserProfile(response.data.data));
      toast.success(response.data.message);
      navigate('/employers/home-view/profile');
    } catch (error) {
      console.log('error=========', error);
      toast.error(error.response.data.detail);
    }
  };
  const handleKeyPress = (event) => {
    
    const allowedKeys = /[0-9]|Backspace|Delete|ArrowLeft|ArrowRight|ArrowUp|ArrowDown/;

    if (!allowedKeys.test(event.key)) {
      event.preventDefault();
    }
  };
  

  return (
    <div className='lg:w-4/5  mx-auto h-full text-center lg:p-8 border border-gray-200 rounded-lg shadow'>
     

      <div className="flex flex-col items-center rounded-lg  ">
        <img className="object-cover h-36 w-36 mb-3 rounded-full drop-shadow-md  " src={profile?URL.createObjectURL(profile):formData.profile_picture?`${base_url}${formData.profile_picture}`:'https://img.freepik.com/premium-vector/company-icon-simple-element-illustration-company-concept-symbol-design-can-be-used-web-mobile_159242-7784.jpg'}  alt=" image"/>
        {/* src={formData.profile_picture? URL.createObjectURL(`${imageBaseUrl}${formData.profile_picture}`):''} */}
        <label htmlFor="uploadFile">
              <i className="fa-solid fa-camera fa-lg cursor-pointer"></i>
            </label>
            <input
             
              id="uploadFile"
              style={{ display: "none" }}
              name='profile_picture'
              onChange={handleInputChange}
              type="file"
              accept="image/jpeg,image/png,image/gif" 
            />
    </div>

      <form className="w-full max-w-lg mx-auto mt-5" onSubmit={HandleSubmit}>
        <div className="flex flex-wrap mb-6">

          
            
          
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="job-title">
              Company Name
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="job-title"
             type="text" 
            placeholder="" 
            name='company_name'
            onChange={handleInputChange}
            required
             value={formData.company_name}/>
            
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="skills">
              email
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             id="skills" 
             type="text" 
             placeholder=""
             name='company_email'   
             onChange={handleInputChange}
             required
             value={formData.company_email}/>  
          </div>
        </div>


        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="location">
              Mobile
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="company_mobile" 
            type="text" 
            placeholder="" 
            name='company_mobile'  
            onChange={handleInputChange}
            required
            maxLength="15"
            onKeyPress={handleKeyPress}
            value={formData.company_mobile}/>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="job-type">
              Location
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="location" 
            type="text" 
            placeholder="location"   
            name='location'
            onChange={handleInputChange}
            value={formData.location}/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="vaccancies">
              Company Address line 1
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="company_address_line1" 
            type="Text" 
            name='company_address_line1'
            onChange={handleInputChange}
            placeholder=""   
            value={formData.company_address_line1}/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="vaccancies">
              Company Address line 2
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="company_address_line2" 
            type="Text" 
            name='company_address_line2'
            onChange={handleInputChange}
            placeholder=""   
            value={formData.company_address_line2}/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="vaccancies">
              Website
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="company_website" 
            type="url" 
            name='company_website'
            onChange={handleInputChange}
            placeholder=""   
            value={formData.company_website}/>
          </div>
        </div>
       
       
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="job-description">
             Description
            </label>
            <textarea className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="job-description" 
            rows="4" placeholder="Job Description"  
            name='description'
            onChange={handleInputChange}
            value={formData.description}></textarea>
          </div>
        </div>
       
       
       
        <div className="flex items-center justify-end m-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Edit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ProfileEdit
