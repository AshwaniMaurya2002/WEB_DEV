import React from "react";

const Child = ({ name }) => {
  // return <div id="child">{props.children}</div>;

  return (
    <div>
      <li>
        <h2>{name}</h2>
      </li>
    </div>
  );
};

export default Child;
