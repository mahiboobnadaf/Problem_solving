console.log(z) // hoising  accessing before initialization
 z = 50
 console.log(z)
 var z;

 
function foo(){
    var x = 1;

    function bar(){
        var y = 2;
        x=3
        var z=7
        
        console.log(x)
        console.log(y)
        console.log(z)


    }
    // console.log(y)
    bar()
    console.log(x)
    console.log(z)



}
foo()

var a=2;
var a=9;
console.log(a)
var a;
console.log(a)

var c =10;
function c(){
    console.log("hey")
}
console.log(c)