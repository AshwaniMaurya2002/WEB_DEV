//! Object methods

let obj={id:1,ename:"John"}

//Object.keys(); //return keys in array
let keys=Object.keys(obj)
console.log(keys);


//?Object.values()  //return value in array
let values=Object.values(obj)
console.log(values);
//Object.entries(); //return key value pair inside the array 

let entries=Object.entries(obj)
console.log(entries);

//?Object.fromEntries();  ----> Reverse of entries it make array into objects
let obj2=Object.fromEntries(entries)
console.log(obj2);




//! Object Destructuring
let employee1={
    id:1,
    fname:"john",
    lname:"doe",
    address:{
        pincode:110096,
        city:"noida",
        state:"UP",
    },

    hobbies:["coading","gaming","travelling"],
    sal:60000,
    company:"HCL"
}


//destucturing here we change the key name and give default vaalue
let {fname:firstName,company="NA",sal:salary=0}=employee1;
console.log(firstName,company,salary);


//* colon : k baaaaaaad bracket dege to destructuring hoga name dege to naam change ho jaiga
//!   : colon k baad kuch bhi dena yani ki uss key k name change kr dena

//nested Destructuring

let {address:{city:c1},hobbies:[,,h1]}=employee1;
//!this is destructuring if we destrcture the object then we cannot access with the original 
// //!key name we have to use with the new destructured named

console.log(c1,h1);





//!JSON --- javascript object Notation

//datatype is string of json

//let json=JSON.stinigify(JSobj)
// let jsObj=JSON.parse(JSONObj)





