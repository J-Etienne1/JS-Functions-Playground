// Rest param allows a function to accept any number of arguments
// this is set using ...
// A function can only have 1 Rest param and must be the last param

function collect(x, ...y){
   console.log(x)
   console.log(y)
}

// x will be assigned 1
// y will be assigne the Array [2,3,4,5,6,7,8,9]
collect(1,2,3,4,5,6,7,8,9)