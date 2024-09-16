// Closure example 2

function x(){
    var b = 10;
    function y(){
        console.log(b)
    }
    b = 100;
    return y
}
let z = x();
console.log(z)          // prints function y

z()                     // prints 100;  in y() coz b references b variable;



function a(){

    function x(){
        let c = 200;
        let b = 10;

        function y(){
            console.log(b,c)
        }

        b = 1200;
        y();
        
    }
    x()    
}
a();