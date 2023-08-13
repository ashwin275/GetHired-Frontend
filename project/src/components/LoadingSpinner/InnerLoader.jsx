import React from "react";

import "./Inners.css"
function InnerLoader() {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col justify-center opacity-80  bg-zinc-50   h-screen w-full">
      <div class="spinner  mx-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default InnerLoader;
