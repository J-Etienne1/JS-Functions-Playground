
// is a regular function that takes on 1 or more functiuons as arguments and/or returns a function as a value of it

function getCapture(camera){
    camera();
}


getCapture(function(){
    console.log("Canon")
})


/////////


function returnFn(){
    return function(){
        console.log("returning")
    }
}


const fn = returnFn();

console.log(fn())


