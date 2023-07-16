import React from "react";
import SearchJob from "./SearchJob";
import ListJobs from "./ListJobs";
import JobDetail from "./JobDetail";
import JobsContext from "../../Features/Context/JobsContext";

function Jobs() {
  return (
  <JobsContext>
    <div className="h-[32rem] md:h-[38rem]">
        <div className="w-11/12 mx-auto  h-16 overflow-y-scroll no-scrollbar flex justify-center">
         
          <SearchJob/>

        </div>

    
    <div className="flex justify-center">
      <div className="w-11/12 h-fit  flex flex-col-reverse md:flex-row">
         
        <div className="w-full md:w-1/2 h-72   md:h-[36rem] bg-red-100 overflow-y-scroll no-scrollbar">
          <ListJobs/>
        </div>

        <div className="w-full md:w-1/2 h-52 bg-grey md:h-[38rem]  ">
         <JobDetail/>
        </div>
      </div>
    </div>
    </div>
    </JobsContext>
  );
}

export default Jobs;
