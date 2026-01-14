//! types of variable
// 1) Global Variable;
// debugger;
// var a1=10; //Global scope
// let b1=20;  //Script scope
// const c1=30;//Script scope

const { Children } = require("react");


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

// debugger;
// //! funtion greet(){
//   //CONSOLE.log("Welcome")  hosted or moved to the top

// function greet(){
//     console.log("Welcome");

// }
// greet();




//! Anonymous function :- function without name

// function(){}


// //! 3) Function Expression
// debugger;
// // console.log(a1);   UD because of hosting in var
// //a1()    not a function  only named function is accessable before the funcftion
// var a1=function(){
//     console.log("WELCOME TO FUNCTION EXPRESSION");

// };


// console.log(a1);  //print complete funtion like (){}

// a1(); //give only function execute the funtion



//Example

// debugger;

// console.log("start");
// var a=10;
// console.log(a,b);
// let c;
// console.log(c,b);
// demo1();
// var b=function(){
//     console.log("welcome");


// }
// console.log(b);
// b();
// function demo1(){
//     console.log("demo 1");

// }
// console.log(demo1);
// console.log("end");



//! PARAMETERIZED  FUNCTION


// function sum(n1=0,n2=0,n3=0)//to be safe with NaN use default value
//     {
//         let ans=n1+n2+n3;
//         console.log(ans);


//     }

// sum(10,20,30);//gives 60
// sum(100,200);//gives NaN not a nummber bcz 100+200+undefined is not possible
// sum();// same logic NaN




// function sum1(n1=0,n2=0,n3=0)//to be safe with NaN use default value
//     {
//         let ans=n1+n2+n3;
//         console.log(ans);


//     }


// sum1(10,60,30,40,54);
//it takes 1st 3 value 



//! 5)REST PARAMETERIZED FUNCION
// function demo3(n1,n2,...rest){//REST IS REST ARRAY 
//     console.log(n1,n2,rest);//10 20 [30,40,50]

//     console.log(rest);//[30,40,50]<-- PURE ARRAY
//     console.log(arguments);//[10,20,30,40,50,...]<--- ARRAY LIKE OBJECT (IMPURE)



// }
// demo3(10,20,30,40,50);


// Question  diff b/w rest and arguments?
// Ans:- rest is pure array where we can use array methods but arguments is array like object where we cant use array methods directly




// //! 6)RETURN-TYPE FUNCTION

// function getFullName(fname="",lname=""){
// //string interpolation
// let fullName=`${fname} ${lname}`//string interpolation is used for concatinatoin so we can avoid + + symbol 
//  return fullName;
// }


// function displayName(){
//     let value=getFullName();
//     document.writeln(`<h2><em>${value}</em></h2>`)

// }

// displayName();






//! Nested Funtion
// debugger;
// function parent(){
//     console.log("I am Parent");
//     function child(){
//         console.log("I am child");

//     }

//     child();
// }

// parent();


//? Example 2


function parent() {

    let money = 80000;
    console.log(money);

    function child() {
        let savings = 1000;
        console.log(savings);

    }

    child();
}

parent();


