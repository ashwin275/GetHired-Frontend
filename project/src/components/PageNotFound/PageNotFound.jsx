import React from 'react'
import { Link } from 'react-router-dom'
function PageNotFound() {
  return (
  <Link to='/'>  <div className="w-full py-40 lg:py-16 flex justify-center bg-slate-100 " >
      <div className=" w-full lg:w-3/4 h-64 lg:h-[38rem]  flex justify-center">
        <img src='https://miro.medium.com/v2/resize:fit:828/1*zBFBJktPD3_z0S_35kO5Hg.gif' className=' lg:w-3/5 h-64 lg:h-[30rem] object-cover' ></img>

      </div>
     
    </div></Link>
  )
}

export default PageNotFound
