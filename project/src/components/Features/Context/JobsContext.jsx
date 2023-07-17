import React, { useState, createContext } from "react";
export const Context = createContext();
function JobsContext({ children }) {
  const [jobs, setJobs] = useState(null);
  const [jobId, setJobId] = useState(null);

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
