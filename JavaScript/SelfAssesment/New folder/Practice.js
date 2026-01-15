

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




// API testing

//sbse phle server se fetch kia data store kia
let promise=fetch("https://jsonplaceholder.typicode.com/comments")

console.log(promise);

//yha store hoga promise milega then tb chlega jb promise fullfilled ho aur response dega
promise.then((response)=>{

    //usss response ko ab ham json se js file me convert kr dege using the .json method
 let promise2=response.json();
 console.log(promise2);

 //after converting using json methods it is stored in promise 2 which again gives a 2nd promise if gives us data 
 //and if the promise fullfilled then block executed or else catch block runs
    promise2.then((data)=>{
        console.log(data);
    })

    //run when promise rejected
promise.catch((error)=>{
    console.log(error);
})


})

//runs when promise is rejected
promise.catch((error)=>{
    console.log(err);
    
})


//it runs always either the promise accepted or rejected
promise.finally(()=>{
    console.log("API completed");
})









