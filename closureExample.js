// Closure is a function , bunded with its parents lexical scope in known Closure


function x(){
    var b = 10;
    function y(){
        console.log(b)
    }
    y()
}
x();


