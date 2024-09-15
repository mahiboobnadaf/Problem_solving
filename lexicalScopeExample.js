let a = 10;
{
    let a = 100;

    {
        console.log(a)
    }
    console.log(a)

}
console.log(a)


// ------------------------------------------- //
console.log("// ------------------------------------ //")

function x(){
    var b = 10;
    function y(){
        console.log(b)
    }
    // return y;
    y()
}
// let z = x();
// console.log(z)
// z()
