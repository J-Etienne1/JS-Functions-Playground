// Pure function products the same output for the same input



function greeting(name){
    return `Hello ${name}`;
}

console.log(greeting("Jason"));


// Impure function
let greeting2 = "Hello";

function greet(name){
    return `${greeting2} ${name}`;
}

greet("Jason")

greeting2 = "Hi"

greet("Jason")
