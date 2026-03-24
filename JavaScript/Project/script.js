const productContainer=document.querySelector(".products-container");
const themeBtn=document.querySelector("#themeBtn")

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark")
}


themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle("dark")

    //save theme
    const theme=document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem('theme',theme);
})



async function fetchAllProduct() {
try{
        let resp=await fetch("https://dummyjson.com/products")
    let data=await resp.json();
    console.log(data);

    displayProducts(data.products);

}

    catch(error){
    console.log(error);
    displayProducts([]);
}
    
}

window.addEventListener("DOMContentLoaded",()=>{
    fetchAllProduct();
})



function displayProducts(allProducts){

    if(allProducts.length===0){
        productContainer.innerHTML=`<p> Loading......</p>`

    }
    else{
        const productWrapper=document.createElement("article")
        productWrapper.className="wrapper";
        
    allProducts.map((product)=>{
        // console.log(product);
        let{description,id ,title,price,thumbnail}=product;

        const productCard=document.createElement("div")

        productCard.className="card";
        productCard.id=id;



        productCard.innerHTML=`
        
        <img src='${thumbnail}'  alt='${title}'>
        <h2>${title}</h2>
        <p> Rs.${price}</p>

        <p title='${description} ' >${description.slice(0,50)}...</p>

        <button>Add to cart</button>

        
        `

        productWrapper.append(productCard)


    })
    productContainer.append(productWrapper);

    }
}