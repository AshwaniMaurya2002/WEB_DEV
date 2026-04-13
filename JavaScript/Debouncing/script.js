// const searchInput= document.getElementById("searchInput");


// const apiCall = ()=>{
//     console.log("Api CAll");
    
// }

// const optimisedDebouncedFn = _.debounce(apiCall,2000);

// searchInput.addEventListener("input",(e)=>{
//     optimisedDebouncedFn();
// })



const searchInput= document.getElementById("searchInput");


const apiCall = ()=>{
    console.log("Api CAll");
    
}

const optimisedThrottledFn = _.throttle(apiCall, 2000);

searchInput.addEventListener("input",(e)=>{
    optimisedThrottledFn();
})



