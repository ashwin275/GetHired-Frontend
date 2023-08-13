import React from 'react'

import { Link } from 'react-router-dom'
function LandingPageTop() {
  return (
    <div className=' md:h-[28rem]  lg:mt-3 flex justify-center '>
        <div className='w-full flex flex-col-reverse md:flex md:flex-row lg:py-9 md:h-[29rem]  p-2'>
            <div className='w-full md:w-1/2 px-4 max-h-64  md:py  grid  md:px-20 content-center lg:mt-16'>
                <div className=' lg:w-10/12 mx-auto h-10/12 text-xl md:text-3xl lg:text-[2.5rem] lg:font-medium font-serif text-center lg:text-start mx-auto text-sky-950'>
                    <p className=''>You Deserve a Job</p>
                    <p className='  lg:m-6 '>That Loves You Back</p>
                </div>
                <div className=' h-10/12    text-xs lg:text-start lg:px-9 lg:ms-10  font-normal font-serif lg:text-lg lg:mt-5 text-violet-950    p-2 lg:p-8'>
                    <p><span className='text-indigo-800 text-bold lg:ms-16'>Get Hired</span> will help you and recommend </p>
                    <p className='lg:ms-16'>a work based on your criteria. </p>

                </div>
                <div className='w-full lg:w-1/2 mx-auto h-12  lg:mt-4 mt-3'>
                  <Link to={'/users/login'}>  <div className='w-1/2 border rounded shadow-md h-10 p-2 text-md mx-auto' type='button'>Register</div></Link>
                     
                </div>

            </div>
            <div className='w-full md:w-1/2 h-1/2  md:h-full  mb-5'>

                <div className='w-full flex justify-center'>
                    <img  className=' w-4/5 h-4/5 'src="https://cdn.shrm.org/image/upload/c_crop%2Ch_1080%2Cw_1080%2Cx_0%2Cy_0/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Talent%20Acquisition/202101-Talent-Trends-3_bubea5" alt='image'></img>
                </div>

            </div>

        </div>
     
    </div>
  )
}

export default LandingPageTop
