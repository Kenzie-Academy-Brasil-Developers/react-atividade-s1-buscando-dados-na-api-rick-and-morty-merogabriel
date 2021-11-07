import React from "react";

function index({ name, img, status }) {
  return (
    <div className="character">
          <p>{name}, {status}</p>
          
      <img src={img} alt="" />
    </div>
  );
}

export default index;
