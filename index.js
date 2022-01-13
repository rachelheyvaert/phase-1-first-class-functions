/*
The returnsANamedFunction function should:

take no arguments
return a named function
The returnsAnAnonymousFunction function should:

take no arguments
return an anonymous function*/
function receivesAFunction(cb) {
    console.log(cb());
    
}


function returnsANamedFunction(){
     return function namedFunction(){
    }   
}

function returnsAnAnonymousFunction() {
    return function(){

    }
}