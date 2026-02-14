
// const divTag=document.createElement("div")

// divTag.innerHTML="<p><i><del>Lorem ipsum</p>"
// document.body.append(divTag)
// divTag.style.fontSize="43px"
// divTag.style.color="red"
// divTag.style.border="10px solid black"
// divTag.style.textAlign="center"


const UserTag=document.getElementById("user").value
const PassTag=document.getElementById("pass")
const BtnTag=document.getElementById("btn")
const pTag=document.getElementById("p")


function formSubmit(e){
    

    document.pTag.innerText=UserTag;

}
