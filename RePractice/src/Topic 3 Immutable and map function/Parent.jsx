import React from 'react'
import Card from "../Topic 3 Immutable and map function/Card"

const Parent = () => {

    const player=[

        {playername:"Ashwani", age:23 ,team:"RCB",gf:"unpossible"},
        {playername:"Priyanshu", age:16 ,team:"MI", gf:"hua krti thi"},
        {playername:"Nitish", age:24 ,team:"CSK", gf:"mil gyi h"},
        {playername:"Ayush", age:25 ,team:"RR", gf:"mil gyi bass banana hai"},
        {playername:"Sumit", age:28 ,team:"SRH" ,gf:"hidden"},
    ]



  return (
    <div>
     
     {
        player.map((element)=>  <Card  {...element}/>)
     }
    </div>
  )
}

export default Parent
