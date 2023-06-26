import React, { useEffect } from 'react';
import LeftBar from './LeftBar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home() {
  const Navigate = useNavigate()
  const {userInfo} =  useSelector((state)=>state.auth);
  useEffect(()=>{
    console.log(userInfo,'inside base ')
    if(userInfo == null){

        Navigate('/')
    }
  },[])
  return (
    <div className="flex justify-center">
      <div className="w-5/6">
        <div className="flex flex-wrap md:flex-nowrap ">

          {/* .......................left.............................. */}
          <div className="w-full md:w-1/6 lg:w-1/6 h-96 left mt-8 ">
            <div className="w-full h-full p-2">

                  <LeftBar/>
            </div>
          </div>

          {/* .......................mid.............................. */}
          <div className="w-full md:w-4/6 lg:w-4/6 h-full flex justify-center items-center   my-8">
            <div className="w-full border mx-4 sm:mx-6  rounded-lg mx-0  ">
              <div className="h-96"></div>
              <div className="h-96"></div>
              <div className="h-96"></div>
              <div className="h-96"></div>
              <div className="h-96"></div>
            </div>
          </div>

          {/* .......................right.............................. */}
          <div className="w-full md:w-1/6 lg:w-1/6 h-96 right mt-8 ">
          <div className="w-full h-full border rounded-lg"></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
