

const Card=()=>{

    const user={
        username:"Ashwani Maurya",
        age:23,
        email:"ashwanikumarmaurya2002@gmail.com",
        city:"Prayagraj",
        pic: "https://avatars.githubusercontent.com/u/95295016"
    }

    return <>

    <h2>{user.username}</h2>
    <h2>{user.age}</h2>
    <h2>{user.city}</h2>
    <h2>{user.email}</h2>
    <h2>{user.pic}</h2>

    </>
}

export default Card;