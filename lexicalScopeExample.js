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
    y();
    console.log(b)
}
x();
