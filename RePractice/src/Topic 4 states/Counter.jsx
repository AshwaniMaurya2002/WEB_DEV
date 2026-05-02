import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter is:{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Click to increase count
      </button>
    </div>
  );
};

export default Counter;
