// First Class Fucntions or First class Citizens

    // The abiity of a function to be used as variable values and can be passed as arguments to another functions 
    // and can be returned from the functions is called First class Fucntions.

// Example
function a(param1){
    console.log(param1);
}
a(function (){ });


//Example 2
function b(){
    return function xyz(){
        console.log("returned by xyz")
    }
}
let c= b()
console.log(c);
c();
