
function outer(x){
    function inner(y){  // inner function is what forms the Closure
        return x + y;
    }
    return inner;
}

// what you can then do is call the outer function and spicify the argument and then leverage both outer and inner functions together

const outerReturn = outer(10)

console.log(outerReturn) //  10 is saved to 10 + y

console.log(outerReturn(2)) // added this and now 10 + 2 = 12