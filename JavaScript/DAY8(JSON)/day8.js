
//! JSON local storage and session

let user1={
    id:1,
    fname:"john",
    lname:"Doe",
    sal:50000,
    company:"Qspider",
}

 //? Store data in localstorage  or Session Storage
 //convert object into json which is string  or we can say js to json
//  let jsonObject=JSON.stringify(user1);
//  //setItem set data Into the application in developer tools 
//  //both are in string from that why we have to convert object in string
//  localStorage.setItem("users", jsonObject);


 //! --------> get data from local or session storage

//  let storageData=localStorage.getItem("users");
//  let jsObject=JSON.parse(storageData); //convert json to js
//  console.log(jsObject);


 //!-->   remove single key from the local or session storage

//  localStorage.removeItem("hello");


//  //! remove all the keys from the local or session storage

//  localStorage.clear();


//!API methods
//response store in then block and error store in catch block
//? incase of internet issue it gives failed to fetch
let p1=fetch("https://jsonplaceholder.typicode.com/todos")
console.log(p1);

p1.then((response) =>{ //data nikalega server se
    console.log("Promise fullfiled");
    console.log(response);

    let p2=response.json();
    console.log(p2);

    p2.then((data)=>{
        console.log(data);
    });

    p2.catch(()=> {
        console.log("Something went Wrong");
    })
})

p1.catch(()=>{
    console.log("Promise Rejected");
})


//Penidg kuch na chlega
//then fullfilled me chlega
//catch rejected me chlega




let promise1=fetch("https://jsonplaceholder.typicode.com/todos")
console.log(promise1);

promise1.then((response)=>{
    let promise2=response.json();
    console.log(promise2);

    promise2.then((data)=>{
        console.log(data);
    })

    promise2.catch((err)=>{
        console.log(err);
    })

})


promise1.catch((err)=>{
    console.log(err);
})


promise1.finally(()=>{
    console.log("API called completed");
})
















