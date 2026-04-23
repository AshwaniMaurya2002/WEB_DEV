import React from 'react'

const Card = (props) => {
    console.log(props);
    
  return (
    <div>

        <h2>{props.username}</h2>
        <h2>{props.age}</h2>
        <h2>{props.city}</h2>
        <h2>===============</h2>
       
      
    </div>
  )
}

export default Card
