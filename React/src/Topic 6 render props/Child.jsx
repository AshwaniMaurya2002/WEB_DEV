import React from "react";

const Child = ({ render = "HELLO" }) => {
    // if you pass value then the function will render or other wise 
  return (
    <div>{typeof render == "function" ? render("Rohit Sharma") : render}</div>
  );
};

export default Child;
