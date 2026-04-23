import React, { use } from 'react'
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

         {/* method one to send data but it is present inside the props.user[0].username */}
        {/* <Card   user={user} /> */}




            {/* method 2 you can call the by sending data like this  with index number */}
        {/* <Card {...user[0]}/>
        <Card {...user[1]}/>
        <Card {...user[2]}/> */}





        
      
    </div>
  )
}

export default Parent
