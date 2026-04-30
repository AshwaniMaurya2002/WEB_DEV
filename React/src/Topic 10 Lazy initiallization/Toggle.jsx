import { useState } from "react";

const Toggle = () => {
  const [count, setCount] = useState(() => {
    console.log("render function");
    return 0;
  });

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Toggle;
