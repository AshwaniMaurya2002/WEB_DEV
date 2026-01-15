

let arr=[10,20,30,40,50]

// let val=arr.forEach((Element,index,arr)=>{
//    console.log(Element,index);
//     //* return Element+5;
// })



// let val1=arr.map((Element,index,arr)=>{
//    console.log(Element,index);
//     return Element+5;
// })
// console.log(val1);





// let val=arr.map((Element)=>Element>=20)

// console.log(val);
//spread
//  console.log(...arr);

// let val=arr.find(Element=>Element>20)
// console.log(val);

// let val=arr.findIndex(Element=>Element===30)
// console.log(val);

// let val=arr.reduce((acc,Element,index,arr)=>{
//             console.log(acc);
//             return acc+Element
// },0)




// // API testing

// //sbse phle server se fetch kia data store kia
// let promise=fetch("https://jsonplaceholder.typicode.com/comments")

// console.log(promise);

// //yha store hoga promise milega then tb chlega jb promise fullfilled ho aur response dega
// promise.then((response)=>{

//     //usss response ko ab ham json se js file me convert kr dege using the .json method
//  let promise2=response.json();
//  console.log(promise2);

//  //after converting using json methods it is stored in promise 2 which again gives a 2nd promise if gives us data 
//  //and if the promise fullfilled then block executed or else catch block runs
//     promise2.then((data)=>{
//         console.log(data);
//     })

//     //run when promise rejected
// promise.catch((error)=>{
//     console.log(error);
// })


// })

// //runs when promise is rejected
// promise.catch((error)=>{
//     console.log(err);
    
// })


// //it runs always either the promise accepted or rejected
// promise.finally(()=>{
//     console.log("API completed");
// })



// All JavaScript data types and typeof operator

// // Primitive types
// console.log(typeof 42); // "number"
// console.log(typeof "hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof Symbol("id")); // "symbol"
// console.log(typeof 42n); // "bigint"

// // Object types
// console.log(typeof null); // "object" (quirk in JS)
// console.log(typeof {}); // "object"
// console.log(typeof []); // "object"
// console.log(typeof function(){}); // "function"
// console.log(typeof new Date()); // "object"
// console.log(typeof /regex/); // "object"

// console.log(typeof NaN);

// if(true)
// {
//     var x=10;
//     let y=20;
// }

// console.log(x,y);




// console.log(typeof typeof 10); //string

//* currying


// // Currying: A function that takes multiple arguments one at a time
// function add(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         }
//     }
// }

// console.log(add(2)(3)(4)); // 9

// // Arrow function version
// const multiply = (x) => (y) => (z) => x * y * z;
// console.log(multiply(2)(3)(4)); // 24

// // Practical example: Creating specialized functions
// const greet = (greeting) => (name) => `${greeting}, ${name}!`;
// const sayHello = greet("Hello");
// console.log(sayHello("Alice")); // Hello, Alice!




// let object={
//     id:1,
//     fname:"MOHIt",
//     lname:"singh"
//     , studClass:10
//     , getFullName:function (){
//         console.log(`${this.fname} ,${this.lname}`);
//     }
// ,
//     user:{
//         id:2,
//         fullName:"Rohit"
//         , address:{
//             pincode:211011,
//             state:"UP",
//             city:"Noida"
//         }
//     }
// }






// let {user:{address:{pincode:pc}}}=object;
// console.log(pc);




// function greet(fname,lname,studClass){
//     console.log(`${this.fname},${this.lname} belongs to ${this.studClass}`);
// }
// let val=greet.call(object)
// console.log(val);

// object.getFullName();

// let {fname:full}=object;

// console.log(full);



// let bindedObject=greet.bind(object)

// bindedObject();


//What is Object
















