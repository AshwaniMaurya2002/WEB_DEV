import React from "react";

const Child = ({ name }) => {
  // return <div id="child">{props.children}</div>;

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Child;
