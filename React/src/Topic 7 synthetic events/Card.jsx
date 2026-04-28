import React from "react";

const Card = () => {
  const changeText = (e) => {
    console.log("clicked",e);
  };

  return (
    <div>
      <h2> Card Component</h2>
      {/* dont write changeText() auto load
      user {changeText }  only
      */}
      <button onClick={changeText}>Click</button>
    </div>
  );
};

export default Card;
