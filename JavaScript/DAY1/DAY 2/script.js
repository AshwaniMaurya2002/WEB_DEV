//! types of variable
// 1) Global Variable;
// debugger;
// var a1=10; //Global scope
// let b1=20;  //Script scope
// const c1=30;//Script scope


// if(10>2)
// {
//     console.log(a1,b1,c1);

// }


// for(let i=0;i<5;i++){
//     console.log(a1,b1,c1);
    
// }


// function demo1(){
//     console.log(a1,b1,c1);
    
// }
// demo1();


// if(100>2){
//     var x1=100;
//     let x2=200;
//     const x3=300;
// }

// console.log(x1); //print 100 global scope access outside the block any where
// console.log(x2);  //not  exevute because let and const are script scope so it is accessable inside the block only  not like var.

// console.log(x3);  //not  exevute because let and const are script scope so it is accessable inside the block only  not like var.


// function demo2(){
//     var a1=1000;
//     let a2=2000;
//     const a3=3000;

//     console.log(a1,a2,a3);

// }
// demo2();
// console.log(a1,a2,a3);

 
//! in let constt phle se undefined nhi hota execution k time pr undefined hota h 
//! but var me 1st time hi ho jata h aur usko skip kr deta h



//! Functions IN JavaScript;

// Named Function :-  function with name is called named function
//! function hosting is possible only in named Fuction

debugger;
// //! funtion greet(){
//   //CONSOLE.log("Welcome")  hosted or moved to the top

// function greet(){
//     console.log("Welcome");
    
// }
// greet();




//! Anonymous function :- function without name

// function(){}


//! 3) Function Expression

// console.log(a1);   UD because of hosting in var
//a1()    not a function  only named function is accessable before the funcftion
var a1=function(){
    console.log("WELCOME TO FUNCTION EXPRESSION");
    
};


console.log(a1);  //print complete funtion like (){}

a1(); //give only function execute the funtion



















