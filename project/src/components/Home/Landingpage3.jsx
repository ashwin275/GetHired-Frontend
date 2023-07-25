import React from "react";
import landing1 from "../../images/landing2.gif";
function Landingpage3() {
  return (
    <div className=" md:h-[28rem]  mt-5 flex justify-center ">
      <div className="w-full flex flex-col md:flex md:flex-row lg:py-9 md:h-[29rem]  p-2">
        <div className="w-full md:w-1/2 h-1/2  md:h-full bg-grey-200">
          <div className="w-full flex justify-center">
            <img className=" w-5/5 h-5/5 " src={landing1}></img>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-4 max-h-64  md:py  grid  md:px-20 content-center lg:mt-16">
          <div className=" lg:w-10/12 mx-auto h-10/12 text-xl md:text-3xl lg:text-[2.5rem] lg:font-medium font-serif text-start mx-auto text-indigo-950">
            <p className="">Save Time And Effort</p>
            <p className="ps-1  lg:m-6 ">In Your Hiring Journey</p>
          </div>
          <div className=" h-10/12  text-xs text-start lg:px-9 lg:ms-10  font-normal font-serif lg:text-lg lg:mt-5 text-violet-950   text-start p-2 lg:p-8">
            <p>
              <span className="text-indigo-800 text-bold">Get Hired</span> can connect you with the ideal candidate{" "}
            </p>
            <p>who perfectly matches your requirements. </p>
          </div>
          <div className="w-full lg:w-1/2 mx-auto h-12  lg:mt-4">
            <div
              className="w-1/2 border rounded shadow-md h-10 p-2 text-md"
              type="button"
            >
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage3;
