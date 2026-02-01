

const divTag=document.createElement("div")
const buttonTag=document.createElement("button")
buttonTag.innerHTML="Login"

document.body.append(buttonTag)

    async function greet() {

        let response= await fetch("https://jsonplaceholder.typicode.com/posts");

        let data=await response.json();

        
displayOnUI(data);
    
}


function displayOnUI(alldata){
    alldata.forEach(element => {
        let{title,body}=element;

        console.log(title,body);

        // document.writeln(`<h1>${title} </h1>
        //     <p>${body}</p>
        //     `)

    });
}
greet();