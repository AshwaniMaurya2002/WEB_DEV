import React from "react";
import Child from "./Child";

const Parent = () => {
  const user = {
    name: "ashwani",
    age: 24,
  };

  return (
    <div id="parent">
      <Child {...user}></Child>

      <Child>
        <h3>Parent Component</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          sapiente.
        </p>
      </Child>
    </div>
  );
};

export default Parent;
