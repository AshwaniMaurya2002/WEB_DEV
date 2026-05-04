import React, { useEffect, useState } from "react";

const Toggle = () => {
  const [login, setLogin] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      return;
    }
    console.log("use effect running");
  }, [count]);
  //   we can pass run once useEffect(()=>{},[])  or  run one count change useEffect(()=>{},[count ]) or useEffect(()=>{}) run always

  console.log("toggle running");

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Add Count</button>

      {login ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
      <button onClick={() => setLogin(!login)}>Click</button>
    </>
  );
};

export default Toggle;
