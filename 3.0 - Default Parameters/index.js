

function calc(a,b){
    return (2*(a+b));
}

console.log(calc(2,3))


// using calc(2) will fail and return NaN (Not a Number)
// to safeguard against this we can use default values



function calc2(a,b=0){
    return (2*(a+b));
}

console.log(calc2(2))