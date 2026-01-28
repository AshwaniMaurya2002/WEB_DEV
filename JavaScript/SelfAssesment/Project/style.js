const productContainer=document.querySelector(".products-container")



async function loadProduct() {

    let response= await fetch("https://dummyjson.com/carts")
    let data =await response.json();

    // console.log(data);

    displayProducts(data);

}


window.addEventListener('DOMContentLoaded',()=>{
   loadProduct();
})


function displayProducts(data){


    // let displayProduct=products.map((product)=>{

    //     return ` <div class="product-card">
    //     <img src='${product.products[0].thumbnail}' alt="Product Image" />
    //     <h3>User ID: ${product.userId}</h3>
    //     <h4>Total Products: ${product.totalProducts}</h4>
    //     <h4>Total Quantity: ${product.totalQuantity}</h4>
    //     <h4>Total Price: $${product.total}</h4>
    //     <h4>Discounted Price: $${product.discountedTotal}</h4>
    // </div>`
    // }).join("");

    // productContainer.innerHTML=displayProduct;
}


