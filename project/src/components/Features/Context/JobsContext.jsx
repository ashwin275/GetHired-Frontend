import React, { useState, createContext } from "react";
export const Context = createContext();
function JobsContext({ children }) {
  const [jobs, setJobs] = useState([]);
  const [jobId, setJobId] = useState(0);

  const contextValue = {
    jobId,
    setJobId,
    setJobs,
    jobs,
    
  };
  return (
    <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
  );
}

export default JobsContext;
