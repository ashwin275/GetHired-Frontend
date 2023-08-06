import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../../images/clogo5.png";
import logo2 from "../../images/clogo6.webp";
import logo3 from "../../images/clogo9.webp";
import logo4 from "../../images/clogo10.png";
import logo5 from "../../images/clogo11.png";
import logo6 from "../../images/clogo12.png";
import logo7 from "../../images/clogo13.webp";
import logo8 from "../../images/clogo14.jpg";

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
        <div className="w-full  sm:mt-3 mt-4 lg:mt-9 flex justify-center h-52  ">
         
            <Carousel controls>
              <Carousel.Item interval={2000}>
              <div className="w-11/12 h-full ">
                <div className="w-full lg:h-1/2 w-full  bg-white flex flex-col lg:flex-row ">
                  <div className="w-full lg:w-1/2 flex ">
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
                    <div className="h-full w-1/2  lg:p-5  mt-2 lg:mt-1">
                      <img
                        src={logo4}
                        className="w-4/6 h-2/3 rounded-lg  mx-auto"
                      ></img>
                    </div>
                  </div>
                </div>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
              <div className="w-11/12 h-full ">
              <div className="w-full lg:h-1/2 w-full  bg-white flex flex-col lg:flex-row ">
                  <div className="w-full lg:w-1/2 flex ">
                    <div className="h-full w-full  lg:p-5 ">
                      <img src={logo5} className="w-4/6 mx-auto"></img>
                    </div>
                    <div className="h-full w-full  lg:p-5 ">
                      <img src={logo6} className="w-4/6 mx-auto"></img>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 flex ">
                    <div className="h-full w-1/2  lg:p-5 ">
                      <img src={logo7} className="w-4/6 mx-auto"></img>
                    </div>
                    <div className="h-full w-1/2  lg:p-5  mt-2 lg:mt-1">
                      <img
                        src={logo8}
                        className="w-4/6 h-2/3 rounded-lg  mx-auto"
                      ></img>
                    </div>
                  </div>
                </div>
                </div>
                
          


              </Carousel.Item>
            </Carousel>
        
        </div>
      </div>
    </div>
  );
}

export default Landingpage5;
