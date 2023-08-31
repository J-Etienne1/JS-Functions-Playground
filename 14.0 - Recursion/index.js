
/* 

function foo(){
    console.log("foo");
    foo();
}

foo();

 */



// Anoter example
/* 
const foo = function buz(){
    buz();
} 

 */

// When using Recusrion make sure to have a Base condition
function recurse() {
    if (base_condition) {
        // do something
        return;
    }
    recurse();
}



// eg

function fetchWater(count) {
    if (count === 0) {
        console.log("No more water left")
        return;
    }
    console.log("Fetching Water......");
    fetchWater(count - 1);
}


fetchWater(20);