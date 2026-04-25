import React from "react";
import Child from "./Child";
const Parent = () => {
  return (
    <div>
      <Child render={(name) => <h2>Hello {name}</h2>} />
    </div>
  );
};

export default Parent;
