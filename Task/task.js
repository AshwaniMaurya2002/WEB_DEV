


const signupaFormEL=document.getElementById("singup-form")

signupaFormEL.addEventListener("submit",(e)=>{

    e.preventDefault();

    const usernameEL=document.querySelector("#username")
        const emailEL=document.querySelector("#email")
    const passwordEL=document.querySelector("#password")

    let newUser={
        username:usernameEL.value.trim(),
        email: emailEL.value.trim(),
        password:passwordEL.value.trim(),


    }

    console.log(newUser);


    //! get user data from local storage if not present then store [] empty array
    const allSingupUSer=JSON.parse(localStorage.getItem("user"))||[];

    console.log(allSingupUSer); //[{}]

    //! Push new user in array
    allSingupUSer.push(newUser) 
    console.log(allSingupUSer);  //[{},{}]


    //! set user array in local

    localStorage.setItem("user",JSON.stringify(allSingupUSer))

    //! clear input fields;

    usernameEL.value=""
    emailEL.value=""
    passwordEL.value=""


    
})


window.addEventListener("DOMContentLoaded",()=>{
    displaySingupUser();
})




//display useron Ui
function displaySingupUser(){
    let alluser=JSON.parse(localStorage.getItem("user") ) ||[];

    if(alluser.length===0){
        const pTag=document.createElement("p")
        pTag.textContent="NO user available"
        document.body.append(pTag)
    }
    else{
        alluser.map((ele)=>{
            const divTag=document.createElement("div")
            divTag.innerHTML=`
            <h2>UserName: ${ele.username}</h2>
            <h2>Email: ${ele.email}</h2>

            `

            document.body.append(divTag)
        })
    }
}