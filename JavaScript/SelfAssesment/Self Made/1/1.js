// function displayTodos(alltodo) {
//   alltodo.forEach(element => {

//   let{title:tit}=element;

//   document.writeln(`<div><h3>TODO:${tit}</h3></div>`)

// });
//   console.log(alltodo);
// }

// async function sayMyName() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();
//     displayTodos(data);
//   } catch(err) {
//     console.log(err);
//   }
// }

// sayMyName();

//! asyunc

setTimeout(() => {
  console.log("hi thbis is settimeout function");
}, 3000);

setInterval(() => {
  console.log("this is interval function");
}, 1000);
