
let arr=[10,634,4,5,6,43,56,23]
let min=100000000000;
let max=0;


let length=arr.length-1;
while(length>=0)
{
    if(max<arr[length]){
        max=arr[length];
    }
     if(min>arr[length])
    {
        min=arr[length]
    }
    length--;
}

console.log(max,min);