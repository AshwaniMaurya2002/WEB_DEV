import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(44)
        .fill("")
        .map((e, index) => (
          <div key={index} className="box"></div>
        ))}
    </div>
  );
};

export default Shimmer;
