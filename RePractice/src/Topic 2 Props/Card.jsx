
const Card=(props)=>{



    //!use method2
    const{username="chombu",age,team,skill}=props

    return (
        //?use no 1
        <div  style={{border:"2px solid black " , margin:"20px", textAlign:"center"}}>

            <h1>{username}</h1>
            <h1>{age}</h1>
            <h1>{team}</h1>
            <h1>{skill}</h1>

        </div>
    )
}

export default Card;