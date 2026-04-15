

const x=async()=>{

    const response=await fetch('https://jsonplaceholder.typicode.com/photos');
    const data=await response.json();
    console.log(data);
     
    display(data);
}



function display(data){
    data.forEach((element) => {
        let div=document.createElement("div");
        div.setAttribute("class","card");   

        let img=document.createElement("img");
        img.src=element.url;

        let title=document.createElement("h3");
        title.innerText=element.title;  

        body.append(div);
        div.append(img,title);
    });
}
    