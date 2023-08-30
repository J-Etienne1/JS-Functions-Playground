/* 
A function can access all the variables defined in the global scope: Yes, this is true. Functions in JavaScript have access to variables that are defined in the same scope they are defined in (local scope) as well as variables defined in higher scopes (like the global scope or outer function scopes). 
*/


/* 
A variable declared in a function cannot be accessed in the global scope: This statement is generally true. Variables declared inside a function using the var, let, or const keywords are usually scoped to that function. They are not accessible in the global scope or any other outer function scopes. These variables are said to have local function scope.
*/


var globalVariable = "I am global"; // Global scope

function myFunction() {
    var localVariable = "I am local"; // Local scope to myFunction
    
    console.log(globalVariable); // Can access globalVariable
    console.log(localVariable);  // Can access localVariable
}

myFunction();
console.log(globalVariable); // Can access globalVariable outside the function
// console.log(localVariable); // This would result in an error since localVariable is not accessible here
