

//! api fetching


async function name(e) {
    
  try{
      let response=await fetch("https://jsonplaceholder.typicode.com/users");

    let data=await response.json();

    console.log("data fetched",data);

    display(data);
  }

  catch(err){
    console.log("Data fetched failed",err);

  }
}

function  display(todo){

    todo.forEach(element => {
        console.log(element);

        let {id,name}=element;

        let res=document.writeln(`THE ID OF DATA<h1>${id}</h1>  <br> ${name}`)
    
       
        
    });

    

  
}



name();
