import React from 'react'
import './Card.css'

const Card = (props) => {
console.log(props);
  return (

    <div className='card-component' style={{border:"5px solid black  ",backgroundColor:"aqua",textAlign:"center",width:500, marginLeft:"35%" ,marginBottom:"20px"    }}>

        <h1>Name:-{props.playername}</h1>
        <h1>Age:-{props.age}</h1>
        <h1>Team:-{props.team}</h1>
        <h1>Girlfriend:-{props.gf}</h1>
      
    </div>
  )
}

export default Card
