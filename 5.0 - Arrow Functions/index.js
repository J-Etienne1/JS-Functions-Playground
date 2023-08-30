/* 
const add = function (x, y) {
  return x + y;
}; 
*/


const add = (x,y) =>{
    return x + y;
}
 
console.log(add(2,3))

// short hand if there is only 1 return
const add2 = (x,y) => x + y;

console.log(add2(2,3))



// short hand if there is only 1 paramater
const add3 = x => x ;

console.log(add3(2))