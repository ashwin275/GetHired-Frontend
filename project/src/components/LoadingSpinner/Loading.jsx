import React from "react";
import "./loading.css";
import logo from "../../images/logo.png";
function Loading() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col  bg-zinc-50  h-screen w-full">
      <section class="dots-container mx-auto mt-40 flex flex-col item-center">
        <div className="  mb-3 flex item-center ">
          <img src={logo} className=" w-56 h-12"></img>
        </div>
        <div className="flex  justify-center ">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </section>
    </div>
  );
}

export default Loading;
