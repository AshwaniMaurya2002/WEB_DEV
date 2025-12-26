
function recursiveFactorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * recursiveFactorial(n - 1);
}

let result = recursiveFactorial(5); // Output: 120
console.log(result);

prompt("Enter The NO:");

