import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Axios/Axios';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get('recruiters/recruiters-posts/');
      setPosts(response.data.data);
      console.log(response.data.data);
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

  return (
    <div className=' p-4 scroll-smooth ' >
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
          <div
            key={item.id}
            className="max-w-sm p-6 bg-white border  rounded-lg shadow m-1 "
          >
            
              <h5 className="mb-2 text-2xl font-bold tracking-tight  text-stone-600">
                {item.desgination}&nbsp;
                {item.workmode &&<span className='text-lg font-semibold text-slate-400'>({item.workmode})</span>}
              </h5> 
         
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className='text-neutral-400'>Skills : </span>{item.skills}</p>
            <i className="fa-solid fa-location-dot text-zinc-400"></i> {item.location}


            <div className="flex justify-end text-end">

            <button class="rounded-full border bg-slate-100 w-16 mt-2 hover:bg-gray-300 drop-shadow-lg">Edit</button>


           <button className="rounded-full border w-8 h-8 ms-auto bg-cyan-50 drop-shadow-lg hover:bg-gray-300">
          <i className="fa-solid fa-arrow-right"></i>
          </button>
      </div>
        
           


          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
