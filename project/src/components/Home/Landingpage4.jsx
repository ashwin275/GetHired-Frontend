import React from "react";
import image1 from "../../images/landing4.1.webp";
import image2 from "../../images/landing4.2.webp";
import image3 from "../../images/landing4.3.webp";
function Landingpage4() {
  return (
    <div className="  lg:mt-28 flex justify-center  ">
      <div className="w-full flex flex-col ">
        <div className="w-full  ">
          <p className=" text-xl lg:text-3xl p-4 font-bold font-sans text-orange-900">
            Why choose us ?
          </p>

          <div className="w-full md:mt-3 text-stone-700 font-sans px-3">
            <p className="text-sm md:text-2xl">
              Find your perfect match with our revolutionary recruitment
            </p>
            <p className="text-sm md:text-2xl">
              softwares .Makes informed decisions effortlessly.
            </p>
          </div>
        </div>
        <div className="w-full lg:h-96 mt-3  lg:p-5 flex justify-center">
          <div className="lg:w-6/6 flex flex-col lg:flex-row p-2 justify-between  h-full">
            <div className="h-full lg:w-3/12 mb-4 lg:p-5 ">
              <div className=" ">
                <img src={image2} alt="image" className="w-4/6 lg:w-full h-1/2 mx-auto"></img>
              </div>
              <div className=" mt-4 text-sm lg:mt-6 text-xl font-semibold text-lime-700 ">
                <p className=" ">Find and attract</p>
                <p>Candidates</p>
              </div>
            </div>
            <div className="h-full lg:w-3/12  lg:p-5">
              <div className="">
                <img src={image3} alt="image" className="w-4/6 lg:w-full h-1/2 mx-auto"></img>
              </div>
              <div className=" mt-4 text-sm lg:mt-6 text-xl font-semibold text-lime-700 ">
                <p className=" ">Compare the</p>
                <p>salary</p>
              </div>
            </div>
            <div className="h-full lg:w-3/12  lg:p-5">
              <div className="">
                <img src={image1} alt="image" className="w-4/6 lg:w-full h-1/2 mx-auto"></img>
              </div>
              <div className=" mt-4 text-sm lg:mt-6 text-xl font-semibold text-lime-700 ">
                <p className=" ">Move the right</p>
                <p>applicants forward</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Landingpage4;
