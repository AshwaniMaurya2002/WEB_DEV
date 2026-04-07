import React from 'react'
import boy from "../assets/boy.webp"
import "./UserCard.css"

const UserCard = () => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h1 className='heading'>Ashwani Maurya</h1>
        <img src={boy} alt="error" id='image' />
        <p> Hellow  this is me started learning the react js</p>

      </div>
    </div>
  )
}

export default UserCard
