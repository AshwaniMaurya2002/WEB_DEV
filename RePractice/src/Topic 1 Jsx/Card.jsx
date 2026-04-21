

//fragement is present inside the node module inside react.
import  { Fragment } from 'react'

const Card = () => {

    const emp={
        empName:"Rohan",
        age:69,
        skill: "timepass",
        pic:"https://www.dpzone.in/wp-content/uploads/1/Cool-DP-Images-05.webp"
    }


  return (
    <Fragment>

    <h1>{emp.empName}</h1>
    <h2>{emp.age}</h2>
    <h2>{emp.skill}</h2>
    <img src={emp.pic} alt="Alternative Image" />
    </Fragment>
  )
}

export default Card;
