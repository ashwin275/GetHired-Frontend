import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../Features/Context/JobsContext";
import axiosInstance from "../../Axios/Axios";

function JobDetail() {
  const { jobId } = useContext(Context);
  const [jobDetail, setJobDetail] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  useEffect(() => {
    console.log("job id updated", jobId);

    fetchJobDetail();
  }, [jobId]);

  useEffect(() => {
    console.log("loaded", jobDetail);
    console.log(jobDetail.company_mobile);
    setisLoading(false);
  }, [jobDetail]);

  const fetchJobDetail = async () => {
    try {
      const response = await axiosInstance.get(`job-detail/${jobId}/`);

      setJobDetail(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {!isLoading ? (
        <>
          <div className=" mt-3">
            <div className="w-full  overflow-y-scroll no-scrollbar  ">
              <div className="w-full p-4  border border-gray-200 rounded-t-lg  shadow flex justify-between">
                <div className="w-3/4 md:ms-5">
                  <h5 className="mb-2  text-xl font-bold tracking-tight text-gray-900 text-start capitalize">
                    {jobDetail.desgination}
                  </h5>
                  <a href="" className="hover:underline ">
                    <p className="mb-2 ms-1 font-semibold text-indigo-950	 capitalize text-start">
                      {jobDetail.company}
                    </p>
                  </a>

                  <p className="mb-3 font-normal text-gray-700  text-start">
                    <i className="fa-solid fa-location-dot capitalize"></i>{" "}
                    {jobDetail.location}
                  </p>
                  <div className=" flex item-start">
                    <button className="rounded-xl border bg-slate-100 w-32 h-10 mt-4 mb-4 hover:bg-gray-300 text-lg md:text-xl font-sans drop-shadow-lg text-lime-900">
                      Apply now
                    </button>
                  </div>
                </div>
                {jobDetail.profile_picture ? (
                  <>
                    {" "}
                    <div
                      className="w-16 h-16 md:me:36  md:w-28 md:h-28  flex items-end bg-cover bg-center rounded-full shadow-md"
                      style={{
                        backgroundImage: `url(${imageBaseUrl}${jobDetail.profile_picture})`,
                      }}
                    ></div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="w-full border  h-96 overflow-y-scroll mb-5 ">
              <div className="max-full  p-6 bg-white divide-y divide-slate-200 ">
                <div className="text-start mb-4 ">
                  <p className="text-md font-bold text-gray-700 text-start mb-3">
                    Job details
                  </p>

                  {jobDetail.payscale_from ? (
                    <>
                      {" "}
                      <div>
                        <p className="text-stone-900 font-sans font-normal">
                          <i className="fa-sharp fa-solid fa-money-check-dollar "></i>{" "}
                          &nbsp; Salary
                        </p>
                        <div className="w-fit bg-slate-100 mt-1 ms-2 rounded-lg">
                          <p className="p-1 ">
                            <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                            {jobDetail.payscale_from},00,000 -{" "}
                            <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                            {jobDetail.payscale_to},00,000 a year
                          </p>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <div className="my-3">
                    <p className="text-stone-900 font-sans font-normal">
                      <i className="fa-solid fa-business-time"></i> &nbsp; Job
                      type
                    </p>
                    <div className="w-fit bg-slate-100 mt-1 ms-2 rounded-lg">
                      <p className="p-1 capitalize">{jobDetail.workmode}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-stone-900 font-sans font-normal">
                      <i className="fa-solid fa-clock"></i> &nbsp; Shift and
                      Schedule
                    </p>
                    <div className="w-fit bg-slate-100 mt-1 ms-2 rounded-lg">
                      <p className="p-1 ">Day Shift</p>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <p className="text-md font-normal text-neutral-950 text-start mb-3 capitalize">
                    <span className="text-gray-900 text-sm font-bold">
                      {" "}
                      Job title
                    </span>{" "}
                    : {jobDetail.desgination}
                  </p>
                  {jobDetail.skills ? (
                    <>
                      {" "}
                      <p className="text-md font-normal text-neutral-950 text-start mb-3 capitalize">
                        <span className="text-gray-900 text-sm font-bold">
                          {" "}
                          Required Skills
                        </span>{" "}
                        : {jobDetail.skills}
                      </p>
                    </>
                  ) : null}

                  {jobDetail.location ? (
                    <>
                      <p className="text-md font-normal text-neutral-950 text-start mb-3 capitalize">
                        <span className="text-gray-900 text-sm font-bold">
                          {" "}
                          Location
                        </span>{" "}
                        : {jobDetail.location}
                      </p>
                    </>
                  ) : null}

                  {jobDetail.criteria ? (
                    <>
                      {" "}
                      <div>
                        <p className="text-md   text-start mb-1 capitalize">
                          <span className="text-gray-900 text-sm font-bold ">
                            {" "}
                            Requirements:
                          </span>
                        </p>
                        <p className="text-start ms-5 capitalize">{jobDetail.criteria}</p>
                      </div>
                    </>
                  ) : null}

                  {jobDetail.experience_from ? (
                    <>
                      {" "}
                      <div>
                        <p className="text-md   text-start mb-1 ">
                          <span className="text-gray-900 text-sm font-bold">
                            {" "}
                            Experience:
                          </span>
                        </p>
                        <p className="text-start ms-5">
                          {jobDetail.experience_from} -{" "}
                          {jobDetail.experience_to}
                        </p>
                      </div>
                    </>
                  ) : null}

                  {jobDetail.job_description ? (
                    <>
                      {" "}
                      <div>
                        <p className="text-md   text-start mb-1">
                          <span className="text-gray-900 text-sm font-bold">
                            {" "}
                            Job Description:
                          </span>
                        </p>
                        <p className="text-start ms-5">
                          {jobDetail.job_description}
                        </p>
                      </div>
                    </>
                  ) : null}
                </div>

                <div className="mb-4 p-3">
                  {jobDetail.company_mobile ? (
                    <>
                      {" "}
                      <p className="text-md font-normal text-blue-700  text-start mb-3">
                        <span className="text-neutral-950 text-sm font-bold ">
                          {" "}
                          Recruiters contact{" "}
                        </span>{" "}
                        : {jobDetail.company_mobile}
                      </p>
                    </>
                  ) : null}

                  {jobDetail.company_email ? (
                    <>
                      {" "}
                      <p className="text-md font-normal text-neutral-900 hover:underline text-start mb-3">
                        <i className="fa-solid fa-envelope"></i>{" "}
                        {jobDetail.company_email}
                      </p>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>loading</h2>
        </>
      )}
    </div>
  );
}

export default JobDetail;