import React from "react";

import "./LargeLoader.css";

function LargeLoader() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LargeLoader;
