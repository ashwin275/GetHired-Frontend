import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios/Axios";
import { Link, useNavigate } from "react-router-dom";
import Loaders from "../../LoadingSpinner/Loaders";
import Modal from "react-bootstrap/Modal";
function Posts() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [welcome, setWelcome] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("recruiters/recruiters-posts/");
      setPosts(response.data.data);
      console.log(response.data.data);
      setIsLoading(false);
      if(response.data.data.length===0){
        setWelcome(true)
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.desgination.toLowerCase().includes(searchQuery.toLowerCase())
  );
const HandlePostJobNavigation =()=>{
  navigate('add-post')
  setWelcome(false)
}

const HandleProfileNavigation =()=>{
  navigate('profile')
  setWelcome(false)
}

  return (
    <>
      {isLoading ? (
        <>
          <p>
            <Loaders />
          </p>
        </>
      ) : (
        <>
          {posts.length ? (
            <>
              {" "}
              <div className=" p-4 md:min-h-[35rem]  scroll-smooth ">
                <div className="mb-4 flex justify-end  ">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="grid mb-8 md:mb-12 md:grid-cols-2 p-1 h-100 text-start  ">
                  {filteredPosts.map((item) => (
                    <Link to={`post-detail/${item.id}/`} key={item.id}>
                      <div className="p-6 hover:bg-sky-50  border border-gray-300 rounded-lg shadow m-1 cursor-pointer transition duration-700 ease-in-out ">
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-stone-600">
                          {item.desgination}&nbsp;
                          {item.workmode && (
                            <span className="text-lg font-semibold text-slate-400">
                              ({item.workmode})
                            </span>
                          )}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700">
                          <span className="text-neutral-400">Skills: </span>
                          {item.skills}
                        </p>
                        <i className="fa-solid fa-location-dot text-zinc-400"></i>{" "}
                        {item.location}
                        <div className="flex justify-end text-end"></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <Modal
                show={welcome}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="   "
              >
                <Modal.Body className="rounded-xl">
                  <div className="px-4 ">
                    <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
                      <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white"></h5>
                      <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 font-serif">
                        Ready to kickstart your hiring journey? Be the first to
                        make an impact by posting your job listings and
                        connecting with top talent. Click on 'Post a Job' to get
                        started and unlock the potential of finding your next
                        great hire.
                      </p>
                      <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <button className="rounded-full border bg-slate-100 px-3 py-2 mt-4 mb-4 hover:bg-gray-300 text-xl drop-shadow-lg text-lime-900 font-serif" onClick={HandlePostJobNavigation}>
                          Post a job
                        </button>
                        <button className="rounded-full border bg-slate-100 px-3 py-2 mt-4 mb-4 hover:bg-gray-300 text-xl drop-shadow-lg text-lime-900 font-serif" onClick={HandleProfileNavigation}>
                          {" "}
                          Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Posts;
