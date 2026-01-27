const productContainer=document.querySelector(".products-container");


async function fetchAllProduct() {
try{
        let resp=await fetch("https://dummyjson.com/products")
    let data=await resp.json();
    // console.log(data);

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
        
        `

        productWrapper.append(productCard)


    })


    productContainer.append(productWrapper);


    }
}