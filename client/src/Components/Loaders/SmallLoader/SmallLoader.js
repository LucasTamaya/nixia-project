import React from "react";

import "./SmallLoader.css";

function SmallLoader() {
  return (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default SmallLoader;
