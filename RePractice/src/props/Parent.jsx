import React from "react";
import Children from "./Children";

const Parent = () => {
  const name = "Ashwani";
  return (
    <div>
      <Children name={name} />
    </div>
  );
};

export default Parent;
