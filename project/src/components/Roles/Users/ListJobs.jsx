import React, { useEffect, useState } from "react";
import axiosInstance from "../../Axios/Axios";
function ListJobs() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    // try {
    //   const response = await axiosInstance.get(
    //     `view-jobs/?limit=${limit}&offset=${offset}`
    //   );
    //   console.log("DAta", response.data);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <div className="w-10/12 mt-5  border-2 rounded-lg mx-auto p-4 ">


      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg hover:shadow-xl  drop-shadow-md sm:p-8 mt-2 mx-auto" type="button">
        <div className="flex justify-between text-gray-900  ">
          <div>
          <span className="text-md md:text-xl text-start item-baseline font-bold tracking-tight hover:underline decoration-1 font-sans">
            Python Developer
          </span>
          <div className="flex items-baseline text-slate-700 p-1">
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Amazon{" "}
          </span>
        </div>
        <div className="flex items-baseline text-slate-700  ms-1">
          <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Banglore
          </span>
        </div>

          </div>
         

          <div className=" w-10 h-10 md:w-16 md:h-16 flex items-end bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-03-amazon-gif-logo.jpg)' }}>
      
         </div>
          
        </div>
        
        <ul role="list" className="space-y-5 my-7  ">
          <li className="flex space-x-3 ">
          
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 flex items-center ">
            <i className="fa-solid fa-arrow-pointer fa-bounce fa-lg"></i> &nbsp;&nbsp;Easy Apply&nbsp;
              <img className="w-12 h-7 " src="https://www.gethiredaustralia.com.au/wp-content/uploads/2020/04/2-cropped.png"></img>
            </span>
           
          </li>
        </ul>
      </div>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg hover:shadow-xl  drop-shadow-md sm:p-8 mt-2 mx-auto" type="button">
        <div className="flex justify-between text-gray-900  ">
          <div>
          <span className="text-md md:text-xl text-start item-baseline font-bold tracking-tight hover:underline decoration-1 font-sans">
            Python Developer
          </span>
          <div className="flex items-baseline text-slate-700 p-1">
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Amazon{" "}
          </span>
        </div>
        <div className="flex items-baseline text-slate-700  ms-1">
          <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Banglore
          </span>
        </div>

          </div>
         

          <div className=" w-10 h-10 md:w-16 md:h-16 flex items-end bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-03-amazon-gif-logo.jpg)' }}>
      
         </div>
          
        </div>
        
        <ul role="list" className="space-y-5 my-7  ">
          <li className="flex space-x-3 ">
          
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 flex items-center ">
            <i className="fa-solid fa-arrow-pointer fa-bounce fa-lg"></i> &nbsp;&nbsp;Easy Apply&nbsp;
              <img className="w-12 h-7 " src="https://www.gethiredaustralia.com.au/wp-content/uploads/2020/04/2-cropped.png"></img>
            </span>
           
          </li>
        </ul>
      </div>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg hover:shadow-xl  drop-shadow-md sm:p-8 mt-2 mx-auto" type="button">
        <div className="flex justify-between text-gray-900  ">
          <div>
          <span className="text-md md:text-xl text-start item-baseline font-bold tracking-tight hover:underline decoration-1 font-sans">
            Python Developer
          </span>
          <div className="flex items-baseline text-slate-700 p-1">
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Amazon{" "}
          </span>
        </div>
        <div className="flex items-baseline text-slate-700  ms-1">
          <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Banglore
          </span>
        </div>

          </div>
         

          <div className=" w-10 h-10 md:w-16 md:h-16 flex items-end bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-03-amazon-gif-logo.jpg)' }}>
      
         </div>
          
        </div>
        
        <ul role="list" className="space-y-5 my-7  ">
          <li className="flex space-x-3 ">
          
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 flex items-center ">
            <i className="fa-solid fa-arrow-pointer fa-bounce fa-lg"></i> &nbsp;&nbsp;Easy Apply&nbsp;
              <img className="w-12 h-7 " src="https://www.gethiredaustralia.com.au/wp-content/uploads/2020/04/2-cropped.png"></img>
            </span>
           
          </li>
        </ul>
      </div>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg hover:shadow-xl  drop-shadow-md sm:p-8 mt-2 mx-auto" type="button">
        <div className="flex justify-between text-gray-900  ">
          <div>
          <span className="text-md md:text-xl text-start item-baseline font-bold tracking-tight hover:underline decoration-1 font-sans">
            Python Developer
          </span>
          <div className="flex items-baseline text-slate-700 p-1">
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Amazon{" "}
          </span>
        </div>
        <div className="flex items-baseline text-slate-700  ms-1">
          <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Banglore
          </span>
        </div>

          </div>
         

          <div className=" w-10 h-10 md:w-16 md:h-16 flex items-end bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-03-amazon-gif-logo.jpg)' }}>
      
         </div>
          
        </div>
        
        <ul role="list" className="space-y-5 my-7  ">
          <li className="flex space-x-3 ">
          
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 flex items-center ">
            <i className="fa-solid fa-arrow-pointer fa-bounce fa-lg"></i> &nbsp;&nbsp;Easy Apply&nbsp;
              <img className="w-12 h-7 " src="https://www.gethiredaustralia.com.au/wp-content/uploads/2020/04/2-cropped.png"></img>
            </span>
           
          </li>
        </ul>
      </div>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg hover:shadow-xl  drop-shadow-md sm:p-8 mt-2 mx-auto" type="button">
        <div className="flex justify-between text-gray-900  ">
          <div>
          <span className="text-md md:text-xl text-start item-baseline font-bold tracking-tight hover:underline decoration-1 font-sans">
            Python Developer
          </span>
          <div className="flex items-baseline text-slate-700 p-1">
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Amazon{" "}
          </span>
        </div>
        <div className="flex items-baseline text-slate-700  ms-1">
          <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Banglore
          </span>
        </div>

          </div>
         

          <div className=" w-10 h-10 md:w-16 md:h-16 flex items-end bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-03-amazon-gif-logo.jpg)' }}>
      
         </div>
          
        </div>
        
        <ul role="list" className="space-y-5 my-7  ">
          <li className="flex space-x-3 ">
          
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 flex items-center ">
            <i className="fa-solid fa-arrow-pointer fa-bounce fa-lg"></i> &nbsp;&nbsp;Easy Apply&nbsp;
              <img className="w-12 h-7 " src="https://www.gethiredaustralia.com.au/wp-content/uploads/2020/04/2-cropped.png"></img>
            </span>
           
          </li>
        </ul>
      </div>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg hover:shadow-2xl  drop-shadow-md sm:p-8 mt-2 mx-auto" type="button">
        <div className="flex justify-between text-gray-900  ">
          <div>
          <span className="text-md md:text-xl text-start item-baseline font-bold tracking-tight hover:underline decoration-1 font-sans">
            Python Developer
          </span>
          <div className="flex items-baseline text-slate-700 p-1">
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Amazon{" "}
          </span>
        </div>
        <div className="flex items-baseline text-slate-700  ms-1">
          <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Banglore
          </span>
        </div>

          </div>
         

          <div className=" w-10 h-10 md:w-16 md:h-16 flex items-end bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-03-amazon-gif-logo.jpg)' }}>
      
         </div>
          
        </div>
        
        <ul role="list" className="space-y-5 my-7  ">
          <li className="flex space-x-3 ">
          
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 flex items-center ">
            <i className="fa-solid fa-arrow-pointer fa-bounce fa-lg"></i> &nbsp;&nbsp;Easy Apply&nbsp;
              <img className="w-12 h-7 " src="https://www.gethiredaustralia.com.au/wp-content/uploads/2020/04/2-cropped.png"></img>
            </span>
           
          </li>
        </ul>
      </div>

      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg hover:shadow-xl  drop-shadow-md sm:p-8 mt-2 mx-auto" type="button">
        <div className="flex justify-between text-gray-900  ">
          <div>
          <span className="text-md md:text-xl text-start item-baseline font-bold tracking-tight hover:underline decoration-1 font-sans">
            Python Developer
          </span>
          <div className="flex items-baseline text-slate-700 p-1">
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Amazon{" "}
          </span>
        </div>
        <div className="flex items-baseline text-slate-700  ms-1">
          <i className="fa-solid fa-location-dot"></i> &nbsp;&nbsp;
          <span className="text-md md:text-lg f tracking-tight hover:underline decoration-1">
            Banglore
          </span>
        </div>

          </div>
         

          <div className=" w-10 h-10 md:w-16 md:h-16 flex items-end bg-cover bg-center rounded-full" style={{ backgroundImage: 'url(https://res.cloudinary.com/zenbusiness/image/upload/v1670445040/logaster/logaster-2020-03-amazon-gif-logo.jpg)' }}>
      
         </div>
          
        </div>
        
        <ul role="list" className="space-y-5 my-7  ">
          <li className="flex space-x-3 ">
          
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 flex items-center ">
            <i className="fa-solid fa-arrow-pointer fa-bounce fa-lg"></i> &nbsp;&nbsp;Easy Apply&nbsp;
              <img className="w-12 h-7 " src="https://www.gethiredaustralia.com.au/wp-content/uploads/2020/04/2-cropped.png"></img>
            </span>
           
          </li>
        </ul>
      </div>
    
    </div>
  );
}

export default ListJobs;
