

//fragement is present inside the node module inside react.
import  { Fragment } from 'react'
import   './Card.css'

const Card = () => {

    const emp={
        empName:"Rohan",
        age:69,
        skill: "timepass",
        pic:"https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }


  return (
    <Fragment>

    <h1>{emp.empName}</h1>
    <h2>{emp.age}</h2>
    <h2>{emp.skill}</h2>
    <img src={emp.pic} alt="Alternative Image" className='cat' />
    </Fragment>
  )
}

export default Card;
