import React, { useEffect, useState } from 'react';
import axiosInstance from '../../Axios/Axios';
import { Link } from 'react-router-dom';
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
    <div className=' p-4 md:min-h-[35rem]  scroll-smooth ' >
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
        {item.workmode && <span className="text-lg font-semibold text-slate-400">({item.workmode})</span>}
      </h5>
      <p className="mb-3 font-normal text-gray-700"><span className="text-neutral-400">Skills: </span>{item.skills}</p>
      <i className="fa-solid fa-location-dot text-zinc-400"></i> {item.location}
      <div className="flex justify-end text-end">
        
      </div>
    </div>
  </Link>
))}

      </div>
    </div>
  );
}

export default Posts;
