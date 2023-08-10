import React from 'react'
import { useSelector } from 'react-redux';

function CompanyProfile() {
    const {UserProfile} = useSelector((state)=>state.auth)
    const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
    const base_url = import.meta.env.VITE_FILES_BASE_URL
  return (
   <div>

<div className="w-full lg:w-10/12 mx-auto p-4 text-center brightness-100  border-x-1 border-gray-200  rounded-t-lg shadow sm:p-8 bg-fixed  bg-[url('https://media.istockphoto.com/id/624544640/vector/modern-city-background.jpg?s=612x612&w=0&k=20&c=-ERJ7hlG7wX_Ake0DiEXoU8Sp7hMI9tM_s-9Ags7fHQ=')] rounded-lg drop-shadow-2xl backdrop-grayscale-0 bg-white/30">


    

    <div className="flex flex-col items-center rounded-lg drop-shadow-2xl ">
        <img className="object-cover h-36 w-36 mb-3 rounded-full shadow-lg" src={UserProfile.profile_picture?`${base_url}${UserProfile.profile_picture}`:"https://upload.wikimedia.org/wikipedia/commons/3/3a/M%C3%BCnster%2C_LVM%2C_B%C3%BCrogeb%C3%A4ude_--_2013_--_5149-51.jpg"} alt="Bonnie image"/>
        <h5 className="mb-1 text-3xl font-medium text-slate-950 uppercase dark:text-white font-serif">{UserProfile.company_name}</h5>
        {/* <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
       
    </div>
   <div className='w-full lg:w-10/12 mx-auto border rounded-lg drofont-serif font-mediump-shadow-2xl backdrop-grayscale-0 bg-white/30 lg:p-5'>

  
    <div className='   flex flex-col lg:flex-row  '>

    
<div className='   w-full lg:w-1/2  text-start  '>
   
    <p  className='text-base text-current my-3 font-sans'>email : <span className='font-mono text-xl text-neutral-950 font-medium'>{UserProfile.company_email}</span></p>
    <p  className='text-base text-current  my-2 font-sans'>Mobile : <span className='font-mono text-xl text-neutral-950 font-medium'>{UserProfile.company_mobile}</span></p>
   
</div>
<div className=' w-full lg:w-1/2 lg:ml-6 lg:mt-5 text-start'>
<p  className='text-base text-current lg:my-1  font-sans'>Registerd name : <span className='font-mono text-xl text-neutral-950 font-medium'>{UserProfile.company_name}</span></p>
<p  className='text-base text-current my-2 font-sans'>Location : <span className='font-mono text-xl text-neutral-950 font-medium'>{UserProfile.location}</span></p>
    
</div>

</div>
<div className='w-full text-start'>
<p  className='text-base text-current lg:my-2  font-sans'>Address line 1 : <span className='font-mono text-xl text-neutral-950 font-medium break-words'>{UserProfile.company_address_line1}</span></p>
<p  className='text-base text-current    font-sans'>Address line 2 : <span className='font-mono text-xl lg:my-3 text-neutral-950 font-medium break-words'>{UserProfile.company_address_line2}</span></p>
<p  className='text-base text-current my-3 font-sans'>  <a href={UserProfile.company_website} target="blank" className="text-blue-300 bg-cyan-50 visited:text-cyan-600 border drop-shadow-2xl my-3 border-gray-800 rounded-lg p-2">
  Company Site
</a> </p>

     
</div>
<div className='w-full text-center'>
<p  className='text-base text-current lg:my-2 text-center my-4  font-serif font-medium text-xl'>About </p>
<p  className='text-base text-current break-words    font-sans'> <span className='font-mono text-xl lg:my-3 text-neutral-950 font-medium break-words'>{UserProfile.description}</span></p>


     
</div>
</div>
   
       
    </div>
   
    <div className='w-full lg:h-64 '>

    </div>
   

    </div>

  )
}

export default CompanyProfile
