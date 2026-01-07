
//DAY 5

//? Advance array method


//! array.forEach()  //return nothing 
let arr=[10,20,30,40,50];

let val=arr.forEach((element,index,array)=>{
    console.log(element,index,array);  //first element store value 2nd index array store complete array
    return element+5;
});
console.log(val);



//! array.map() //return new array with updated value

console.log("-----------------ARRAY MAP---------------");
let arr1=[10,20,30,40,50]
let val1=arr1.map((element,index,array)=>{
    console.log(element,index,array);  //first element store value 2nd index array store complete array
    return element+5

});

console.log(val1);


//!array.filter()
//it return  the value but if u use map then it return boolean value
let arr3=[10,20,30,40,50]
let val3=arr3.filter(element=>element>=30)
console.log(val3);

//!array.find()
//it return only one value which is the first occurance while //!filter return the multiple value in a array
//if value is not present return undefined
let val4=arr3.find(element=>element===30)
console.log(val4);

//! array.findIndex()
//return single value which is index of the value
let val5=arr3.findIndex((element)=> element===30)
console.log(val5);

//!array.reduce()

//? Why reduce
let sum=0;

for(let i=0;i<arr3.length;i++)
{
    sum+=arr3[i]

}

console.log("the sum is=",sum);


//! array.reduce()

let val6=arr1.reduce((acc,element,index,array)=>{
    console.log(acc,element);

},0);

console.log("the sum is-->",val6);



//! REST and SPREAD OPERATOR
let arr4=[10,20,30,40,50]
console.log(...arr4);// this is spread bcz we spread the array from the array to open


let arr5=["hello",true,null,100,...arr4]
console.log(arr5);//this is rest packed the element inside the array



//! array DESTRUCTURING:--

// console.log(arr[1]);
//array k andr sare element ko ek ek variable me store kr dena

let arr6=[10,20,30,40,50,60,70]

let [a,b,c,d,...e]=arr6;

console.log(a);
console.log(b);
console.log(e);