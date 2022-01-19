
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