import React from 'react'
import { useSelector } from 'react-redux'

function RightBar() {
    const {userInfo} = useSelector((state)=>state.auth)
    const {UserProfile} = useSelector((state)=>state.auth)
    console.log(userInfo,'Right bar')
  return (
    <div>
    {userInfo.is_seeker?(
        <h1>user</h1>
    ):(
       
<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-[url('https://static.storyweaver.org.in/illustrations/58816/large/3.jpg')]">
   
        <h5 className="mb-2 text-2xl font-semibold  font-sans tracking-tight text-gray-700 dark:text-white">Post Balance </h5>
    
    <p className="mb-3 font-normal text-lg text-emerald-900 ">You have {UserProfile.post_balance} job posting credits left</p>
    <p className='mb-3 text-zinc-700  font-serif'>Discover our range of plans to boost your recruitment efforts.</p>
    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        View Plans
        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </a>
</div>

    )}
    </div>
  )
}

export default RightBar
