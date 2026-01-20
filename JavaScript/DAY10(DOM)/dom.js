    // //! Document Object Model



// //? Dom selectos: to target html elements and apply fucntionality to it there are 5 type of DOM selectors

// //* 1) document.getElementById(); //return only first element single return while scanning from top to bottom


// const h2Tag=document.getElementById("subheading");
// console.log(h2Tag);//<h2></h2>
// console.log(h2Tag.textContent);//text of h2 tag
// //change color of background
// h2Tag.style.backgroundColor="red";


// //* 2) document.getElementsByClassName()  return multiple elements in a array like Object
// let arr=[10,20,30]
// console.log(arr);
// const elements=document.getElementsByClassName("content")
// console.log(elements);

// console.log(elements[0].textContent);

// //? Array.isArray() is used to check weather array is pure or not,return boolean value
// console.log(Array.isArray(elements));
// console.log(Array.isArray(arr));


// //! Note: -- HtmlCollection is a array like object it is not a pure aarray beccause it does not have array propertyy in their prototype



// //! 3) document.getElementsByTagName()

// let sections=document.getElementsByTagName("section")
// console.log(sections);
// console.log(sections[2]);


// //? here we get html collection which is array like object

// //! 4)   document.querySelector() 
//   //select only one element which get fisrt like id selector but we can pass id class tag all here
// const ele1=document.querySelector("#subheading")
// console.log(ele1);

// const ele2=document.querySelector(".content")
// console.log(ele2);

// const ele3=document.querySelector("section")
// console.log(ele3);


// //if we passs all the priority will be 1st- id,2nd-class,3rd-section
// const ele4=document.querySelector("section , .content, #subheading")
// console.log(ele4);



// // document.querySelectorAll()
// //same as queryselector but target multiple elements

// const list1=document.querySelectorAll("section")
// console.log(list1);  //returns nodelist not htmlcollection it is also impure array

// const list2=document.querySelectorAll(".content")
// console.log(list2);//returns nodelist not htmlcollection it is also impure array


// const list3=document.querySelectorAll("#subheading")
// console.log(list3);///returns nodelist not htmlcollection it is also impure array


// const list4=document.querySelectorAll("section,.content, #subheading")
// console.log(list4);///returns nodelist not htmlcollection it is also impure array with only one element in it

// //same squence as query selector id class then section


//!HTMLcollection[] VS NodeList[]

const collection=document.getElementsByTagName("section")
const list=document.querySelectorAll("section")

//---> similarity:---> Both are Impure array

console.log(Array.isArray(collection));  //false
console.log(Array.isArray(list));  //false

// diff:

//* 1)  We cannot use any of the array methods  in html collection but we can use forEach() in nodeList[]

console.log(collection);

console.log(list);
list.forEach(ele=> console.log(ele))




//* 2) HtmlCollection are known as LiveCollection whereas Nodelist is known as staticCollection

console.log("HTMLCollection------------>",collection.length);  //3
console.log("HTMLCollection------------>",list.length);  //3

//create a element in the console
const sectionTag=document.createElement("section")
//add text to the element
sectionTag.textContent="HELLO WORLD"

console.log(sectionTag);
//this move the section to the html page  
document.body.appendChild(sectionTag);


//4 becasuse htmlcollection sote all live collction
console.log("HTMLCollection------------>",collection.length);  //4
console.log("HTMLCollection------------>",list.length);  //3  because it store only static collection



//* 3) 

















