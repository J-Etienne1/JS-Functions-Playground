

// Immediately Invoked Function Expression

// Code inside the function gets invoked immediately after it is defined


function x(){
    return x
}

x();



/////



(function(){
    console.log("IIFE")
})() // defining and calling

// anon function with group operator around that, then invoke the function