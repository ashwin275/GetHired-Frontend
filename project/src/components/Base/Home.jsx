import React, { useEffect } from 'react';
import LeftBar from './LeftBar';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Posts from '../Roles/Employers/Posts';

function Home() {
  const Navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(userInfo, 'inside base ');
    if (userInfo == null) {
      Navigate('/');
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-5/6 ">
        <div className="flex flex-wrap md:flex-nowrap ">
          {/* .......................left.............................. */}
          <div className="w-full md:w-1/6 lg:w-1/6 h-96 left mt-8 sticky lg:top-36 left-0 right-0">
            <div className="w-full h-full p-2">
              <LeftBar />
            </div>
          </div>

          {/* .......................mid.............................. */}
          <div className="w-full md:w-4/6 lg:w-4/6 h-full flex justify-center items-center my-8  h-full  ">
            <div className="w-full  overflow-y-scroll   max-h-[32rem] no-scrollbar ">



              {/* Recruiters */}
              <Posts />
              {/* ........... */}
            </div>
          </div>

          {/* .......................right.............................. */}
          <div className="w-full md:w-1/6 lg:w-1/6 h-96 right mt-8 sticky lg:top-36 left-0 right-0 lg:mb-32">
            <div className="w-full h-full border rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
