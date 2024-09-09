var z = 5
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