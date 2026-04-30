import React, { useState } from "react";

const Home = () => {
  const [login, setLogin] = useState(false);

//   if (!login) {
//     return (
//       <div>
//         <h1>Please login ....!!!</h1>

//         <button onClick={() => setLogin(!login)}>login</button>
//       </div>
//     );
//   }

//   return <div>
//     <h1>Welome Home</h1>

//     <button onClick={() => setLogin(!login)}>Logout</button>
//   </div>;

return (
    <div>
        {
            login?(<div> <h1>please logout</h1>
                        <button onClick={()=>setLogin(!login)}>logout</button>
                        </div>
            ):(<div>
                <h1>please login</h1>
                <button onClick={()=>setLogin(!login)}>login</button>
            </div>)
        }
    </div>
)
};

export default Home;
