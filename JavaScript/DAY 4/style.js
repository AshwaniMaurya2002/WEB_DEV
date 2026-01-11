// //! Array
//hetrogeneous save different type of data in same array
// //! 1)array literals
// let arr1=[10];
// console.log(arr1
// //! 2) Array Constructor
// let arr2=new Array(10);//if one value is passed then it works as the space not as a value
// let arr3=new Array(10,42);
// console.log(arr2);
//
// //! Array Method

// let arr1=[10,20,30,40,50]
//array push
// console.log(arr1);

// console.log("length of the arr1",arr1.length);


// //array.push method : append element at the last of the array and return the new lenght of the array

// let newLength=arr1.push(60,70,80)
// console.log(arr1);
// console.log("length of the array",newLength);

// //array pop() : remove last element and return it

// let lastE1=arr1.pop();
// console.log(arr1);
// console.log("the last element which is remove",lastE1);
// //array unshift():  append element at the first index of the and return the new length;

// let newLength1=arr1.unshift(100,200,300)
// console.log(arr1);
// console.log("New Lenght is: ",newLength1);

 // //! Mutable(NON - Primitive) and ImMutable(Primitve
 
 // let str1="hello"
 // // str[0]="x"  gives error bcz in js string is primitive
 // console.log(str1)
 // let arr=[10,20,30,40,50]
 // console.log(arr);
 // arr[0]="hii
 // console.log(arr);


// //! array.shift() :- remove first element from an array and return it
// let firstE1=arr1.shift();
// console.log(arr1);
// console.log("The first elemet which is removed that is",firstE1);



// //? splice and slice

// //? interview question what is the use of slice and splice



// //! Splice   arr1.splice(startIndex,deleteCount,newElement)

// //only remove
// let arr2=[100,200,300,400,500]
// let deletedArray=arr2.splice(2,1)//return the delete element in new array
// console.log(deletedArray);
// console.log(arr2);

// //only add
// let deletedArray2=arr2.splice(3,0,"HII")// nothing is delete so returnn and empty array
// console.log(deletedArray2);
// console.log(arr2);

// //add and remove both

// let deletedArray3=arr2.splice(1,2,true)
// console.log(deletedArray3);
// console.log(arr2);



// //?  Slice   arr.slice(startIndex,endIndex)  --> it does not modify the original array return only the value extractedd  while splice change the original array

// let arr3=[100,200,300,400,500]

// let sliceArr=arr3.slice(1,4) // last element is exclusive so always used one more element 
// console.log("The slice array is",sliceArr);
// console.log("After slice",arr3);


// //if print all element till end
// let sliceArr2=arr3.slice(1)
// console.log("slice array till last",sliceArr2);


// //! array.sort()

// let arr4=[10,2,60,3,57,8]

// //lexographical sorting- no get converted into srting and the sort according to character only first char then next char is checked
// let sortedArray1=arr4.sort();

// console.log(sortedArray1);

// let sortedArray2=arr4.sort((a,b)=>a-b);
// /*
// if number >0 ===> swap
// if number <0 ===> no swap
// if number =0 ===>no swap
// */

// console.log(sortedArray2); //sort in asendig order

// let sortedArray3=arr4.sort((a,b)=> b-a)
// console.log(sortedArray3);



// //! array.reverse()

// let arr5=[10,2,34,56,6]
// console.log(arr5);
// let rev=arr5.reverse();

// console.log("after reversed",rev);
// console.log(arr5);  //reverse the same/original array and return it


// //Array Destructuring with skipping elements

// let arr2=[100,200,300,400,500,600]
// let [n1,,n2,,,n3]=arr2;

// console.log(n1,n2,n3);


//!Nested Array destructuring
// let arr3=[1000,2000[10,20,30,40,[54,80,500],50,60]]
// let [x1,,[,x2,,x3,[,x4],,x5]]=arr3;
// console.log(x1);
// console.log(x2);
// console.log(x3);
// console.log(x4);
// console.log(x5);

//1000,20,40,80,60

// //!example of react
// function useState(initialState){
//     return [initialState,()=>{}]

// }

// let [state,setstate]=useState()






















