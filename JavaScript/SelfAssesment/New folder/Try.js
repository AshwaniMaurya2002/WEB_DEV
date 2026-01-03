

// debugger;
// function abcd(){

//     return function xyz(){
//         console.log("Hello World");
//     }
// }

// var val = abcd();

// val();


// function savings(amount){

// let bal=amount;
// console.log(`your balance is ${bal}`);



//     function fixedDeposit(years){
//         let year = years;
//         console.log(`your balance is ${bal} and  fixed deposit year is ${year}`);
//     }


//     return fixedDeposit(12);

// }


function parent(){

     let money =80000;
 console.log(money);
 
    function child(){
        let savings=1000;
        console.log(savings+money);//! money is accessed due to the clouser property
        
    }

    return child();
}

let val=parent();
console.log(val);
