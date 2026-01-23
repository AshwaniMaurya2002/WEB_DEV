

const formTag=document.getElementById("singup-form")

console.log(formTag);


formTag.addEventListener('click',(e)=>{
e.preventDefault();

  const Name=document.getElementById("username");
    const Email=document.getElementById("email")
    const PassWord=document.getElementById("PassWord")    

let user={

    usermameEL:Name.value(),
    emailEL:Email.value(),
    passwordEL:PassWord.value(),

  
}   
console.log(user);


//!send data to localstorage

const allSingupUSer=JSON.parse(localStorage.getItem("user"))||[];

console.log(allSingupUSer);

//? push kr dege agar na h to
allSingupUSer.push(user)
console.log(allSingupUSer);


//?set user array in local
localStorage.setItem("user",JSON.stringify(allSingupUSer))

})


//! display on windows

window.addEventListener('DOMContentLoaded',()=>{
    displaySingupUser();
})


function displaySingupUser(){
    
}

