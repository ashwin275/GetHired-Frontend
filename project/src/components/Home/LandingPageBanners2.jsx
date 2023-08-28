import React from 'react'

function LandingPageBanners2() {
  return (
    <div>
        <div className=" md:h-[28rem] mt-5  flex justify-center  ">
      <div className="w-full flex flex-col md:flex md:flex-row lg:py-9  md:h-[29rem]  p-2">
        <div className="w-full md:w-1/2 h-1/2  md:h-full  bg-grey-200 mb-5">
          <div className="w-full flex justify-center ">
            <img className=" w-5/5 h-5/5 lg:w-[26rem] lg:h-[26rem] lg:object-cover rounded-lg  " src="https://cdn.dribbble.com/users/1720296/screenshots/4938330/media/c0f9f7a22d2cb33c6b4427269a8e5ae1.gif" alt="Image"></img>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 max-h-64  md:py  grid  md:px-20 content-center lg:mt-24">
          <div className=" lg:w-10/12 mx-auto h-10/12  text-lg mt-10 md:text-3xl lg:text-[2rem] lg:font-medium font-serif lg:text-start mx-auto text-teal-900">
            <p className="">Your Criteria, Your Goals </p>
            <p className="lg:mt-3 ">Get Hired's Job Suggestions </p>
          </div>
          <div className=" h-10/12  text-xs sm:text-center lg:px-9 lg:ms-10  font-normal font-serif lg:text-lg lg:mt-5 text-violet-950   lg:text-start p-2 lg:p-8">
            <p>
              <span className="text-indigo-800 text-bold">Get Hired :</span> Guiding You to Opportunities Aligned with Your Aspirations and Connects You to Ideal Work Matches.  </p>
          </div>
          <div className="w-full lg:w-1/2  md:ms-28  h-12 mt-1  lg:mt-4  ">
        
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default LandingPageBanners2
