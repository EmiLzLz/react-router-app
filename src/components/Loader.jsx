import React from "react";

function Loader() {
  return (
    <div className="lds-roller w-full flex justify-center">
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

export default Loader;