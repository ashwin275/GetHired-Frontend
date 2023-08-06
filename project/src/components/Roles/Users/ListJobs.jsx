import React, { useContext, useEffect, useState } from "react";
import axiosInstance from "../../Axios/Axios";
import { Context } from "../../Features/Context/JobsContext";
import InfiniteScroll from "react-infinite-scroll-component";
import notfound from '../../../images/datanotfound.gif'
import InnerLoader from "../../LoadingSpinner/InnerLoader";
function ListJobs() {
 
  const { jobs, setJobs, setJobId ,jobId} = useContext(Context);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const [limit, setLimit] = useState(10);

  const [offset, setOffset] = useState(0);
  const [isLoading, setIsloading] = useState(true);
  const [count, setcount] = useState(5);

  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    console.log("called ");
    fetchdata();
  }, [offset]);

  useEffect(()=>{
    console.log('offset ',offset)
  },[offset])
  const fetchdata = async () => {
    setIsloading(true);
    try {
      const response = await axiosInstance.get(
        `view-jobs/?limit=${limit}&offset=${offset}`
      );
      console.log("my response", response.data.previous);
      const data = [...jobs].concat(response.data.results);
      setJobs(data);
      setcount(response.data.count);
      console.log("Count 777777777777", count);
      console.log("data", response.data.next);
      if (response.data.next == null) {
        console.log("get it");
        setHasMore(false);
      }

      setJobId(response.data.results[0].id);
      
    } catch (error) {
      console.log(error);
    }
    setTimeout(function() {
      setIsloading(false); 
    }, 2000);
  };

  const SetJobId = (id) => {
    setJobId(id);
  };
  useEffect(() => {
    console.log("my", jobs);
  }, [jobs]);
  return (
    <div className="w-10/12   border-2 rounded-lg mx-auto p-2  h-72 mt-4   md:h-[40rem]   overflow-y-scroll no-scrollbar">
      {!isLoading ?(jobs.length>0?( <>
          <InfiniteScroll
            dataLength={jobs.length}
            next={() => setOffset(offset + limit)}
            hasMore={hasMore}
            loader={
              <><div className="w-full h-32 ">
                    <h1 >loading wait</h1>
              </div>
                
              </>
            }
          >
            {jobs.map((item) => (
              <div
                key={item.id}
                className={`w-full max-w-sm p-4    rounded-lg hover:shadow-xl border-1 drop-shadow-md sm:p-8 mt-2 mx-auto mb-4 ${jobId == item.id?"  border-gray-500 ":" border-gray-200"}`}
                type="button"
                onClick={() => SetJobId(item.id)}
              >
                <div className="flex justify-between text-gray-900">
                  <div>
                    <span className="text-md md:text-xl text-start item-baseline font-bold tracking-tight hover:underline decoration-1 font-sans capitalize">
                      {item.desgination} 
                    </span>
                    <div className="flex items-baseline text-slate-700 p-1">
                      <span className="text-md md:text-lg  tracking-tight hover:underline decoration-1 capitalize">
                        {item.company}
                      </span>
                    </div>
                    <div className="flex items-baseline text-slate-700 ms-1">
                    {item.location&&  <i className="fa-solid fa-location-dot"></i>} &nbsp;&nbsp;
                      <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div
                    className="w-10 h-10 md:w-16 md:h-16 flex items-end bg-cover bg-center rounded-full"
                    style={{
                      backgroundImage: `url(${imageBaseUrl}${item.profile_picture})`,
                    }}
                  ></div>
                </div>

                <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3">
                    <span className="text-base font-semibold leading-tight text-gray-600 text-sm flex items-center">
                      <i className="fa-solid fa-arrow-pointer fa-bounce fa-lg"></i>{" "}
                      &nbsp;&nbsp;Easy Apply&nbsp;
                      <img
                        className="w-12 h-7"
                        src="https://www.gethiredaustralia.com.au/wp-content/uploads/2020/04/2-cropped.png"
                      ></img>
                    </span>
                  </li>
                </ul>
              </div>
            ))}{" "}
          </InfiniteScroll>
        </>):(<><div className="w-full p-3 h-1/2">
         
          <img src={notfound} alt='No data found'/>
          </div></>)) 
       
       : (
        <><InnerLoader/></>
      )}
    </div>
  );
}

export default ListJobs;
