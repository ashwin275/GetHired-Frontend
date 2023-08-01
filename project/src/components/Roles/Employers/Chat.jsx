import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { io } from 'socket.io-client';
function Chat() {
  const { RoomId } = useParams();
 

  useEffect(() => {
    const websocket_url = import.meta.env.VITE_WEBSOCKET_URL;
    console.log('websocket', websocket_url);
  
    let authTokens = Cookies.get('Tokens') ? JSON.parse(Cookies.get('Tokens')) : null;
    console.log(authTokens.access, 'chat token');
  
    if (authTokens && authTokens.access) {
      // const socket = io(`${websocket_url}${RoomId}/`, {
        
       
        
      //       extraHeaders: {
      //         'authorization': 'Bearer abc',
      //       },
         
       
      //   transports: ["websocket"], // Only use WebSocket, disable polling
      // });
  
     
      return () => {
        // Clean up the WebSocket connection if needed
        socket.close();
      };
    }
  }, []);
  
  
  


  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-10/12 p-1  lg:p-8 text-center bg-white lg:border border-gray-200 rounded-lg  sm:p-8 sm:h-96 lg:h-auto  overflow-y-scroll no-scrollbar flex justify-center">
        <div className="w-full lg:w-10/12 h-96 lg:h-[34rem] shadow-md rounded-lg border border-gray-200 ">
          <div className="h-80 lg:h-[30rem] w-full  p-2 overflow-y-scroll no-scrollbar">
            <p>Hello {RoomId}</p>
          </div>
          <div className="w-full  h-16 lg:h-[4rem]  mx-auto ">
            <form>
              <label htmlFor="chat" className="sr-only">
                Your message
              </label>
              <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
                <textarea
                  id="chat"
                  rows="1"
                  className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
                <button
                  type="submit"
                  className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                >
                  <svg
                    className="w-5 h-5 rotate-90"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                  </svg>
                  <span className="sr-only">Send message</span>
                </button>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
