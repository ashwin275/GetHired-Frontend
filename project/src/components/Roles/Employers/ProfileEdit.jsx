import React from 'react'
import { useSelector } from 'react-redux';

function ProfileEdit() {

    
  const { postId } = useParams();
  console.log('postid',postId)
  const navigate = useNavigate()
  const {UserProfile} = useSelector((state)=>state.auth)
  const [formData, setFormData] = useState({
    company_name: '',
    skills: '',
    vaccancies: '',
    location: '',
    Type: '',
    workmode: '',
    experience_from: '',
    experience_to: '',
    job_description: '',
    criteria: '',
    payscale_from: '',
    payscale_to: '',
    is_active: '',
  })
  const [modifiedData , setModifiedData] = useState({})

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{

    try{
      const response = await axiosInstance.get(`recruiters/post-detail/${postId}/`);
      setDetail(response.data.data)
      console.log('Response :', response.data.data)

    }catch (error){
      console.log(error)
    }
  }


  useEffect(() => {
    if (detail) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        company_name: UserProfile.company_name,
        skills: UserProfile.skills,
        vaccancies: UserProfile.vaccancies,
        location: UserProfile.location,
        Type: UserProfile.Type,
        workmode: UserProfile.workmode,
        experience_from: UserProfile.experience_from,
        experience_to: UserProfile.experience_to,
        job_description: UserProfile.job_description,
        criteria: UserProfile.criteria,
        payscale_from: UserProfile.payscale_from,
        payscale_to: UserProfile.payscale_to,
        is_active: UserProfile.is_active,
      }));
    }
  }, [detail]);
  


  
  useEffect(()=>{
    console.log('after',detail)
    console.log('after form',formData)
  },[detail])
 


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    console.log('checked',checked)
    
    if (type === 'checkbox') {
      setModifiedData((prevState) => ({ ...prevState, [name]: checked }));
      setFormData((prevState) => ({ ...prevState, [name]: checked }));
    }
   
    else {
      setModifiedData((prevState) => ({ ...prevState, [name]: value }));
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
    console.log(modifiedData)
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('ID', postId);
      const response = await axiosInstance.patch(`recruiters/update-post/${postId}/`,modifiedData);
      console.log(response);
      toast.success(response.data.message)
      navigate(`/employers/home-view/post-detail/${postId}/`,);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.detail);
    }
  };

  return (
    <div className='lg:w-4/5  mx-auto h-full text-center lg:p-8 border border-gray-200 rounded-lg shadow'>
      <form className="w-full max-w-lg mx-auto mt-5" onSubmit={HandleSubmit}>
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="job-title">
              Job Title
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" 
            id="job-title"
             type="text" 
            placeholder="Desgination" 
            name='desgination'
            onChange={handleInputChange}
             value={formData.desgination}/>
            
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="skills">
              Skills
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
             id="skills" 
             type="text" 
             placeholder="Skills"
             name='skills'   
             onChange={handleInputChange}
             value={formData.skills}/>  
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="vaccancies">
              Vacancies
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="vaccancies" 
            type="number" 
            name='vaccancies'
            onChange={handleInputChange}
            placeholder="Number of Vacancies"   
            value={formData.vaccancies}/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="location" 
            type="text" 
            placeholder="Location" 
            name='location'  
            onChange={handleInputChange}
            value={formData.location}/>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="job-type">
              Job Type
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="job-type" 
            type="text" 
            placeholder="Type of Job"   
            name='Type'
            onChange={handleInputChange}
            value={formData.Type}/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="work-mode">
              Work Mode
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="work-mode" 
            type="text" 
            placeholder="Work Mode"  
            name='workmode' 
            onChange={handleInputChange}
            value={formData.workmode}/>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="experience-range">
              Experience Range
            </label>
            <div className="flex">
              <input className="appearance-none block w-1/2 bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mr-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
               id="experience-from" 
               type="text" 
               placeholder="From" 
               onChange={handleInputChange}
               name='experience_from' 
                value={formData.experience_from}/>
              <input className="appearance-none block w-1/2 bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="experience-to" 
              type="text" 
              placeholder="To"  
              name='experience_to'
              onChange={handleInputChange}
               value={formData.experience_to}/>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="job-description">
              Job Description
            </label>
            <textarea className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="job-description" 
            rows="4" placeholder="Job Description"  
            name='job_description'
            onChange={handleInputChange}
            value={formData.job_description}></textarea>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="criteria">
              Criteria
            </label>
            <input className="appearance-none block w-full bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
            id="criteria" 
            type="text" 
            placeholder="Criteria"  
            name='criteria'
            onChange={handleInputChange}
             value={formData.criteria}/>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2" htmlFor="payscale-range">
              Pay Scale Range
            </label>
            <div className="flex">
              <input className="appearance-none block w-1/2 bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 mr-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="payscale-from" 
              type="text" placeholder="From"
              name='payscale_from'
              onChange={handleInputChange}
                 value={formData.payscale_from}/>
              <input className="appearance-none block w-1/2 bg-stone-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
              id="payscale-to" 
              type="text" placeholder="To"   
              name='payscale_to'
              onChange={handleInputChange}
              value={formData.payscale_to}/>
            </div>
          </div>
        </div>
       
        <div className="flex items-center mt-4 ml-5">
        <input
  className={`mr-2 leading-tight w-6 h-6 border}`}
  type="checkbox"
  id="is-active"
  name="is_active"
  onChange={handleInputChange}
  checked={formData.is_active} 
/>

          <label className="text-gray-500 text-xs font-bold" htmlFor="is-active">
            Active
          </label>
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
