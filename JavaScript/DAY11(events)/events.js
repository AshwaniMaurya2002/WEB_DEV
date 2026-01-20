
//? events are the action perfromed by the 

//!Mouse events

function singleclick(){
    console.log("single click");
}

function doubleclick(){
    console.log("double click");
}


function cursorEnter(){
    console.log("cursor entered");
}


function onmouseLeave(){
    console.log("cursor exits   ")}


function cursorMove(){
    console.log("Moving Cursor");
}



//! Form events

function onkeypresss(){
    console.log("key is pressed");

}

function onkeyupp(){
    console.log("key is released");
}


function focusChange(){
    console.log("focus changed");
}


//input se nikalana hoto .dot use kreweg
//h1 h2 section vgra se niakala hoto .textContent hoga

//! from event

function formHandle(e){
    e.preventDefault();
    console.log("form Submitted");

    let user={
        email:e.target[0].value,
        password:e.target[1].value

    }

    console.log(user);
    alert(`Welcome ${user.email}`)
}





//! DOM manupulation


//* how to create element in HTML:- document.createElement()


const ptag=document.createElement("p");
const divTag=document.createElement("div")

ptag.textContent="<em>hello</em>"
divTag.innerHTML="<em>HEllo</em>"
console.log(ptag);
console.log(divTag);



const imgTag=document.createElement("img")


//how to add attributes in here : 2ways 

// 1) using property
imgTag.src=""
imgTag.height=200;

// 2)using methods
imgTag.setAttribute("alt","bird")
//append only single node

document.body.appendChild(imgTag)
document.body.appendChild(divTag)

//for multiple append use append()

document.body.append(imgTag,divTag,ptag)





















