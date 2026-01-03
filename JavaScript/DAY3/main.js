
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




//Exaple 4 
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
 
//parent ki property ko child access krega to clouser naam ka area bnega aur usme sirf vhi value hoga jo child ko chiye aur tbtk rhega jbtk child ko mile na ya access kr rha ho

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



