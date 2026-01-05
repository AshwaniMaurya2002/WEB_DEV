
//Day 

// function parent(){

//      let money =80000;
//  console.log(money);
 
//     function child(){
//         let savings=1000;
//         console.log(savings+money);
        
//     }

//     child();
// }

// parent();


//? closure example and lexical scoping

// Exaple 4 
// debugger;
// function parent(){

//      let money =80000;
//  console.log(money);
 
//     function child(){
//         let savings=1000;
//         console.log(savings+money);//! money is accessed due to the clouser property
        
//     }

//     return child();
// }

// let val=parent();
// console.log(val);
// val();


//? clouser:- its a memory which is created whenever we try to access parent func property inside the child func

//? lexical Scoping :- the ability of js engine to search the variable outside the current  scope
 
//parent ki property ko child access krega to clouser naam ka memory area bnega aur usme sirf vhi value hoga jo child ko chiye aur tbtk rhega jbtk child ko mile na ya access kr rha ho

//clouser and lexical scoping(ablility to search outside the scope)


//! higher order func:- a func which can perform atleast one of these task

//! 1) it can accept another func as argument
//any one satisfied
//! 2)return a func


//?  calculate is Higher order function
// debugger;

// function calculate(a,b,operation){
//     return operation(a,b);
// }


// function add(n1,n2){
//     return n1+n2;
// }

// function subtract(n1,n2){
//     return n1-n2;
// }

// //call for add
// let val=calculate(10,20,add)
// console.log(val)

// //call for subtract
// let val1=calculate(101,20,subtract)
// console.log(val1)

//execution start from function call calculate 




// case  2  return a function

// function greet(message){
//     return function(name){
//         console.log(`${message} ${name}`);
        
//     };
        
// }

// let val3=greet("Welcome");
// val3("John");




//! callback funtion
// function callback(){
//     console.log("welcome");
// }

// function greet(cb){
// cb();
// }
// greet(callback);


//!example

// let arr1=[10,20,30]
// arr1.forEach(function(element,index,arr)
// {
// console.log(element,index,arr);
// })

//this is used to print element index and arr we can remove argument it works like a for loop


//!10) Most imp]]-- Arrow funtion:- Introduced in es6 , to declare function in shorteer syntax

let a1=() =>{
console.log("ARROW FUNCTION");
}
a1();


//2nd way to use

let a2= _=>{

}
a2();

//way 3

// if only we have one parameter
let a3=x =>{
    console.log(x);
}

a3();

//way 4 multiple paramenter
// paranthesis requied


let a4=(x=10,y=432)=>{
    console.log(x,y);

}
a4();


//way 5

let a5=() => console.log("Arrow funtion 5");
a5();

//way6 : explicit return :->return keyward {} are mandatory

let a6=() =>{
    return "arrow funtion 6"
}
console.log(a6());
//way7  implicit:- return keyward {} are not madatory

let a7=(n1,n2)=>n1+n2;
console.log(a7(5,3));







