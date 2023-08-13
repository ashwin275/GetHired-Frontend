import React,{createContext,useMemo,useContext} from "react";
import Cookies from "js-cookie";
// import io from "socket.io-client";

const SocketContext = createContext(null);

export const useSocket = ()=>{

    const socket = useContext(SocketContext);
    return socket;
}


var ws_path = "wss://ebikesforu.shop/ws/chat/";
// var ws_path = "ws://127.0.0.1:8000/ws/chat/";



    export const SocketProvider = (props) => {
        let userId = Cookies.get("UserId") ? Cookies.get("UserId") :null ;
        
        console.log('socket userid',userId)
        const socket = useMemo(() => {
            
            if (userId) {
                return new WebSocket(`${ws_path}${userId}/`);
              } else {
              
                return null;
              }
          
          
        }, [userId]);
        if (!socket) {
            return null;
          }
    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}