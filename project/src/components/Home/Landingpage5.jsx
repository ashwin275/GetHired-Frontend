import React from "react";
import logo1 from "../../images/clogo5.png";
import logo2 from "../../images/clogo6.webp";
import logo3 from "../../images/clogo9.webp";
import logo4 from "../../images/clogo10.png";
function Landingpage5() {
  return (
    <div className="w-full flex justify-center mt-5 ">
      <div className="w-11/12 text-xs lg:text-xl text-semibold  px-3">
        <div className="mb-3 font-sans text-amber-950">
          <p>
            Experience the confidence of leading employers as they choose
            Get-Hired on demand
          </p>
          <p>recruiting solutions for their talent acquisition needs.</p>
        </div>
        <div className="w-full h-72  sm:mt-3 lg:mt-9 flex justify-center">
          <div className="w-11/12 h-full ">
            <div className="w-full lg:h-1/2 w-full flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 flex">
                <div className="h-full w-1/2  lg:p-5 ">
                  <img src={logo1} className="w-4/6 mx-auto"></img>
                </div>
                <div className="h-full w-1/2  lg:p-5 ">
                  <img src={logo2} className="w-4/6 mx-auto"></img>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex ">
              <div className="h-full w-1/2  lg:p-5 ">
                  <img src={logo3} className="w-4/6 mx-auto"></img>
                </div>
                <div className="h-full w-1/2  lg:p-5 ">
                  <img src={logo4} className="w-4/6 h-2/3 rounded-lg  mx-auto"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage5;
