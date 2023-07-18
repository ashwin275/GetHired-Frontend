import React from "react";
import SearchJob from "./SearchJob";
import ListJobs from "./ListJobs";
import JobDetail from "./JobDetail";
import JobsContext from "../../Features/Context/JobsContext";

function Jobs() {
  return (
  <JobsContext>
    <div className="h-[32rem] md:h-[34.5rem]  overflow-y-scroll no-scrollbar">
        <div className="w-11/12 mx-auto   overflow-y-scroll no-scrollbar flex justify-center">
         
          <SearchJob/>

        </div>

    
    <div className="flex justify-center">
      <div className="w-11/12 h-fit  flex flex-col-reverse md:flex-row">
         
        <div className="w-full md:w-1/2      ">
          <ListJobs/>
        </div>

        <div className="w-full md:w-1/2    overflow-y-scroll no-scrollbar  bg-grey   ">
         <JobDetail/>
        </div>
      </div>
    </div>
    </div>
    </JobsContext>
  );
}

export default Jobs;
