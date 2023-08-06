import React, { useEffect, useRef, useState } from "react";
import { useSocket } from "../../Features/Context/SocketProvider";
import axiosInstance from "../../Axios/Axios";
// import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import TimeConverter from "../Users/TimeConverter";
function Chat() {
  const{SeekerId,postID} = useParams()

  const {userInfo} = useSelector((state)=>state.auth)
  const messagesContainerRef = useRef(null)
  const socket = useSocket();
  const [messages, setMessages] = useState({});

  const [SendMessage, setSendMessage] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const currentDate = new Date();
  // const EmployeID = Cookies.get("UserId");
  const EmployeID = userInfo.id
  useEffect(() => {
    fetchChatMessages();
  }, []);
  useEffect(() => {
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (socket) {
      socket.onopen = () => {
        setIsConnected(true);
        console.log("WebSocket connection established.");
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed.");
        setIsConnected(false);
      };
    }
  }, [socket]);
  socket.onmessage = (event) => {
    console.log("message recieved", event.data);
    const receivedMessage = JSON.parse(event.data);
    const { content, sender, recipient, created_at ,postId} = receivedMessage.message;
    console.log(sender,SeekerId)
    if(sender == SeekerId && postID == postId){
      setMessages((Prevmessages) => [
        ...Prevmessages,
        { content, sender, recipient, created_at },
      ]);
      console.log(receivedMessage.message);
    }else{
      console.log('add notifications')
    }
   
  };

  const fetchChatMessages = async () => {
    console.log(SeekerId,'sekeee',postID)
    try {
      const response = await axiosInstance.get(`chats/messages/${SeekerId}/${postID}/`);
      console.log("chat message response", response.data.payload);
      setMessages(response.data.payload);
    } catch (error) {
      console.log(error);
    }
  };

  const HandleMessageChange = (event) => {
    setSendMessage(event.target.value);
  };

  const HandleSendMessage = () => {

    if (socket.readyState === WebSocket.OPEN) {
      if (SendMessage.trim() !== "") {
       
        console.log(socket.readyState,'socket state')
        socket.send(
          JSON.stringify({
            message: SendMessage,
            to: SeekerId,
            from: EmployeID,
            postID:postID,
            event: "chat",
          })
        );
        setMessages((Prevmessages) => [
          ...Prevmessages,
          { content:SendMessage, sender:EmployeID, recipient:SeekerId, created_at:currentDate.toISOString()},
        ]);
        setSendMessage("");

      }
    } else {
      console.log("WebSocket is not connected. Message not sent.");
    }
   
  };
  return (
    <div className="flex justify-center">
      <div className="w-full lg:w-10/12 p-1  lg:p-8 text-center  sm:p-8 sm:h-96 lg:h-auto  overflow-y-scroll no-scrollbar flex justify-center">
        <div className="w-full lg:w-10/12 h-96 lg:h-[34rem] shadow-md rounded-lg border border-gray-200 ">
          <div className="h-80 lg:h-[30rem] w-full  p-2 overflow-y-scroll no-scrollbar " ref={messagesContainerRef}>
            <div className="w-10/12 mx-auto ">
              {messages.length > 0 ? (
                messages.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-${
                      item.sender == SeekerId ? "start" : "end "
                    } mt-1 w-full text-gray-900`}
                  >
                    <div className={`text-sm font-normal  rounded-lg shadow-md p-2 ${item.sender == EmployeID?"bg-green-50":'bg-gray-50'}`}>
                      <p>{item.content} </p>
                      <p className="text-end text-xs text-gray-500"><TimeConverter created={item.created_at}/></p>
                    </div>
                  </div>
                ))
              ) : (
                <p></p>
              )}
            </div>
          </div>
          <div className="w-full  h-16 lg:h-[4rem]  mx-auto ">
            <label htmlFor="chat" className="sr-only">
              Your message
            </label>
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <textarea
                id="chat"
                rows="1"
                value={SendMessage}
                onChange={HandleMessageChange}
                className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
              <button
                type="button"
                onClick={HandleSendMessage}
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
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
