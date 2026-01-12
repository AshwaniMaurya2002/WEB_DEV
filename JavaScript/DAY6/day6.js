

// //! OBJECT

// //?Object literal
// //    {a:b}  a is key b is value together we called it property
// // let obj={id:1,name:"Mohit",isLoggedIN:true};
// // obj.company="HCL"//add int the object
// // console.log(obj);

// // //?Object Constructor
// // let obj2=new Object({id: 2,name:"rohan"})
// // obj2.company="TCS"  //used to add in the object
// // console.log(obj2);



// //! CRUD

// let student1={
//     id:"231AS",
//     fname:"HOHIT",
//     lname:"KUMAR",
//     age:15,
//     city:"DELHI",
//     class:8,
// }

// let x="city"

// //?READ
// //2 ways

// // //! 1) using DOt operator
// // console.log(student1.id);
// // console.log(student1.x);
// // //! 2 using square bracket
// // console.log(student1["id"]);
// // console.log(student1[x]);  //use let var and call the key  //access through variable



// //LOOPS

// //? for of  gives only the index of arr
// // for(let i of arr){
// // console.log(i);
// // }


// // //?for in  gives only index of the variable
// // only way to iterate objects 
// // for(let i in arr)
// // {
// //     console.log(i);
// // }



// // //!only way to iterate an OBJECT

// // // for(let i in student1)
// // // {
// // //     console.log(student1[i]);  //here we cannot use dot operator otherwise we get undefined
// // // }


// // //! UPDATE
// // //if key present update if not then it create new key inside the objcet
// // student1.age=20


// // //! DELETE 

// // delete student1.class;

// // console.log(student1);




// //! How to create own methods

// let emp1={
//     id:1,
//     fname:"JOHN",
//     lname:"DOE",

//     getFullName: function(){
//         console.log(this.fname,this.lname);
//     }

// }


// emp1.getFullName();




//! this keyward--->


function getEmail(){
    console.log(`${this.fname}.${this.lname}@gmail.xom`);

}


function  greet(city,state){
    console.log(`${this.fname} is from ${city} and ${state}`);

}
const emp1={
    id:1,
    fname: "jane",
    lname:"doe",
company: "TCS"

}

const emp2={
    id:2,
    fname: "Clark",
    lname:"Kent",
company: "HCL"

}

const emp3={
    id:3,
    fname: "Bruce",
    lname:"Wayne",
company: "Wipro"

}


//! call () apply() bind()

//this show the value of the object
console.log(emp1);

//! this is call function
//this is used to point the object even it is outside the objcet 
//if we dont call like this it will refer to the windows object



//? call()  calls a fucntion immediately with a specified "this" and accepts multiple arguments
getEmail.call(emp1)

greet.call(emp1,"noida","UP")


//! apply()  calls a fucntion immediately with a specified "this" and accepts  2 arguments



getEmail.apply(emp2)

greet.apply(emp2,["noida","UP"])



//! bind()

let boundedGetEmail=getEmail.bind(emp3)
boundedGetEmail();


let boundedGreet=greet.bind(emp3)
boundedGreet("Noida","UP")





























