

//! OBJECT

//?Object literal
//    {a:b}  a is key b is value together we called it property
// let obj={id:1,name:"Mohit",isLoggedIN:true};
// obj.company="HCL"//add int the object
// console.log(obj);

// //?Object Constructor
// let obj2=new Object({id: 2,name:"rohan"})
// obj2.company="TCS"  //used to add in the object
// console.log(obj2);



//! CRUD

let student1={
    id:"231AS",
    fname:"HOHIT",
    lname:"KUMAR",
    age:15,
    city:"DELHI",
    class:8,
}

let x="city"

//?READ
//2 ways

// //! 1) using DOt operator
// console.log(student1.id);
// console.log(student1.x);
// //! 2 using square bracket
// console.log(student1["id"]);
// console.log(student1[x]);  //use let var and call the key  //access through variable



//LOOPS

//? for of  gives only the index of arr
// for(let i of arr){
// console.log(i);
// }


// //?for in  gives only index of the variable
// only way to iterate objects 
// for(let i in arr)
// {
//     console.log(i);
// }



// //!only way to iterate an OBJECT

// // for(let i in student1)
// // {
// //     console.log(student1[i]);  //here we cannot use dot operator otherwise we get undefined
// // }


// //! UPDATE
// //if key present update if not then it create new key inside the objcet
// student1.age=20


// //! DELETE 

// delete student1.class;

// console.log(student1);




//! How to create own methods

let emp1={
    id:1,
    fname:"JOHN",
    lname:"DOE",

    getFullName: function(){
        console.log(this.fname,this.lname);
    }

}


emp1.getFullName();










