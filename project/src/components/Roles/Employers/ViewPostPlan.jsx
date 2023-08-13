import React, { useEffect, useState ,useContext} from "react";
import axiosInstance from "../../Axios/Axios";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import Paypals from "./Paypals";
import PaymentSuccess from "./PaymentSuccess";
import { PaymentContext } from "../../Features/Context/Payments";


function ViewPostPlan() {
  const client_id = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  const { paymentSucces } = useContext(PaymentContext);

  const initialOptions = {
    clientId: client_id,

    intent: "capture",
  };
  const [posts, setplans] = useState({});
 
  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("recruiters/post-plans/");
      setplans(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    
    <PayPalScriptProvider options={initialOptions}>
      
      <PaymentSuccess show={paymentSucces}/>
      
      <div className="lg:w-5/6 mx-auto lg:p-4 text-center  border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="grid mb-8 md:mb-12 md:grid-cols-2">
          {posts.length > 0 ? (
            posts.map((item) => (
              <div
                className="w-5/6 mx-auto m-2 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 place-content-stretch"
                key={item.id}
              >
                <h5 className="mb-4 text-xl font-medium text-gray-500 capitalize">
                  {item.planName}
                </h5>
                <div className="flex items-baseline text-gray-900">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-extrabold tracking-tight">
                    {item.amount}
                  </span>
                  <span className="ml-1 text-xl font-normal text-gray-500">
                    /plan
                  </span>
                </div>
                <ul role="list" className="space-y-5 my-7">
                  <li className="flex space-x-3">
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Check icon</title>
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                      {item.no_of_count} posts
                    </span>
                  </li>
                  {item.feature_one && (
                    <li className="flex space-x-3">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Check icon</title>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {item.feature_one}
                      </span>
                    </li>
                  )}
                  {item.feature_two && (
                    <li className="flex space-x-3">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Check icon</title>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {item.feature_two}
                      </span>
                    </li>
                  )}
                  {item.feature_three && (
                    <li className="flex space-x-3">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Check icon</title>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {item.feature_three}
                      </span>
                    </li>
                  )}
                  {item.feature_four && (
                    <li className="flex space-x-3">
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Check icon</title>
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                        {item.feature_four}
                      </span>
                    </li>
                  )}
                </ul>
                <div className="flex  justify-center ">
                 <Paypals amount={item.amount} id={item.id} />
                </div>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    </PayPalScriptProvider>
   
  );
}

export default ViewPostPlan;
