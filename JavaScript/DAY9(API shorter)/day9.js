

// //!  Async and Await

//works with only async function
async function getTodo(){
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/todos")//directly store response bcz used await
        //if we dont use await it store the promise but if you use await it store directly the response and data
        let data= await response.json();//store data directly inside the data without giving promise bcz used await
        displayTodos(data);


    }

    catch(err){
        console.log("API calling error" ,err);
    }
}


getTodo();


function displayTodos(allTodos){
    console.log(allTodos);

    allTodos.forEach((todo)=>{
        let {id,userId,title}=todo;

 document.writeln(
//        `
//         <div>
//             <h3>
//                TODO:${title}
//             </h3>

//             ${
//                 completed?
//                 `<span style="background-color:green">Completed</span>`
//                 `<span style="background-color:red">Pending</span>`

//             }



//         </div>

//         `
//     );
//     })


//    



// }


//!correct code for the get fetch api



function displayTodos(alltodo) {
  alltodo.forEach(element => {

  let{title:tit}=element;
  
  document.writeln(`<div><h3>TODO:${tit}</h3></div>`)


});
  console.log(alltodo);
}

//!how to do this

async function sayMyName() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await response.json();
    displayTodos(data);
  } catch(err) {
    console.log(err);
  }
}

sayMyName();
 









//? all are async functions ..

// //!setIntercval and setTimeout
//seettime runs single time time in milisec
// console.log("5 sec timer started");
// setTimeout(()=>{
//     console.log("5 sec timer completed");
// },5000)

// //setInterval runs multiple time at every time interval and returns and id
// let intervalID=setInterval(()=>{
//     console.log("hii");
// },2000)

// setTimeout(()=>{
//     clearInterval(intervalID)//this claear  id and stop the interval
//     console.log("interval stopped");

// },10000)





console.log("start");

setTimeout(function timeout1(){
    console.log("Time out 1");
},4000)

console.log("hello world");

Promise.resolve("success").then(function promiseFunc(res){
    console.log(res);
})


setTimeout(function timeout2(){
    console.log("Time out 2");
},0)

console.log("end");


//first all sync code run and then the settimeout function goto task queue and promises goto microtsask queue then it wait and event loop runs the code
//first microtask queue execute then task queue will execute 
//if they all have same timing then it run according to the written structure line by line from top to bottom