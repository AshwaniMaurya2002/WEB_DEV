// console.log("this is GEC: ",this);

// function greet(){
//     console.log("This is regular function: ",this);
    
// }
// greet();

// const sayHi=() =>{
//     console.log("This in arrow function:",this);
    
// };

// sayHi();

// const obj={
//     fullname: "Nitish",
//     age:24,
//     skills:"Batsman",
//     info:function info(){
//             console.log("This is regular named method:",this);
//          }
//         details:()=>{
//             console.log("This is arrow function in object:",this);
//         }
//     }

//  obj.info();
//  obj.details();


// const toggleBtn=document.getElementById("toggle");

// toggleBtn.addEventListener("click",function (){
//     console.log("This in event listener arrow  Callback: ",this);
// });


const user={
    fullname:"Tinku singh",
    age:24,
    outer: function outer(){
        console.log("This is outer function: ",this);   
        
        const inner=() =>{
            console.log("This is inner function: ",this);
        }
        inner()
    }


}
user.outer();