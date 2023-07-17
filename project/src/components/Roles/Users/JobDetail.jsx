import React from "react";

function JobDetail() {
  return (
    <div className=" mt-3">
      <div className="w-full  overflow-y-scroll no-scrollbar  ">
        <div class="w-full p-4  border border-gray-200 rounded-t-lg  shadow flex justify-between">
          <div className="w-3/4 md:ms-5">
            <h5 class="mb-2  text-xl font-bold tracking-tight text-gray-900 text-start ">
              Python Developer
            </h5>
            <a href="" className="hover:underline ">
              <p class="mb-2 ms-1 font-semibold text-indigo-950	  text-start">
                Amazon
              </p>
            </a>

            <p class="mb-3 font-normal text-gray-700  text-start">
              <i className="fa-solid fa-location-dot"></i> Banglore,karnataka
            </p>
            <div className=" flex item-start">
              <button className="rounded-xl border bg-slate-100 w-32 h-10 mt-4 mb-4 hover:bg-gray-300 text-lg md:text-xl font-sans drop-shadow-lg text-lime-900">
                Apply now
              </button>
            </div>
          </div>

          <div
            className="w-16 h-16 md:me:36  md:w-28 md:h-28  flex items-end bg-cover bg-center rounded-full shadow-md"
            style={{
              backgroundImage:
                "url(https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1)",
            }}
          ></div>
        </div>
      </div>
      <div className="w-full border  h-96 overflow-y-scroll mb-5 ">
        <div class="max-full  p-6 bg-white divide-y divide-slate-200 ">
          <div className="text-start mb-4 ">
            <p className="text-md font-bold text-gray-700 text-start mb-3">
              Job details
            </p>

            <div>
              <p className="text-stone-900 font-sans font-normal">
                <i className="fa-sharp fa-solid fa-money-check-dollar "></i>{" "}
                &nbsp; Salary
              </p>
              <div className="w-fit bg-slate-100 mt-1 ms-2 rounded-lg">
                <p className="p-1 ">
                  <i className="fa-solid fa-indian-rupee-sign"></i> 2,00,000 -{" "}
                  <i className="fa-solid fa-indian-rupee-sign"></i> 4,00,000 a
                  year
                </p>
              </div>
            </div>
            <div className="my-3">
              <p className="text-stone-900 font-sans font-normal">
                <i class="fa-solid fa-business-time"></i> &nbsp; Job type
              </p>
              <div className="w-fit bg-slate-100 mt-1 ms-2 rounded-lg">
                <p className="p-1 ">Full-time</p>
              </div>
            </div>
            <div>
              <p className="text-stone-900 font-sans font-normal">
                <i class="fa-solid fa-clock"></i> &nbsp; Shift and Schedule
              </p>
              <div className="w-fit bg-slate-100 mt-1 ms-2 rounded-lg">
                <p className="p-1 ">Day Shift</p>
              </div>
            </div>
          </div>
          <div className="p-3">
            <p className="text-md font-normal text-neutral-950 text-start mb-3">
              <span className="text-gray-900 text-sm font-bold">
                {" "}
                Job title
              </span>{" "}
              : Python developer
            </p>
            <p className="text-md font-normal text-neutral-950 text-start mb-3">
              <span className="text-gray-900 text-sm font-bold">
                {" "}
                Required Skills
              </span>{" "}
              : Python ,django,restapi
            </p>
            <p className="text-md font-normal text-neutral-950 text-start mb-3">
              <span className="text-gray-900 text-sm font-bold"> Location</span>{" "}
              : Banglore
            </p>

            <div>
              <p className="text-md   text-start mb-1">
                <span className="text-gray-900 text-sm font-bold">
                  {" "}
                  Requirements:
                </span>
              </p>
              <p className="text-start ms-5">Bachelers(Required)</p>
            </div>

            <div>
              <p className="text-md   text-start mb-1">
                <span className="text-gray-900 text-sm font-bold">
                  {" "}
                  Experience:
                </span>
              </p>
              <p className="text-start ms-5">Python 3 year(required)</p>
            </div>
            <div>
              <p className="text-md   text-start mb-1">
                <span className="text-gray-900 text-sm font-bold">
                  {" "}
                  Job Description:
                </span>
              </p>
              <p className="text-start ms-5">asdfsdasdf</p>
            </div>
          </div>
          <div className="mb-4 p-3">
          <p className="text-md font-normal text-blue-700  text-start mb-3">
              <span className="text-neutral-950 text-sm font-bold "> Recruiters contact </span>{" "}
              : 89332982
            </p>

         

          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
