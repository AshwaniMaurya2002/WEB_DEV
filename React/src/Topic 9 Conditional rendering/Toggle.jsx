import React, { useState } from "react";
const Toggle = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      {login ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
      <button
        onClick={() => {
          setLogin(!login);
        }}
      >
        Toggle{" "}
      </button>
    </div>
  );
};
export default Toggle;
