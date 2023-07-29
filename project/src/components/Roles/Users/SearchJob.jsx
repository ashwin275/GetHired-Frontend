import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../Features/Context/JobsContext'
import axiosInstance from '../../Axios/Axios';

function SearchJob() {

    const {  setJobs, setJobId } = useContext(Context);

    const[job,setJob] = useState(null)
    const [company,setCompany] = useState(null)
    const [location,setlocation] = useState(null)
    const [skills,setSkills] = useState(null)

    const debounce = (func, delay) => {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
      };
    };

    const fetchData= debounce(async()=>{

      const params = {
        company: company,
        job: job,
        location:location,
        skills:skills
      };
     try{
     const response = await axiosInstance.get('search/',{params})
     setJobs(response.data.data)
     setJobId(response.data.data[0].id)
     console.log(response.data.data[0],'response for debounce testing')
     }catch(error){
      console.log(error,'response error for debounce testing')
     }
    },500)


   const handleInputChanges= (event)=>{
    const {name,value} = event.target
    if(name ==='job'){
      setJob(value)
    }else if (name ==='company'){
      setCompany(value)
    }else if (name === 'location'){
      setlocation(value)
    }else if (name === 'skills'){
      setSkills(value)
    }
    fetchData()
   }

  return (
    
    <div className='w-full h-20   p-3 border-1 flex justify-center   overflow-y-scroll no-scrollbar'>
      
     
      <form className='w-full md:w-4/5  mx-auto md:flex justify-between'>


        <div className='w-10/12 md:w-1/4 h-10 m-1   mx-auto p-2'>
        <input type="text" id="job" name='job' value={job} class="bg-white border border-gray-100 text-gray-700 text-sm rounded-lg  block w-full p-2.5 "
        placeholder='Job' onChange={handleInputChanges}/>

        </div>
      
        <div className='w-10/12 md:w-1/4 h-10 m-1   mx-auto p-2'>
        <input type="text" id="company" value={company} name='company' class="bg-white border border-gray-100 text-gray-700 text-sm rounded-lg  block w-full p-2.5 "
        placeholder='Company' onChange={handleInputChanges}/>

        </div>
      
        <div className='w-10/12 md:w-1/4 h-10 m-1   mx-auto p-2'>
        <input type="text" id="location" value={location} name='location' class="bg-white border border-gray-100 text-gray-700 text-sm rounded-lg  block w-full p-2.5 "
        placeholder='Location' onChange={handleInputChanges}/>

        </div>
      
        <div className='w-10/12 md:w-1/4 h-10 m-1   mx-auto p-2'>
        <input type="text" id="skilla" value={skills} name='skills' class="bg-white border border-gray-100 text-gray-700 text-sm rounded-lg  block w-full p-2.5 "
        placeholder='Skills' onChange={handleInputChanges}/>

        </div>
      

        

      
        
       
        

      </form>
     
    </div>
    
  )
}

export default SearchJob
