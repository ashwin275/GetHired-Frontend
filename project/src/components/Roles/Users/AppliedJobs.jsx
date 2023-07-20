import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios/Axios";

function AppliedJobs() {
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const [myjobs, setmyjobs] = useState({});
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("applied-jobs/");
      console.log(response);
      setmyjobs(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full md:w-10/12 border-2 rounded-lg mx-auto  h-96  md:h-[30rem] overflow-y-scroll no-scrollbar">
      
    </div>
  );
}

export default AppliedJobs;
