

function printMe(){
    console.log("Hello World");
}


printMe();

console.log("/////////////////////////////////////////////////////////////")



function printThis(parm){ // when delcaring a function what you enter in the () is a Parameter
    console.log(parm);
}


printThis("using a function Parameter"); // when calling a function what you enter in the () is an Argument


console.log("/////////////////////////////////////////////////////////////")


//Declaring a function as a function expression

const printThat = function(){
    console.log("print")
}

printThat();




const printThatWithParam = function(a,b ){
    console.log(a,b)
}

printThatWithParam(10, 20);