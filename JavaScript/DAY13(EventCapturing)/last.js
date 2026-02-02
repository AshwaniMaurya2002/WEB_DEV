
// ! Event Propogation  ::==> the process how event travels in dom tree 

const section=document.querySelector("section")
const article=document.querySelector("article")
const div=document.querySelector("div")



//? it propogation has 2 phase 

//!  arr.addEventListner("event",callback,use-capture)
//1) caputring phase parent to child ===1  
//2) bubbling phase child to parent  ===0  by default


//! interview Questions

//? stopPropogation():==> prevents further propagation of the current event in the capturing and bubbling phases
//? stopImmediatePropagation():  stops event to propagate either in bubbling or captuirng phase and it also prevents several listners that
//?are  attached tp the same element for same event type to get called


section.addEventListener('click',(e)=>{
e.stopPropagation();
    section.style.backgroundColor="yellow"
    console.log("section");
},0)

article.addEventListener('click',(e)=>{
    e.stopPropagation();
    article.style.backgroundColor="red"
    console.log("article");
},0)

div.addEventListener('click',(e)=>{
    e.stopImmediatePropagation();
    //stop immediate will stop the bubbling or capturing phase and also stop the other addeventListner that are used in the same element
    
    div.style.backgroundColor="orange"
    console.log("div");
},0)

div.addEventListener('click',()=>{
  
    console.log("click 2");
},0)
div.addEventListener('click',()=>{
    console.log("Click 3");
},0)


