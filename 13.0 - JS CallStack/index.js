

function f1(){
    
}


function f2(){
    
}


function f3(){
    
}


f1()
f2()
f3()


// f1 called, added to call stack

|    |
|    |
| f1 |

// f1 finishes and is removed from call stack


// f2 called, added to call stack

|    |
|    |
| f2 |

// f2 finishes and is removed from call stack


// f3 called, added to call stack

|    |
|    |
| f3 |

// f3 finishes and is removed from call stack

|    |
|    |
|    |


// Another example

function f4(){

}

function f5(){
    f4();
}

function f6(){
    f5();
}

f6();


// f6 called
|   f4   |
|   f5   |
|   f6   |

// then start to be removed after reching f4 as f6 is still been invoked as has other function it calls on and so on
|      |
|  f5  |
|  f6  |


|      |
|      |
|  f6  |

|      |
|      |
|      |