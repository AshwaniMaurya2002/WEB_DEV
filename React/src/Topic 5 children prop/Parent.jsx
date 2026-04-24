import React from "react";
import Child from "./Child";

const Parent = () => {
  const skills = ["javascript", "react", "angular", "vue"];

  return (
    <div id="parent">
      <ul>
        {skills.map((element, index) => (
          <Child key={index} name={element} />
        ))}
      </ul>
      {/* <Child> */}
      {/* inside this we can write we can access it using props.children  */}
      {/* <h3>Parent Component</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          sapiente.
        </p> */}
      {/* </Child> */}
    </div>
  );
};

export default Parent;
