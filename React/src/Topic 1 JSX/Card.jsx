import React from "react";
import './Card.css'
const Card=()=>{

    const user={
        username:"Ashwani Maurya",
        age:23,
        email:"ashwanikumarmaurya2002@gmail.com",
        city:"Prayagraj",
        pic: "https://avatars.githubusercontent.com/u/95295016",
        description:"Learning React From Scratch"
    }

    return <>

    <div className="card-item">
            <img src={user.pic} alt="User Profile"/>
    <h2>{user.username}</h2>
    <h2>{user.age}</h2>
    <h2>{user.city}</h2>
    <h2>{user.email}</h2>
    <h3>{user.description}</h3>
    </div>

    </>
}

export default Card;