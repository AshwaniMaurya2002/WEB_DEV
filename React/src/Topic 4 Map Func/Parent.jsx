import React from 'react'
import Card from './Card'

const Parent = () => {

    const user=[
        {username:"ashwani "  , age:23 ,city:"Noida"},
        {username:"rohan "  , age:29 ,city:"Noida"},
        {username:"mohit "  , age:33 ,city:"Noida"},
        {username:"shiv "  , age:25 ,city:"Noida"},
        {username:"rupesh "  , age:22 ,city:"Noida"}
    ]

  return (
    <div>

        {/**  If you want to pass all deta 
         * 
         * hard coded then pass like
         * 
         * <Card  >
         * this method send all data to the Card
         */}
        <Card   user={user} />
      
    </div>
  )
}

export default Parent
