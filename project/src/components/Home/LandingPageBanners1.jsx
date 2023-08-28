import React from 'react'

function LandingPageBanners1() {
  return (
    <div>
        <div className=" md:h-[28rem]  mt-5 flex justify-center ">
      <div className="w-full flex flex-col md:flex md:flex-row lg:py-9 md:h-[29rem]  p-2">
        <div className="w-full md:w-1/2 h-1/2  md:h-full bg-grey-200">
          <div className="w-full flex justify-center">
            <img className=" w-5/5 h-5/5 lg:w-[30rem] lg:h-[30rem] lg:object-cover" src="https://camo.githubusercontent.com/40165a147c3dcea0fa1db780bb533fc5f98546ccfb9d5d05ddb2f429277f5348/68747470733a2f2f616e616c7974696373696e6469616d61672e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031382f31322f646576656c6f7065722d6472696262626c652e676966" alt="Image"></img>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 max-h-64  md:py  grid  md:px-20 content-center lg:mt-16">
          <div className=" lg:w-10/12 mx-auto h-10/12  text-lg md:text-3xl lg:text-[2rem] lg:font-medium font-serif lg:text-start mx-auto text-teal-900">
            <p className="">Optimize Your Hiring Process </p>
            <p className="  lg:mt-3 ">With Increased Efficiency and </p>
            <p className='lg:ms-28 lg:mt-3'>Time Savings.</p>
          </div>
          <div className=" h-10/12  text-xs sm:text-center lg:px-9 lg:ms-10  font-normal font-serif lg:text-lg lg:mt-5 text-violet-950   lg:text-start p-2 lg:p-8">
            <p>
              <span className="text-indigo-800 text-bold">Discover</span>  Your Ideal Candidate Through 
            </p>
            <p  className="">Get Hired's Precise Matching of Your Requirements. </p>
          </div>
          <div className="w-full lg:w-1/2  md:ms-28  h-12 mt-1  lg:mt-4  ">
        
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default LandingPageBanners1
